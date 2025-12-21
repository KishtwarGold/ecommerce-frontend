import { FiRefreshCcw } from "react-icons/fi";

const FiltersSidebar = ({ filters, setFilters, onReset }) => {
  const toggleFilter = (type, value) => {
    setFilters((prev) => {
      const exists = prev[type].includes(value);
      return {
        ...prev,
        [type]: exists
          ? prev[type].filter((v) => v !== value)
          : [...prev[type], value],
      };
    });
  };

  return (
    <>
      <style>{`
        .filters {
          background: #ffffff;
          border-radius: 20px;
          padding: 24px;
          box-shadow: 0 8px 24px rgba(0,0,0,0.06);
        }

        /* HEADER */
        .filters-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 18px;
        }

        .filters-header h3 {
          font-size: 18px;
          color: #111827;
          margin: 0;
        }

        /* 🔴 RESET ICON BUTTON — THEME */
        .reset-icon-btn {
          background: #FDECEC;
          border: none;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: #B11212;
          transition: all 0.25s ease;
        }

        .reset-icon-btn:hover {
          background: #F8DADA;
          transform: rotate(-15deg) scale(1.08);
        }

        .reset-icon-btn.spin {
          animation: spinReset 0.4s ease;
        }

        @keyframes spinReset {
          from {
            transform: rotate(0deg) scale(1);
          }
          to {
            transform: rotate(360deg) scale(1.1);
          }
        }

        /* FILTER SECTIONS */
        .filters-section {
          margin-bottom: 22px;
        }

        .filters-section h4 {
          font-size: 16px;
          margin-bottom: 12px;
          color: #111827;
        }

        .filters label {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 10px;
          font-size: 15px;
          color: #374151;
          cursor: pointer;
        }

        /* 🔴 CHECKBOX THEME */
        .filters input[type="checkbox"] {
          accent-color: #B11212;
          cursor: pointer;
        }

        /* 🔴 DIVIDER THEME */
        .filters hr {
          margin: 18px 0;
          border: none;
          height: 1.5px;
          background: #F8DADA;
        }
      `}</style>

      <aside className="filters">
        {/* HEADER */}
        <div className="filters-header">
          <h3>Filters</h3>

          {/* RESET BUTTON */}
          <button
            className="reset-icon-btn"
            title="Reset Filters"
            onClick={(e) => {
              e.currentTarget.classList.add("spin");
              setTimeout(() => {
                e.currentTarget.classList.remove("spin");
              }, 400);
              onReset();
            }}
          >
            <FiRefreshCcw size={16} />
          </button>
        </div>

        {/* PRODUCT TYPE */}
        <div className="filters-section">
          <h4>Product Type</h4>
          <label>
            <input
              type="checkbox"
              checked={filters.productType.includes("Saffron")}
              onChange={() => toggleFilter("productType", "Saffron")}
            />
            Saffron
          </label>
          <label>
            <input
              type="checkbox"
              checked={filters.productType.includes("Walnuts")}
              onChange={() => toggleFilter("productType", "Walnuts")}
            />
            Walnuts
          </label>
        </div>

        <hr />

        {/* CATEGORY */}
        <div className="filters-section">
          <h4>Category</h4>
          <label>
            <input
              type="checkbox"
              checked={filters.category.includes("Exclusive Collection")}
              onChange={() =>
                toggleFilter("category", "Exclusive Collection")
              }
            />
            Exclusive Collection
          </label>
          <label>
            <input
              type="checkbox"
              checked={filters.category.includes("Premium Collection")}
              onChange={() =>
                toggleFilter("category", "Premium Collection")
              }
            />
            Premium Collection
          </label>
          <label>
            <input
              type="checkbox"
              checked={filters.category.includes("Gift Boxes")}
              onChange={() => toggleFilter("category", "Gift Boxes")}
            />
            Gift Boxes
          </label>
        </div>

        <hr />

        {/* WEIGHT */}
        <div className="filters-section">
          <h4>Weight</h4>
          <label>
            <input
              type="checkbox"
              checked={filters.weight.includes("2g")}
              onChange={() => toggleFilter("weight", "2g")}
            />
            2g
          </label>
          <label>
            <input
              type="checkbox"
              checked={filters.weight.includes("5g")}
              onChange={() => toggleFilter("weight", "5g")}
            />
            5g
          </label>
          <label>
            <input
              type="checkbox"
              checked={filters.weight.includes("10g")}
              onChange={() => toggleFilter("weight", "10g")}
            />
            10g
          </label>
        </div>

        <hr />

        {/* PRICE */}
        <div className="filters-section">
          <h4>Price Range</h4>
          <label>
            <input
              type="checkbox"
              checked={filters.price.includes("UNDER_500")}
              onChange={() => toggleFilter("price", "UNDER_500")}
            />
            Under ₹500
          </label>
          <label>
            <input
              type="checkbox"
              checked={filters.price.includes("500_1000")}
              onChange={() => toggleFilter("price", "500_1000")}
            />
            ₹500 – ₹1000
          </label>
          <label>
            <input
              type="checkbox"
              checked={filters.price.includes("1000_3000")}
              onChange={() => toggleFilter("price", "1000_3000")}
            />
            ₹1000 – ₹3000
          </label>
          <label>
            <input
              type="checkbox"
              checked={filters.price.includes("ABOVE_3000")}
              onChange={() => toggleFilter("price", "ABOVE_3000")}
            />
            Above ₹3000
          </label>
        </div>
      </aside>
    </>
  );
};

export default FiltersSidebar;
