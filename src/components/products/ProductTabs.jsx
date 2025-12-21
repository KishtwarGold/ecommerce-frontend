import { useState } from "react";

export default function ProductTabs({ product }) {
  const [activeTab, setActiveTab] = useState("description");

  if (!product) return null;

  return (
    <>
      <style>{`
        :root {
          --brand-red: #b11212;
          --brand-red-soft: #fdecec;
          --text-dark: #1f2937;
          --text-muted: #6b7280;
        }

        /* ===============================
           TABS HEADER
        =============================== */
        .pt-tabs {
          display: flex;
          gap: 40px;
          border-bottom: 1px solid #e5e7eb;
          margin-bottom: 28px;
        }

        .pt-tab {
          padding: 14px 0;
          font-weight: 600;
          font-size: 15px;
          cursor: pointer;
          color: var(--text-muted);
          position: relative;
        }

        .pt-tab.active {
          color: var(--brand-red);
        }

        .pt-tab.active::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -1px;
          width: 100%;
          height: 2px;
          background: var(--brand-red);
          border-radius: 2px;
        }

        /* ===============================
           CONTENT CARD (RESTORED)
        =============================== */
        .pt-content {
          background: #ffffff;
          border-radius: 22px;
          padding: 36px 40px;
          box-shadow: 0 20px 60px rgba(0,0,0,0.06);
        }

        .pt-desc {
          max-width: 900px;
          font-size: 15px;
          line-height: 1.9;
          color: #475569;
        }

        .pt-desc p {
          margin-bottom: 18px;
        }

        /* ===============================
           EMPTY REVIEWS STATE
        =============================== */
        .pt-empty {
          text-align: center;
          padding: 40px 20px;
          color: #94a3b8;
          font-size: 14px;
        }

        /* ===============================
           MOBILE
        =============================== */
        @media (max-width: 640px) {
          .pt-content {
            padding: 28px 22px;
          }

          .pt-tabs {
            gap: 24px;
          }
        }
      `}</style>

      {/* ===============================
          TABS HEADER
      =============================== */}
      <div className="pt-tabs">
        <div
          className={`pt-tab ${
            activeTab === "description" ? "active" : ""
          }`}
          onClick={() => setActiveTab("description")}
        >
          Description
        </div>

        <div
          className={`pt-tab ${
            activeTab === "reviews" ? "active" : ""
          }`}
          onClick={() => setActiveTab("reviews")}
        >
          Reviews
        </div>
      </div>

      {/* ===============================
          TAB CONTENT (CARD)
      =============================== */}
      <div className="pt-content">
        {activeTab === "description" && (
          <div className="pt-desc">
            {product.description?.map((text, index) => (
              <p key={index}>{text}</p>
            ))}
          </div>
        )}

        {activeTab === "reviews" && (
          <div className="pt-empty">
            Reviews will be available soon.
          </div>
        )}
      </div>
    </>
  );
}
