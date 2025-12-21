import { useCart } from "../../context/CartContext";
import { RiDeleteBin6Line } from "react-icons/ri";

const CartItem = ({ item }) => {
  const { addToCart, removeFromCart } = useCart();

  const increaseQty = () => {
    addToCart({ ...item, qty: 1 });
  };

  const decreaseQty = () => {
    if (item.qty > 1) {
      addToCart({ ...item, qty: -1 });
    }
  };

  return (
    <>
      <style>{`
        .cart-item {
          background: #ffffff;
          border-radius: 16px;
          padding: 18px 22px;
          display: grid;
          grid-template-columns: 90px 1fr auto;
          gap: 20px;
          align-items: center;
          box-shadow: 0 6px 18px rgba(0,0,0,0.08);
        }

        /* IMAGE */
        .cart-img {
          width: 90px;
          height: 90px;
          border-radius: 12px;
          object-fit: cover;
        }

        /* CENTER CONTENT */
        .cart-info {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .cart-title {
          font-size: 18px;
          font-weight: 600;
          color: #0f172a;
        }

        .cart-meta {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .qty-label {
          font-size: 12px;
          color: #64748b;
        }

        /* QTY CONTROL */
        .qty-control {
          display: flex;
          align-items: center;
          border: 1px solid #fecaca; /* light red border */
          border-radius: 8px;
          overflow: hidden;
          background: #ffffff;
        }

        .qty-btn {
          width: 28px;
          height: 32px;
          border: none;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          color: #7f1d1d;
          transition: background 0.2s ease;
        }

        .qty-btn:hover {
          background: #fee2e2;
        }

        .qty-value {
          width: 36px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          font-weight: 600;
          color: #0f172a;
        }

        /* RIGHT SIDE */
        .cart-right {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          justify-content: space-between;
          height: 100%;
        }

        .cart-price {
          font-size: 16px;
          font-weight: 700;
          color: #b91c1c; /* brand red */
        }

        /* DELETE ICON */
        .delete {
          cursor: pointer;
          font-size: 18px;
          color: #9ca3af;
          transition: all 0.2s ease;
        }

        .delete:hover {
          color: #dc2626;
          transform: scale(1.1);
        }
      `}</style>

      <div className="cart-item">
        {/* IMAGE */}
        <img src={item.image} alt={item.name} className="cart-img" />

        {/* CENTER */}
        <div className="cart-info">
          <div className="cart-title">{item.name}</div>

          <div className="cart-meta">
            <span className="qty-label">QTY:</span>

            <div className="qty-control">
              <button className="qty-btn" onClick={decreaseQty}>−</button>
              <div className="qty-value">{item.qty}</div>
              <button className="qty-btn" onClick={increaseQty}>+</button>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="cart-right">
          <div className="cart-price">₹{item.price * item.qty}</div>

          <span
            className="delete"
            onClick={() => removeFromCart(item.id)}
            title="Remove item"
          >
            <RiDeleteBin6Line />
          </span>
        </div>
      </div>
    </>
  );
};

export default CartItem;
