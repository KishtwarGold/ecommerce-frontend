import ProductCard from "./ProductCard";

const ProductsGrid = ({ products = [] }) => {
  return (
    <>
      <style>{`
        .fashion-grid-wrapper {
          width: 100%;
        }

        .fashion-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 24px;
        }

        /* TABLET */
        @media (max-width: 1024px) {
          .fashion-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 22px;
          }
        }

        /* MOBILE */
        @media (max-width: 640px) {
          .fashion-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 14px;
          }
        }
      `}</style>

      <div className="fashion-grid-wrapper">
        {products.length === 0 ? (
          // ✅ Empty state (UI safe)
          <p style={{ textAlign: "center", opacity: 0.6 }}>
            No products found
          </p>
        ) : (
          <div className="fashion-grid">
            {products.map((product) => (
              <ProductCard
                key={product._id || product.id}
                product={product}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default ProductsGrid;
