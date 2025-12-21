import { useState } from "react";
import ProductsHeader from "../components/products/ProductsHeader";
import FiltersSidebar from "../components/products/FiltersSidebar";
import ProductsTopBar from "../components/products/ProductsTopBar";
import ProductsGrid from "../components/products/ProductsGrid";
import { products as allProducts } from "../utils/productsData";

const Home = () => {
  // FILTER STATE
  const [filters, setFilters] = useState({
    productType: [],
    category: [],
    weight: [],
    price: [],
  });

  // SORT STATE
  const [sortType, setSortType] = useState("Relevant");

  // MOBILE FILTER DRAWER STATE
  const [showFilters, setShowFilters] = useState(false);

  const resetFilters = () => {
    setFilters({
      productType: [],
      category: [],
      weight: [],
      price: [],
    });
    setShowFilters(false);
  };

  // FILTER LOGIC
  const filteredProducts = allProducts.filter((product) => {
    if (
      filters.productType.length &&
      !filters.productType.includes(product.productType)
    )
      return false;

    if (
      filters.category.length &&
      !filters.category.includes(product.category)
    )
      return false;

    if (
      filters.weight.length &&
      !filters.weight.includes(product.weight)
    )
      return false;

    if (filters.price.length) {
      const price = product.price;
      const match = filters.price.some((range) => {
        if (range === "UNDER_500") return price < 500;
        if (range === "500_1000") return price >= 500 && price <= 1000;
        if (range === "1000_3000") return price > 1000 && price <= 3000;
        if (range === "ABOVE_3000") return price > 3000;
        return true;
      });
      if (!match) return false;
    }

    return true;
  });

  // SORTING LOGIC
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortType === "Low to High") return a.price - b.price;
    if (sortType === "High to Low") return b.price - a.price;
    return 0;
  });

  return (
    <>
      <style>{`
        .products-page {
          background: #ffffff; /* ✅ mint removed */
          min-height: 100vh;
          padding: 100px 20px 40px;
        }

        .products-layout {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 260px 1fr;
          gap: 30px;
        }

        @media (max-width: 900px) {
          .products-layout {
            grid-template-columns: 1fr;
          }
        }

        .mobile-filter-card {
          background: #ffffff;
          border-radius: 16px;
          padding: 14px 16px;
          box-shadow: 0 8px 20px rgba(0,0,0,0.08);
          display: flex;
          justify-content: space-between;
          align-items: center;
          cursor: pointer;
          margin-bottom: 16px;
        }

        .filter-left {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #B11212; /* 🔴 RED */
          font-weight: 600;
        }

        .filter-drawer {
          position: fixed;
          top: 64px;
          right: -100%;
          width: 85%;
          height: calc(100% - 64px);
          background: #ffffff; /* ✅ mint removed */
          z-index: 300;
          transition: right 0.35s ease;
          overflow-y: auto;
        }

        .filter-drawer.open {
          right: 0;
        }

        .filter-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.35);
          opacity: ${showFilters ? 1 : 0};
          pointer-events: ${showFilters ? "auto" : "none"};
          transition: 0.3s;
          z-index: 250;
        }

        .filter-drawer-header {
          position: sticky;
          top: 0;
          background: #ffffff;
          padding: 16px 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          box-shadow: 0 4px 12px rgba(0,0,0,0.08);
        }

        .drawer-close {
          background: none;
          border: none;
          font-size: 22px;
          cursor: pointer;
          color: #B11212; /* 🔴 RED */
        }
      `}</style>

      <div className="products-page">
        <ProductsHeader />

        {/* MOBILE FILTER BUTTON */}
        <div className="d-md-none">
          <div
            className="mobile-filter-card"
            onClick={() => setShowFilters(true)}
          >
            <div className="filter-left">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#B11212"   /* 🔴 RED */
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polygon points="22 3 2 3 10 12 10 19 14 21 14 12 22 3" />
              </svg>
              <span>Filters</span>
            </div>

            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#B11212"   /* 🔴 RED */
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </div>
        </div>

        {/* OVERLAY */}
        <div
          className="filter-overlay"
          onClick={() => setShowFilters(false)}
        />

        {/* MOBILE DRAWER */}
        <div className={`filter-drawer ${showFilters ? "open" : ""}`}>
          <div className="filter-drawer-header">
            <span>Filters</span>
            <button
              className="drawer-close"
              onClick={() => setShowFilters(false)}
            >
              ✕
            </button>
          </div>

          <FiltersSidebar
            filters={filters}
            setFilters={setFilters}
            onReset={resetFilters}
          />
        </div>

        <div className="products-layout">
          {/* DESKTOP SIDEBAR */}
          <div className="d-none d-md-block">
            <FiltersSidebar
              filters={filters}
              setFilters={setFilters}
              onReset={resetFilters}
            />
          </div>

          <div>
            <ProductsTopBar
              count={sortedProducts.length}
              onSortChange={setSortType}
            />
            <ProductsGrid products={sortedProducts} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
