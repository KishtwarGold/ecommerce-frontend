import { useState } from "react";

export default function ProductTabs({ product }) {
  const [activeTab, setActiveTab] = useState("description");

  if (!product) return null;

  return (
    <>
      <style>{`
        :root {
          --brand-red: #b11212;
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
          margin-bottom: 16px;
          margin-top: 0;
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
           CONTENT AREA (no card)
        =============================== */
        .pt-content {
          background: transparent;
          padding: 0 4px;
        }

        /* ===============================
           DESCRIPTION SECTION
        =============================== */
        .pt-desc-heading {
          font-size: 15px;
          font-weight: 700;
          color: var(--brand-red);
          margin: 0 0 14px 0;
          padding-bottom: 0;
        }

        .pt-desc-body {
          font-size: 16px;
          line-height: 1.85;
          color: #374151;
        }

        .pt-desc-body p {
          margin: 0 0 14px 0;
        }

        .pt-desc-body p:last-child {
          margin-bottom: 0;
        }

        /* ===============================
           MOBILE
        =============================== */
        @media (max-width: 640px) {
          .pt-tabs {
            gap: 24px;
          }
        }
      `}</style>

      {/* TABS HEADER */}
      <div className="pt-tabs">
        <div
          className={`pt-tab ${activeTab === "description" ? "active" : ""}`}
          onClick={() => setActiveTab("description")}
        >
          Description
        </div>

        {/* <div
          className={`pt-tab ${activeTab === "reviews" ? "active" : ""}`}
          onClick={() => setActiveTab("reviews")}
        >
          Reviews
        </div> */}
      </div>

      {/* TAB CONTENT */}
      <div className="pt-content">
        {activeTab === "description" && (
          <div className="pt-desc-body">
            {product.description?.map((text, index) => (
              <p key={index}>{text}</p>
            ))}
          </div>
        )}

        {/* {activeTab === "reviews" && (
          <div style={{ textAlign: "center", padding: "40px 20px", color: "#94a3b8", fontSize: "14px" }}>
            Reviews will be available soon.
          </div>
        )} */}
      </div>
    </>
  );
}