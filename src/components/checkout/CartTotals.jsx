const CartTotals = ({
  subtotal = 0,
  total: passedTotal,
  onPlaceOrder
}) => {

  const total = passedTotal ?? subtotal;

  const handlePlaceOrder = () => {
    if (!onPlaceOrder) return;

    onPlaceOrder({
      subtotal,
      total,
    });
  };

  return (
    <>
      <style>{`
        .cart-box {
          background: #ffffff;
          border-radius: 24px;
          padding: 32px 30px;
          box-shadow: 0 24px 48px rgba(185, 28, 28, 0.12); /* red shadow */
          margin-bottom: 24px;
        }

        .cart-title {
          font-size: 20px;
          font-weight: 700;
          letter-spacing: 1px;
          margin-bottom: 22px;
          color: #7f1d1d; /* dark red */
        }

        .cart-title span {
          color: #dc2626; /* brand red */
        }

        .cart-row {
          display: flex;
          justify-content: space-between;
          font-size: 14px;
          margin-bottom: 14px;
          color: #475569;
        }

        .cart-divider {
          height: 1px;
          background: #fee2e2; /* light red */
          margin: 18px 0;
        }

        .cart-total {
          display: flex;
          justify-content: space-between;
          font-size: 20px;
          font-weight: 700;
          margin-top: 6px;
          color: #7f1d1d;
        }

        .cart-total span:last-child {
          color: #dc2626; /* total red */
        }

        .cart-tax {
          font-size: 12px;
          color: #94a3b8;
          text-align: center;
          margin-top: 8px;
        }

        .place-order-btn {
          margin-top: 26px;
          width: 100%;
          height: 56px;
          border-radius: 16px;
          border: none;
          background: linear-gradient(135deg, #dc2626, #991b1b); /* red gradient */
          color: #ffffff;
          font-size: 16px;
          font-weight: 700;
          letter-spacing: 0.4px;
          cursor: pointer;
        }
      `}</style>

      <div className="cart-box">
        <div className="cart-title">
          CART <span>TOTALS</span>
        </div>

        <div className="cart-row">
          <span>Subtotal</span>
          <span>₹ {subtotal}.00</span>
        </div>

        <div className="cart-divider"></div>

        <div className="cart-total">
          <span>Total Amount</span>
          <span>₹ {total}.00</span>
        </div>

        <div className="cart-tax">
          Inclusive of all taxes
        </div>

        {onPlaceOrder && (
          <button
            className="place-order-btn"
            onClick={handlePlaceOrder}
          >
            PLACE ORDER
          </button>
        )}
      </div>
    </>
  );
};

export default CartTotals;
