import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import axios from "axios";
import DeliveryForm from "../components/checkout/DeliveryForm";
import CartTotals from "../components/checkout/CartTotals";

const Checkout = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { cartItems, getTotalPrice, clearCart } = useCart();

  // const items = state?.items || cartItems;
  // const subtotal = state?.subtotal || getTotalPrice();
  // const total = state?.total || getTotalPrice();


  const isBuyNow = Boolean(state?.buyNow && state?.item);

const items = isBuyNow
  ? [state.item]        // Buy Now → single item ko array banaya
  : cartItems;          // Normal cart flow

const subtotal = isBuyNow
  ? state.item.price * state.item.qty
  : getTotalPrice();

const total = subtotal;



  const [loading, setLoading] = useState(false);
  const [cashfreeReady, setCashfreeReady] = useState(false);

  // ✅ Preload Cashfree SDK on component mount
  useEffect(() => {
    const checkCashfree = () => {
      if (typeof window.Cashfree !== 'undefined') {
        console.log("✅ Cashfree SDK loaded");
        setCashfreeReady(true);
      } else {
        console.log("⏳ Waiting for Cashfree SDK...");
        setTimeout(checkCashfree, 100);
      }
    };
    checkCashfree();
  }, []);

  const getSessionId = async (customerData) => {
    try {
      console.log("📡 Creating payment session...");
      
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/payment/create`, 
        {
          amount: total,
          customer: {
            customer_name: customerData.name,
            customer_email: customerData.email,
            customer_phone: customerData.phone,
          },
          items: items
        },
        {
          timeout: 10000, // 10 second timeout
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
      
      if (res.data?.paymentSessionId) {
        console.log("✅ Session created:", res.data.orderId);
        return {
          sessionId: res.data.paymentSessionId,
          orderId: res.data.orderId
        };
      }
      throw new Error("No payment session ID received");
      
    } catch (error) {
      console.error("❌ Session creation failed:", error.response?.data || error.message);
      throw new Error(error.response?.data?.message || "Failed to create payment session");
    }
  };

  const verifyPayment = async (orderIdToVerify) => {
    try {
      console.log("🔍 Verifying payment:", orderIdToVerify);
      
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/payment/verify`,
        { orderId: orderIdToVerify },
        { timeout: 10000 }
      );

      if (res?.data?.success) {
        alert("✅ Payment successful! Order placed.");
        // clearCart();
        // navigate('/');

        if (!isBuyNow) {
  clearCart();
}
navigate('/');

      } else {
        alert("❌ Payment verification failed. Please contact support with Order ID: " + orderIdToVerify);
      }
    } catch (error) {
      console.error("❌ Verification error:", error);
      alert("Payment verification failed. Order ID: " + orderIdToVerify);
    }
  };

  const handleFinalOrder = async (formData) => {
    try {
      // Validation
      if (items.length === 0) {
        alert("Cart is empty!");
        return;
      }

      if (!formData.name || !formData.email || !formData.phone) {
        alert("Please fill all required fields");
        return;
      }

      // Check Cashfree
      if (!cashfreeReady) {
        alert("⏳ Payment system is loading. Please wait a moment and try again.");
        return;
      }

      setLoading(true);
      console.log("🛒 Processing order...", { amount: total });

      // Get payment session
      const paymentData = await getSessionId(formData);
      
      if (!paymentData?.sessionId) {
        throw new Error("Failed to create payment session");
      }

      const { sessionId, orderId } = paymentData;
      console.log("💳 Opening payment for order:", orderId);

      // Initialize Cashfree
      const cashfree = window.Cashfree({
        mode: import.meta.env.VITE_CASHFREE_ENV === "PROD" ? "production" : "sandbox"
      });

      // Payment options - using _self for better compatibility
      const checkoutOptions = {
        paymentSessionId: sessionId,
        redirectTarget: "_modal"
      };

      console.log("🚀 Opening payment modal...");

      // Open payment
      cashfree.checkout(checkoutOptions).then((result) => {
        console.log("💳 Payment result:", result);
        
        if (result.error) {
          console.error("Payment error:", result.error);
          alert(`Payment failed: ${result.error.message}`);
          setLoading(false);
          return;
        }
        
        if (result.paymentDetails) {
          console.log("✅ Payment completed, verifying...");
          verifyPayment(orderId);
        } else {
          setLoading(false);
        }
        
      }).catch((error) => {
        console.error("💥 Payment error:", error);
        alert("Payment was cancelled or failed.");
        setLoading(false);
      });

    } catch (error) {
      console.error("💥 Checkout Error:", error);
      setLoading(false);
      alert(`Error: ${error.message}`);
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
        {!cashfreeReady && (
          <div style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            background: 'white',
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
            zIndex: 9999
          }}>
            <p>Loading payment system...</p>
          </div>
        )}
        
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