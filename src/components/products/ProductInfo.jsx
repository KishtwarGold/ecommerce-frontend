import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";

export default function ProductInfo({ product }) {
  const [qty, setQty] = useState(1);
  const navigate = useNavigate();
  const { addToCart } = useCart();

  if (!product) return null;

  const { name, price, category, productType, image, id } = product;

  const incQty = () => setQty((q) => q + 1);
  const decQty = () => setQty((q) => (q > 1 ? q - 1 : 1));

  // ✅ ADD TO CART (NO CHANGE)
  const handleAddToCart = () => {
    addToCart({
      id,
      name,
      price,
      category,
      productType,
      image,
      qty,
    });
  };

  // ✅ BUY NOW (ONLY LOGIC CHANGE)
  // ❌ cart ka koi function use nahi hoga
  const handleBuyNow = () => {
    navigate("/checkout", {
      state: {
        buyNow: true,
        item: {
          id,
          name,
          price,
          category,
          productType,
          image,
          qty,
        },
        subtotal: price * qty,
        total: price * qty,
      },
    });
  };

  return (
    <>
      <style>{`
        :root {
          --brand-red: #B11212;
          --brand-red-soft: #FDECEC;
          --brand-dark: #1f2937;
          --brand-muted: #6b7280;
        }

        .product-title-premium {
          font-family: "Playfair Display", Georgia, serif;
          font-size: 38px;
          font-weight: 700;
          color: var(--brand-red);
          letter-spacing: 0.6px;
          line-height: 1.25;
        }

        @media (max-width: 640px) {
          .product-title-premium {
            font-size: 28px;
          }
        }

        .pi-root {
          padding-top: 8px;
        }

        .pi-price-row {
          margin-top: 22px;
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .pi-price {
          font-size: 30px;
          font-weight: 800;
        }

        .pi-desc {
          margin-top: 22px;
          max-width: 520px;
          font-size: 15px;
          line-height: 1.8;
          color: var(--brand-dark);
        }

        .pi-meta {
          margin-top: 10px;
          font-size: 14px;
          color: var(--brand-muted);
        }

        .qty-wrap {
          margin-top: 28px;
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .qty-label {
          font-weight: 700;
          font-size: 13px;
          letter-spacing: 0.4px;
          color: var(--brand-dark);
        }

        .qty-box {
          display: flex;
          align-items: center;
          border: 1.5px solid #e5e7eb;
          border-radius: 999px;
          overflow: hidden;
          background: #ffffff;
        }

        .qty-btn {
          width: 42px;
          height: 42px;
          border: none;
          background: transparent;
          font-size: 18px;
          font-weight: 700;
          cursor: pointer;
          color: var(--brand-red);
        }

        .qty-value {
          width: 46px;
          text-align: center;
          font-weight: 700;
          font-size: 15px;
          color: var(--brand-dark);
        }

        .cta-row {
          margin-top: 34px;
          display: flex;
          gap: 20px;
          max-width: 420px;
        }

        .btn-outline-red {
          flex: 1;
          padding: 16px;
          border-radius: 999px;
          border: 2px solid var(--brand-red);
          background: transparent;
          color: var(--brand-red);
          font-weight: 700;
          letter-spacing: 0.4px;
          transition: all 0.25s ease;
          cursor: pointer;
        }

        .btn-outline-red:hover {
          background: var(--brand-red);
          color: #ffffff;
        }

        .btn-solid-red {
          flex: 1;
          padding: 16px;
          border-radius: 999px;
          border: none;
          background: var(--brand-red);
          color: #ffffff;
          font-weight: 700;
          letter-spacing: 0.4px;
          box-shadow: 0 14px 36px rgba(177,18,18,0.35);
          cursor: pointer;
        }
      `}</style>

      <div className="pi-root">
        <h1 className="product-title-premium">{name}</h1>

        <div className="pi-price-row">
          <div className="pi-price">₹{price}</div>
        </div>

        <p className="pi-desc">
          Premium quality <b>{productType}</b> from our <b>{category}</b>.
          Carefully packed to preserve freshness and aroma.
        </p>

        <div className="pi-meta">Category: {category}</div>

        <div className="qty-wrap">
          <span className="qty-label">QTY</span>
          <div className="qty-box">
            <button className="qty-btn" onClick={decQty}>−</button>
            <span className="qty-value">{qty}</span>
            <button className="qty-btn" onClick={incQty}>+</button>
          </div>
        </div>

        <div className="cta-row">
          <button className="btn-outline-red" onClick={handleAddToCart}>
            Add To Cart
          </button>

          <button className="btn-solid-red" onClick={handleBuyNow}>
            Buy Now
          </button>
        </div>
      </div>
    </>
  );
}
