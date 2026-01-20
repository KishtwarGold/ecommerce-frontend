import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { load } from '@cashfreepayments/cashfree-js';
import axios from "axios";
import DeliveryForm from "../components/checkout/DeliveryForm";
import CartTotals from "../components/checkout/CartTotals";

const Checkout = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { cartItems, getTotalPrice, clearCart } = useCart();

  // Use cart from route state OR fallback to context cart
  const items = state?.items || cartItems;
  const subtotal = state?.subtotal || getTotalPrice();
  const total = state?.total || getTotalPrice();

  // States
  const [orderId, setOrderId] = useState("");
  const [loading, setLoading] = useState(false);
  const [cashfree, setCashfree] = useState(null);

  // Initialize Cashfree SDK
  useEffect(() => {
    const initializeSDK = async () => {
      try {
        const cashfreeInstance = await load({
          mode: "production",
        });
        setCashfree(cashfreeInstance);
        console.log("✅ Cashfree SDK initialized");
      } catch (error) {
        console.error("❌ Cashfree SDK initialization failed:", error);
      }
    };

    initializeSDK();
  }, []);

  // Get payment session ID from backend
  const getSessionId = async (customerData) => {
    try {
      // Debug logging
      console.log("API URL:", import.meta.env.VITE_API_URL);
      console.log("Sending payment data:", {
        amount: total,
        customer: {
          customer_name: customerData.name,
          customer_email: customerData.email,
          customer_phone: customerData.phone,
        },
        items: items
      });

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
      console.error("❌ Error creating payment session:", error);
      console.error("Response data:", error.response?.data);
      console.error("Response status:", error.response?.status);
      console.error("Request data:", error.config?.data);
      alert("Error creating payment session. Please try again.");
      return null;
    }
  };

  // Verify payment
  const verifyPayment = async (orderIdToVerify) => {
    try {
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/payment/verify`, {
        orderId: orderIdToVerify
      });

      if (res && res.data && res.data.success) {
        alert("Payment verified successfully! ✅ Your order has been placed.");
        clearCart();
        navigate('/');
      } else {
        alert("Payment verification failed. Please contact support.");
      }
    } catch (error) {
      console.error("Payment verification error:", error);
      alert("Payment verification failed. Please contact support.");
    }
  };

  // Handle final order
  const handleFinalOrder = async (formData) => {
    try {
      if (items.length === 0) {
        alert("Your cart is empty!");
        return;
      }

      if (!formData.name || !formData.email || !formData.phone) {
        alert("Please fill all required fields");
        return;
      }

      if (!cashfree) {
        alert("Payment system is loading. Please wait...");
        return;
      }

      console.log("Final Payable Amount:", total);
      console.log("Cart Items:", items);
      console.log("Customer Details:", formData);
      setLoading(true);

      const sessionId = await getSessionId(formData);
      
      if (!sessionId) {
        setLoading(false);
        return;
      }

      const checkoutOptions = {
        paymentSessionId: sessionId,
        redirectTarget: "_modal",
      };

      cashfree.checkout(checkoutOptions).then((result) => {
        console.log("Payment completed:", result);
        verifyPayment(orderId);
        setLoading(false);
      }).catch((error) => {
        console.error("Payment error:", error);
        setLoading(false);
        alert("Payment cancelled or failed.");
      });

    } catch (error) {
      console.error("Checkout Error:", error);
      setLoading(false);
      alert("Something went wrong. Please try again.");
    }
  };

  // Check if cart is empty
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
            onPlaceOrder={() => {
              console.log("Place order clicked");
            }}
            loading={loading}
          />
        </div>
      </div>
    </>
  );
};

export default Checkout;

