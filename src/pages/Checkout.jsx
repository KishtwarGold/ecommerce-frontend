import { useLocation, useNavigate } from "react-router-dom";
import DeliveryForm from "../components/checkout/DeliveryForm";
import CartTotals from "../components/checkout/CartTotals";

const Checkout = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  // 🛡️ Safety: agar direct /checkout open ho jaye
  const subtotal = state?.subtotal || 0;
  const total = state?.total || 0;

  // ✅ UPDATED: Place order → backend → cashfree
  const handleFinalOrder = async () => {
    try {
      console.log("Final Payable Amount:", total);

      // ⚠️ yahan tum apna real data plug kar sakti ho
      const customer = {
        customer_name: "Guest User",       // baad me auth se aayega
        customer_email: "guest@gmail.com",
        customer_phone: "9999999999",
      };

      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/api/payment/create`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            items: state?.items || [],     // cart items
            amount: total,
            customer,
          }),
        }
      );

      const data = await res.json();

      if (!data.success) {
        alert("Order creation failed");
        return;
      }

      // 🔥 OPEN CASHFREE HOSTED PAYMENT PAGE
      const cashfree = new window.Cashfree();
      cashfree.checkout({
        paymentSessionId: data.paymentSessionId,
        redirectTarget: "_self",
      });

    } catch (error) {
      console.error("Checkout Error:", error);
      alert("Something went wrong. Please try again.");
    }
  };

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
          {/* LEFT: ADDRESS FORM */}
          <DeliveryForm />

          {/* RIGHT: ORDER SUMMARY */}
          <CartTotals
            subtotal={subtotal}
            total={total}
            onPlaceOrder={handleFinalOrder}
          />
        </div>
      </div>
    </>
  );
};

export default Checkout;
