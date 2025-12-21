import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  // 🔒 SAME LOGIC – NO UI CHANGE
  const productName =
    product?.title || product?.name || "Premium Product";

  // ✅ SAFE PRODUCT ID (NO RANDOM FALLBACK)
  const productId = product?._id ?? product?.id;

  const handleNavigate = () => {
    if (!productId) {
      console.warn("Product ID missing:", product);
      return;
    }
    navigate(`/product/${productId}`);
  };

  return (
    <>
      <style>{`
        :root {
          --theme-red: #B11212;
          --theme-red-soft: #E11D1D;
          --theme-red-light: #FDECEC;
          --card-shadow: 0 10px 28px rgba(0,0,0,0.08);
        }

        .product-card {
          background: #ffffff;
          border-radius: 20px;
          padding: 12px;
          width: 100%;
          display: flex;
          flex-direction: column;
          height: 100%;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
          cursor: pointer;
        }

        .product-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--card-shadow);
        }

        /* IMAGE */
        .product-image {
          width: 100%;
          height: 200px;
          border-radius: 16px;
          overflow: hidden;
          background: #f3f4f6;
        }

        .product-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.4s ease;
        }

        .product-card:hover .product-image img {
          transform: scale(1.05);
        }

        /* CONTENT */
        .product-content {
          margin-top: 12px;
          display: flex;
          flex-direction: column;
          flex: 1;
          gap: 6px;
        }

        /* TITLE */
        .product-title {
          font-size: 16px;
          font-weight: 600;
          color: #111827;
          line-height: 1.4;
          min-height: 40px;

          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;

          transition: color 0.25s ease;
        }

        .product-card:hover .product-title {
          color: var(--theme-red);
        }

        /* PRICE ROW */
        .price-row {
          margin-top: auto;
          padding: 8px 10px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .price {
          font-size: 18px;
          font-weight: 700;
          color: var(--theme-red);
        }

        /* ARROW */
        .arrow-btn {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          border: 1px solid var(--theme-red);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--theme-red);
          font-size: 15px;
          background: #ffffff;
          transition: background 0.25s ease, color 0.25s ease;
        }

        .product-card:hover .arrow-btn {
          background: var(--theme-red);
          color: #ffffff;
        }

        /* MOBILE */
        @media (max-width: 600px) {
          .product-image {
            height: 160px;
          }

          .product-title {
            font-size: 14px;
            min-height: 36px;
          }

          .price {
            font-size: 15px;
          }
        }
      `}</style>

      <div className="product-card" onClick={handleNavigate}>
        <div className="product-image">
          <img src={product.image} alt={productName} />
        </div>

        <div className="product-content">
          <div className="product-title">{productName}</div>

          <div className="price-row">
            <div className="price">₹{product.price}</div>

            {/* Arrow click also navigates */}
            <div
              className="arrow-btn"
              onClick={(e) => {
                e.stopPropagation();
                handleNavigate();
              }}
            >
              →
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
