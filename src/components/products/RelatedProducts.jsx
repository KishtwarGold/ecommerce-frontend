import ProductCard from "./ProductCard";
import { products } from "../../utils/productsData";

export default function RelatedProducts({ currentProduct }) {
  if (!currentProduct) return null;

  const relatedProducts = products
    .filter(
      (p) =>
        p.productType === currentProduct.productType &&
        p.id !== currentProduct.id
    )
    .slice(0, 4);

  if (relatedProducts.length === 0) return null;

  return (
    <>
      <style>{`
        /* ===============================
           SECTION
        =============================== */
        .rp-section {
          margin-top: 90px;
        }

        /* ===============================
           HEADER
        =============================== */
        .rp-header {
          text-align: center;
          margin-bottom: 56px;
        }

        .rp-title {
          font-size: 32px;
          font-weight: 800;
          letter-spacing: 1.8px;
          color: #0f172a;
          display: inline-flex;
          align-items: center;
          gap: 14px;
        }

        .rp-title span {
          color: #b11212;
        }

        .rp-line {
          width: 50px;
          height: 2px;
          background: #b11212;
        }

        .rp-subtitle {
          margin-top: 12px;
          font-size: 15px;
          color: #64748b;
          max-width: 520px;
          margin-inline: auto;
          line-height: 1.6;
        }

        /* ===============================
           GRID
        =============================== */
        .rp-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 34px;
        }

        /* ===============================
           RESPONSIVE
        =============================== */
        @media (max-width: 1024px) {
          .rp-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 26px;
          }
        }

        @media (max-width: 640px) {
        .rp-section {
          margin-top: 80px;
        }

          .rp-title {
            font-size: 24px;
          }

          .rp-grid {
            gap: 18px;
          }
        }
      `}</style>

      <section className="rp-section">
        {/* HEADER */}
        <div className="rp-header">
          <h2 className="rp-title">
            Related <span>Products</span>
            <span className="rp-line"></span>
          </h2>

          <p className="rp-subtitle">
            Handpicked {currentProduct.productType.toLowerCase()} products
            curated specially to complement your selection.
          </p>
        </div>

        {/* PRODUCTS */}
        <div className="rp-grid">
          {relatedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </>
  );
}
