const CartSummary = ({ subtotal = 0, onPlaceOrder }) => {
  const total = subtotal;

  // ✅ button click handler
  const handleCheckout = () => {
    onPlaceOrder({
      subtotal,
      total,
    });
  };

  return (
    <>
      <style>{`
        .summary-modern {
          background: #ffffff;
          border-radius: 20px;
          padding: 26px 24px 28px;
          box-shadow: 0 6px 18px rgba(0,0,0,0.08);
        }

        .summary-modern h3 {
          font-size: 18px;
          font-weight: 600;
          color: #7f1d1d;
          margin-bottom: 22px;
        }

        .summary-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 15px;
          margin-bottom: 18px;
          color: #475569;
        }

        .summary-divider {
          height: 1px;
          background: #fee2e2;
          margin: 20px 0;
        }

        .summary-total {
          display: flex;
          justify-content: space-between;
          font-size: 18px;
          font-weight: 700;
          color: #7f1d1d;
        }

        .summary-total span:last-child {
          color: #dc2626;
        }

        .tax-text {
          margin-top: 10px;
          font-size: 12px;
          color: #94a3b8;
          text-align: center;
        }

        .checkout-modern {
          margin-top: 24px;
          width: 100%;
          padding: 15px;
          border-radius: 14px;
          border: none;
          background: linear-gradient(135deg, #dc2626, #991b1b);
          color: #ffffff;
          font-size: 15px;
          font-weight: 700;
          cursor: pointer;
          letter-spacing: 0.3px;
        }
      `}</style>

      <div className="summary-modern">
        <h3>Order Summary</h3>

        <div className="summary-row">
          <span>Subtotal</span>
          <span>₹ {subtotal}.00</span>
        </div>

        <div className="summary-divider"></div>

        <div className="summary-total">
          <span>Total Amount</span>
          <span>₹ {total}.00</span>
        </div>

        <div className="tax-text">
          Inclusive of all taxes
        </div>

        {/* ✅ WORKING BUTTON */}
        <button
          className="checkout-modern"
          onClick={handleCheckout}
        >
          CHECKOUT NOW →
        </button>
      </div>
    </>
  );
};

export default CartSummary;
