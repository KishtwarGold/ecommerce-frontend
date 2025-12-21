import { useState } from "react";

const ProductsTopBar = ({ count, onSortChange }) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("Relevant");

  const options = ["Relevant", "Low to High", "High to Low"];

  return (
    <>
      <style>{`
        :root {
          --theme-red: #B11212;
          --theme-red-light: #FDECEC;
          --theme-red-bg: #F8DADA;
          --text-dark: #374151;
        }

        .products-topbar {
          background: #ffffff;
          border-radius: 18px;
          padding: 14px 18px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin: 18px 0 22px;
          box-shadow: 0 6px 20px rgba(0,0,0,0.08);
          position: relative;
        }

        .products-count {
          font-size: 18px;
          color: var(--text-dark);
          line-height: 1;
          white-space: nowrap;
        }

        .products-count span {
          font-weight: 600;
          color: var(--theme-red);
        }

        .sort-trigger {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 16px;
          font-weight: 500;
          cursor: pointer;
          user-select: none;
          white-space: nowrap;
          // color: var(--theme-red);
        }

        /* SORT ICON — DESKTOP ONLY */
        .sort-icon {
          display: inline-block;
        }

        .caret {
          margin-left: 2px;
        }

        /* DROPDOWN */
        .dropdown {
          position: absolute;
          top: calc(100% + 10px);
          right: 12px;
          background: #ffffff;
          border-radius: 12px;
          box-shadow: 0 10px 25px rgba(0,0,0,0.12);
          overflow: hidden;
          min-width: 180px;
          z-index: 20;
        }

        .dropdown-item {
          padding: 12px 16px;
          font-size: 14px;
          // color: var(--theme-red);
          cursor: pointer;
          background: #ffffff;
        }


        .dropdown-item.active {
          background: var(--theme-red-bg);
          color: var(--theme-red);
          font-weight: 600;
        }

        /* MOBILE */
        @media (max-width: 640px) {
          .products-topbar {
            padding: 12px 14px;
            margin: 14px 0 18px;
          }

          .products-count {
            font-size: 15px;
          }

          .sort-trigger {
            font-size: 15px;
            gap: 5px;
          }

          /* HIDE SORT ICON ON MOBILE */
          .sort-icon {
            display: none;
          }
        }
      `}</style>

      <div className="products-topbar">
        {/* LEFT */}
        <div className="products-count">
          Showing <span>{count}</span> Products
        </div>

        {/* RIGHT */}
        <div
          className="sort-trigger"
          onClick={() => setOpen((prev) => !prev)}
        >
          {/* SORT ICON (DESKTOP ONLY) */}
          <svg
            className="sort-icon"
            width="19"
            height="19"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#B11212"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="4" y1="6" x2="14" y2="6" />
            <line x1="4" y1="12" x2="10" y2="12" />
            <line x1="4" y1="18" x2="18" y2="18" />
            <circle cx="18" cy="6" r="2" />
            <circle cx="14" cy="12" r="2" />
            <circle cx="10" cy="18" r="2" />
          </svg>

          <span>Sort by: {selected}</span>

          <svg
            width="13"
            height="13"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#374151"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="caret"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>

        {/* DROPDOWN */}
        {open && (
          <div className="dropdown">
            {options.map((opt) => (
              <div
                key={opt}
                className={`dropdown-item ${
                  selected === opt ? "active" : ""
                }`}
                onClick={() => {
                  setSelected(opt);
                  setOpen(false);
                  onSortChange(opt);
                }}
              >
                Sort by: {opt}
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default ProductsTopBar;
