const ProductsHeader = () => {
  return (
    <>
      <style>{`
        .products-header {
          max-width: 1200px;
          margin: 0 auto 30px;
        }

        .products-header-top {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .products-title {
          font-size: 34px;
          font-weight: 600;
          color: #1f2937;
          letter-spacing: 1px;
        }

        .products-title span {
          color: #B11212;
          position: relative;
          padding-right: 60px;
        }

        /* SMALL LINE AFTER TEXT — CENTERED */
        .products-title span::after {
          content: "";
          position: absolute;
          right: 0;
          top: 50%;
          transform: translateY(-50%);
          width: 42px;
          height: 2px;
          background: #B11212;
        }

        /* 🔴 ULTRA-SHARP DIVIDER */
        .products-divider {
          margin-top: 14px;
          position: relative;
          height: 1px;
          background: #B11212;
        }

        /* pixel alignment fix */
        .products-divider {
          transform: scaleY(1);
          transform-origin: center;
        }
      `}</style>

      <div className="products-header">
        <div className="products-header-top">
          <h1 className="products-title">
            Our <span>Products</span>
          </h1>
        </div>

        {/* SHARP LINE */}
        <div className="products-divider"></div>
      </div>
    </>
  );
};

export default ProductsHeader;
