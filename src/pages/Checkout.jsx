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

  const [orderId, setOrderId] = useState("");
  const [loading, setLoading] = useState(false);

  const loadCashfreeSDK = () => {
    return new Promise((resolve, reject) => {
      if (window.Cashfree) {
        resolve(window.Cashfree);
        return;
      }

      const script = document.createElement('script');
      script.src = 'https://sdk.cashfree.com/js/v3/cashfree.js';
      script.async = true;
      
      script.onload = () => {
        if (window.Cashfree) {
          console.log("✅ Cashfree SDK loaded");
          resolve(window.Cashfree);
        } else {
          reject(new Error("Cashfree not found"));
        }
      };
      
      script.onerror = () => {
        reject(new Error("⚠️ Payment system blocked. Please disable ad blocker."));
      };
      
      document.head.appendChild(script);
    });
  };

  const getSessionId = async (customerData) => {
    try {
      console.log("API URL:", import.meta.env.VITE_API_URL);
      
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
        setOrderId(res.data.orderId);
        return res.data.paymentSessionId;
      }
    } catch (error) {
      console.error("❌ Error creating payment:", error);
      alert("Error creating payment. Please try again.");
      return null;
    }
  };

  const verifyPayment = async (orderIdToVerify) => {
    try {
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/payment/verify`, {
        orderId: orderIdToVerify
      });

      if (res && res.data && res.data.success) {
        alert("✅ Payment successful! Order placed.");
        clearCart();
        navigate('/');
      } else {
        alert("Payment verification failed.");
      }
    } catch (error) {
      console.error("Verification error:", error);
      alert("Payment verification failed.");
    }
  };

  const handleFinalOrder = async (formData) => {
    try {
      if (items.length === 0) {
        alert("Cart is empty!");
        return;
      }

      if (!formData.name || !formData.email || !formData.phone) {
        alert("Please fill all required fields");
        return;
      }

      console.log("Final Amount:", total);
      setLoading(true);

      let CashfreeSDK;
      try {
        CashfreeSDK = await loadCashfreeSDK();
      } catch (error) {
        alert(error.message);
        setLoading(false);
        return;
      }

      const cashfree = await CashfreeSDK.Cashfree.init({
        mode: "production"
      });

      const sessionId = await getSessionId(formData);
      
      if (!sessionId) {
        setLoading(false);
        return;
      }

      const checkoutOptions = {
        paymentSessionId: sessionId,
        redirectTarget: "_modal",
      };

      console.log("🚀 Opening payment modal...");

      cashfree.checkout(checkoutOptions).then((result) => {
        console.log("Payment result:", result);
        
        if (result.error) {
          alert("Payment failed: " + result.error.message);
          setLoading(false);
          return;
        }
        
        if (result.paymentDetails) {
          verifyPayment(orderId);
        }
        
        setLoading(false);
      }).catch((error) => {
        console.error("Payment error:", error);
        alert("Payment cancelled or failed.");
        setLoading(false);
      });

    } catch (error) {
      console.error("Checkout Error:", error);
      setLoading(false);
      alert("Something went wrong.");
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