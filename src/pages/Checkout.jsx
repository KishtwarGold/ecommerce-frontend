import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import axios from "axios";
import DeliveryForm from "../components/checkout/DeliveryForm";
import CartTotals from "../components/checkout/CartTotals";

const Checkout = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { cartItems, getTotalPrice, clearCart } = useCart();

  const items = state?.items || cartItems;
  const subtotal = state?.subtotal || getTotalPrice();
  const total = state?.total || getTotalPrice();

  const [loading, setLoading] = useState(false);

  const loadCashfreeSDK = () => {
    return new Promise((resolve, reject) => {
      // Check if already loaded
      if (window.Cashfree) {
        console.log("✅ Cashfree SDK already loaded");
        resolve(window.Cashfree);
        return;
      }

      // Check if script already exists
      const existing = document.querySelector('script[src*="cashfree.js"]');
      if (existing) {
        existing.addEventListener('load', () => {
          if (window.Cashfree) {
            resolve(window.Cashfree);
          } else {
            reject(new Error("Cashfree not found after load"));
          }
        });
        return;
      }

      // Create new script
      const script = document.createElement('script');
      script.src = 'https://sdk.cashfree.com/js/v3/cashfree.js';
      script.async = false; // ✅ Changed to false for better loading
      
      script.onload = () => {
        console.log("📦 Script loaded, checking Cashfree...");
        // Wait a bit for Cashfree to be available
        setTimeout(() => {
          if (window.Cashfree) {
            console.log("✅ Cashfree SDK loaded successfully");
            resolve(window.Cashfree);
          } else {
            reject(new Error("Cashfree object not found after script load"));
          }
        }, 100);
      };
      
      script.onerror = (e) => {
        console.error("Script load error:", e);
        reject(new Error("⚠️ Failed to load Cashfree SDK. Check internet connection or disable ad blocker."));
      };
      
      document.head.appendChild(script);
      console.log("📡 Loading Cashfree SDK...");
    });
  };

  const getSessionId = async (customerData) => {
    try {
      console.log("📡 Creating payment session...");
      console.log("API URL:", import.meta.env.VITE_API_URL);
      console.log("Amount:", total);
      
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/payment/create`, {
        amount: total,
        customer: {
          customer_name: customerData.name,
          customer_email: customerData.email,
          customer_phone: customerData.phone,
        },
        items: items
      });
      
      if (res.data && res.data.paymentSessionId) {
        console.log("✅ Payment session created:", res.data);
        // 🔥 RETURN BOTH sessionId AND orderId
        return {
          sessionId: res.data.paymentSessionId,
          orderId: res.data.orderId
        };
      } else {
        throw new Error("No payment session ID received");
      }
    } catch (error) {
      console.error("❌ Error creating payment:", error.response?.data || error.message);
      throw error;
    }
  };

  const verifyPayment = async (orderIdToVerify) => {
    try {
      console.log("🔍 Verifying payment for order:", orderIdToVerify);
      
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/payment/verify`, {
        orderId: orderIdToVerify
      });

      console.log("Verification response:", res.data);

      if (res && res.data && res.data.success) {
        alert("✅ Payment successful! Order placed.");
        clearCart();
        navigate('/');
      } else {
        alert("❌ Payment verification failed.");
      }
    } catch (error) {
      console.error("❌ Verification error:", error.response?.data || error.message);
      alert("Payment verification failed: " + (error.response?.data?.message || error.message));
    }
  };

  const handleFinalOrder = async (formData) => {
    try {
      console.log("🛒 Starting checkout process...");
      
      if (items.length === 0) {
        alert("Cart is empty!");
        return;
      }

      if (!formData.name || !formData.email || !formData.phone) {
        alert("Please fill all required fields");
        return;
      }

      console.log("💰 Final Amount:", total);
      console.log("📦 Customer Data:", formData);
      
      setLoading(true);

      // Load Cashfree SDK
      let CashfreeSDK;
      try {
        CashfreeSDK = await loadCashfreeSDK();
      } catch (error) {
        alert(error.message);
        setLoading(false);
        return;
      }

      // Initialize Cashfree in PRODUCTION mode
      console.log("🔧 Initializing Cashfree...", CashfreeSDK);
      
      if (!CashfreeSDK || !CashfreeSDK.Cashfree) {
        throw new Error("Cashfree SDK not properly loaded");
      }
      
      const cashfree = await CashfreeSDK.Cashfree.init({
        mode: "production" // ✅ Production mode for live
      });
      
      console.log("✅ Cashfree initialized:", cashfree);

      // Get payment session - 🔥 GET BOTH sessionId AND orderId
      const paymentData = await getSessionId(formData);
      
      if (!paymentData || !paymentData.sessionId) {
        alert("Failed to create payment session");
        setLoading(false);
        return;
      }

      const { sessionId, orderId } = paymentData;
      console.log("💳 Session ID:", sessionId);
      console.log("📋 Order ID:", orderId);

      const checkoutOptions = {
        paymentSessionId: sessionId,
        redirectTarget: "_modal",
      };

      console.log("🚀 Opening Cashfree payment modal...");

      // Open payment modal
      cashfree.checkout(checkoutOptions).then((result) => {
        console.log("💳 Payment modal result:", result);
        
        if (result.error) {
          console.error("Payment error:", result.error);
          alert("Payment failed: " + result.error.message);
          setLoading(false);
          return;
        }
        
        // 🔥 USE THE orderId FROM RESPONSE, NOT STATE!
        if (result.paymentDetails) {
          console.log("✅ Payment completed, verifying...");
          verifyPayment(orderId); // ✅ NOW USING CORRECT orderId
        }
        
        setLoading(false);
      }).catch((error) => {
        console.error("💥 Payment modal error:", error);
        alert("Payment cancelled or failed.");
        setLoading(false);
      });

    } catch (error) {
      console.error("💥 Checkout Error:", error);
      setLoading(false);
      alert("Something went wrong: " + (error.message || "Unknown error"));
    }
  };

  if (!items || items.length === 0) {
    return (
      <div className="checkout-bg" style={{ textAlign: "center", paddingTop: "150px" }}>
        <h2 style={{ fontSize: "24px", marginBottom: "20px", fontWeight: "600" }}>
          Your cart is empty
        </h2>
        <button 
          onClick={() => navigate('/collection')}
          style={{
            padding: "12px 30px",
            backgroundColor: "#dc2626",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "16px",
            fontWeight: "600"
          }}
        >
          Continue Shopping
        </button>
      </div>
    );
  }

  return (
    <>
      <style>{`
        .checkout-bg {
          min-height: 100vh;
          padding: 110px 20px 120px;
        }

        .checkout-grid {
          max-width: 1200px;
          margin: auto;
          display: grid;
          grid-template-columns: 1.7fr 1fr;
          gap: 48px;
          align-items: flex-start;
        }

        .checkout-bg * {
          animation: none !important;
          transform: none !important;
        }

        @media (max-width: 900px) {
          .checkout-grid {
            grid-template-columns: 1fr;
            gap: 28px;
          }
        }
      `}</style>

      <div className="checkout-bg">
        <div className="checkout-grid">
          <DeliveryForm 
            onSubmit={handleFinalOrder}
            loading={loading}
          />

          <CartTotals
            subtotal={subtotal}
            total={total}
            items={items}
            loading={loading}
          />
        </div>
      </div>
    </>
  );
};

export default Checkout;