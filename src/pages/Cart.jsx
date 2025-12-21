import { useCart } from "../context/CartContext";
import CartList from "../components/cart/CartList";
import CartSummary from "../components/cart/CartSummary";
import { Link, useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems = [] } = useCart();
  const navigate = useNavigate();

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  const isEmpty = cartItems.length === 0;

  // ✅ PLACE ORDER HANDLER (AMOUNT RECEIVE KAREGA)
  const handlePlaceOrder = (amountData) => {
    // amountData = { subtotal, total }
    navigate("/checkout", {
      state: amountData,
    });
  };

  return (
    <>
      <style>{`
        .cart-page {
          min-height: 100vh;
          padding: 100px 20px 120px;
        }

        .cart-heading {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          margin-bottom: 60px;
          letter-spacing: 1px;
        }

        .cart-light {
          font-size: 26px;
          font-weight: 500;
          color: #6b7280;
        }

        .cart-bold {
          font-size: 26px;
          font-weight: 700;
          color: #b91c1c;
        }

        .cart-line {
          width: 60px;
          height: 3px;
          background: #b91c1c;
          border-radius: 2px;
          margin-left: 6px;
        }

        .cart-layout {
          max-width: 1080px;
          margin: auto;
          display: grid;
          grid-template-columns: 1.7fr 1fr;
          gap: 36px;
          align-items: flex-start;
        }

        .empty-wrap {
          max-width: 520px;
          margin: 80px auto;
          background: #ffffff;
          border-radius: 22px;
          padding: 70px 40px;
          text-align: center;
          box-shadow: 0 14px 36px rgba(185, 28, 28, 0.18);
        }

        .empty-wrap h3 {
          font-size: 20px;
          font-weight: 600;
          margin-bottom: 10px;
          color: #111827;
        }

        .empty-wrap p {
          font-size: 14px;
          color: #6b7280;
          margin-bottom: 28px;
        }

        .empty-btn {
          display: inline-block;
          padding: 14px 36px;
          border-radius: 999px;
          background: linear-gradient(135deg, #dc2626, #991b1b);
          color: #ffffff;
          font-weight: 600;
          text-decoration: none;
          box-shadow: 0 10px 26px rgba(220, 38, 38, 0.4);
        }

        @media (max-width: 900px) {
          .cart-layout {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="cart-page">
        <div className="cart-heading">
          <span className="cart-light">YOUR</span>
          <span className="cart-bold">CART</span>
          <span className="cart-line"></span>
        </div>

        {isEmpty ? (
          <div className="empty-wrap">
            <h3>Your cart is empty</h3>
            <p>Add products to continue shopping</p>
            <Link to="/collection" className="empty-btn">
              Continue Shopping →
            </Link>
          </div>
        ) : (
          <div className="cart-layout">
            <CartList cartItems={cartItems} />

            {/* ✅ CORRECT PROPS */}
            <CartSummary
              subtotal={subtotal}
              onPlaceOrder={handlePlaceOrder}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
