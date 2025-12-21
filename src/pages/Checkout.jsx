import { useLocation, useNavigate } from "react-router-dom";
import DeliveryForm from "../components/checkout/DeliveryForm";
import CartTotals from "../components/checkout/CartTotals";

const Checkout = () => {
  const { state } = useLocation(); 
  const navigate = useNavigate();

  // 🛡️ Safety: agar direct /checkout open ho jaye
  const subtotal = state?.subtotal || 0;
  const total = state?.total || 0;

  // (optional) final place order
  const handleFinalOrder = () => {
    console.log("Final Payable Amount:", total);

    // yahan future me API / payment call hogi
    alert(`Order placed for ₹ ${total}`);
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
