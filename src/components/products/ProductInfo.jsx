import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";

export default function ProductInfo({ product }) {
  const [qty, setQty] = useState(1);
  const navigate = useNavigate();
  const { addToCart } = useCart();

  if (!product) return null;

  const { name, price, category, productType, image, id, rating } = product;

  const incQty = () => setQty((q) => q + 1);
  const decQty = () => setQty((q) => (q > 1 ? q - 1 : 1));

  const handleAddToCart = () => {
    addToCart({ id, name, price, category, productType, image, qty });
  };

  const handleBuyNow = () => {
    navigate("/checkout", {
      state: {
        buyNow: true,
        item: { id, name, price, category, productType, image, qty },
      },
    });
  };

  const renderStars = (val = 4.5) => {
    const stars = [];
    const full = Math.floor(val);
    const half = val % 1 >= 0.5;
    for (let i = 0; i < 5; i++) {
      if (i < full || (i === full && half)) {
        stars.push(<span key={i} style={{ color: "#e8a020", fontSize: "20px", lineHeight: 1 }}>★</span>);
      } else {
        stars.push(<span key={i} style={{ color: "#ccc", fontSize: "20px", lineHeight: 1 }}>★</span>);
      }
    }
    return stars;
  };

  return (
    <>
      <style>{`
        :root {
          --brand-red: #B11212;
          --brand-dark: #1f2937;
          --brand-muted: #6b7280;
        }

        /* ─────────────────────────────────────────
           DEFAULT: MOBILE UI shown, DESKTOP hidden
        ───────────────────────────────────────── */
        .pi-mobile { display: block; }
        .pi-desktop { display: none; }

        /* ─────────────────────────────────────────
           TABLET & LAPTOP (≥ 768px):
           DESKTOP shown, MOBILE hidden
        ───────────────────────────────────────── */
        @media (min-width: 768px) {
          .pi-mobile  { display: none; }
          .pi-desktop { display: block; }
        }

        /* ══════════════════════════════
           MOBILE STYLES
        ══════════════════════════════ */
        .pi-mobile {
          padding: 12px 16px 24px 16px;
          box-sizing: border-box;
        }

        .m-title {
          font-family: "Playfair Display", Georgia, serif;
          font-size: 26px;
          font-weight: 700;
          color: var(--brand-red);
          letter-spacing: 0.4px;
          line-height: 1.3;
          margin: 0 0 10px 0;
        }

        .m-stars-row {
          display: flex;
          align-items: center;
          gap: 4px;
          margin-bottom: 14px;
        }

        .m-stars-text {
          font-size: 16px;
          color: var(--brand-muted);
          font-weight: 500;
          margin-left: 4px;
        }

        .m-desc {
          font-size: 14px;
          line-height: 1.75;
          color: var(--brand-dark);
          margin: 0 0 18px 0;
        }

        .m-price {
          font-size: 28px;
          font-weight: 800;
          color: var(--brand-dark);
          margin-bottom: 24px;
        }

        .m-actions-row {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 14px;
        }

        .m-qty-box {
          display: flex;
          align-items: center;
          border: 1.5px solid #e5e7eb;
          border-radius: 999px;
          background: #fff;
          flex-shrink: 0;
        }

        .m-qty-btn {
          width: 38px;
          height: 42px;
          border: none;
          background: transparent;
          font-size: 20px;
          font-weight: 700;
          cursor: pointer;
          color: var(--brand-dark);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .m-qty-btn:hover { background: #f3f4f6; }

        .m-qty-value {
          width: 36px;
          text-align: center;
          font-weight: 700;
          font-size: 15px;
          color: var(--brand-dark);
        }

        .m-btn-outline {
          flex: 1;
          padding: 13px 10px;
          border-radius: 999px;
          border: 2px solid var(--brand-red);
          background: transparent;
          color: var(--brand-red);
          font-weight: 700;
          font-size: 14px;
          cursor: pointer;
          white-space: nowrap;
          transition: all 0.22s ease;
        }

        .m-btn-outline:hover {
          background: var(--brand-red);
          color: #fff;
        }

        .m-btn-solid {
          width: 100%;
          padding: 15px;
          border-radius: 999px;
          border: none;
          background: var(--brand-red);
          color: #fff;
          font-weight: 700;
          font-size: 15px;
          box-shadow: 0 10px 28px rgba(177,18,18,0.32);
          cursor: pointer;
          transition: opacity 0.2s ease;
        }

        .m-btn-solid:hover { opacity: 0.92; }

        /* ══════════════════════════════
           DESKTOP / TABLET STYLES (original)
        ══════════════════════════════ */
        .product-title-premium {
          font-family: "Playfair Display", Georgia, serif;
          font-size: 38px;
          font-weight: 700;
          color: var(--brand-red);
          letter-spacing: 0.6px;
          line-height: 1.25;
        }

        .pi-root { padding-top: 8px; }

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

        .pi-desc-d {
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

      {/* ── MOBILE UI (< 768px) ── */}
      <div className="pi-mobile">
        <h1 className="m-title">{name}</h1>

        <div className="m-stars-row">
          {renderStars(rating ?? 4.5)}
          <span className="m-stars-text">{rating ?? 4.5} review</span>
        </div>

        <p className="m-desc">
          Premium quality <b>{productType}</b> from our <b>{category}</b>.
          Carefully packed to preserve freshness and aroma.
        </p>

        <div className="m-price">₹{price}</div>

        <div className="m-actions-row">
          <div className="m-qty-box">
            <button className="m-qty-btn" onClick={decQty}>−</button>
            <span className="m-qty-value">{qty}</span>
            <button className="m-qty-btn" onClick={incQty}>+</button>
          </div>
          <button className="m-btn-outline" onClick={handleAddToCart}>
            Add To Cart
          </button>
        </div>

        <button className="m-btn-solid" onClick={handleBuyNow}>
          Buy Now
        </button>
      </div>

      {/* ── DESKTOP / TABLET UI (≥ 768px) — original ── */}
      <div className="pi-desktop">
        <div className="pi-root">
          <h1 className="product-title-premium">{name}</h1>

          <div className="pi-price-row">
            <div className="pi-price">₹{price}</div>
          </div>

          <p className="pi-desc-d">
            Premium quality <b>{productType}</b> from our <b>{category}</b>.
            Carefully packed to preserve freshness and aroma.
          </p>

          <div style={{ display: "flex", alignItems: "center", gap: "4px", marginTop: "12px" }}>
            {renderStars(rating ?? 4.5)}
            <span style={{ fontSize: "17px", color:" var(--brand-muted)", fontWeight: 600, marginLeft: "4px" }}>
              {rating ?? 4.5} review
            </span>
          </div>

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
      </div>
    </>
  );
}