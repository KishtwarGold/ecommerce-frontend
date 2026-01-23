import React from "react";
import { useNavigate } from "react-router-dom";

export default function ShippingPolicy() {
  const navigate = useNavigate();

  const sections = [
    { id: "processing-time", title: "Processing Time" },
    { id: "shipping-partners", title: "Shipping Partners" },
    { id: "delivery-timelines", title: "Delivery Timelines" },
    { id: "shipping-charges", title: "Shipping Charges" },
    { id: "tracking", title: "Tracking" },
  ];

  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 120;
      const y = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <>
      <style>{`
        /* Wrapper */
        .privacy-wrapper {
          background: #f8fafc;
          font-family: "Inter", "Segoe UI", sans-serif;
          min-height: 100vh;
        }

        /* Header */
        .privacy-header {
          position: sticky;
          top: 0;
          background: #ffffff;
          border-bottom: 1px solid #e5e7eb;
          padding: 18px 40px;
          display: flex;
          align-items: center;
          z-index: 50;
        }

        /* BACK BUTTON */
        .back-btn {
          border: 1px solid #ffffff;
          background: transparent;
          color: #b9120dff;
          padding: 6px 14px;
          border-radius: 8px;
          font-size: 1rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.25s ease;
          white-space: nowrap;
        }

        .header-text {
          flex: 1;
          text-align: center;
        }

        .privacy-header h1 {
          font-size: 1.9rem;
          font-weight: 700;
          margin: 0;
          color: #b9120dff;
        }

        /* Layout */
        .privacy-layout {
          max-width: 1200px;
          margin: 40px auto;
          padding: 0 24px;
          display: flex;
          gap: 40px;
          align-items: flex-start;
        }

        /* Sidebar */
        .privacy-sidebar {
          flex: 0 0 260px;
          background: #ffffff;
          padding: 20px;
          border-radius: 12px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
          height: fit-content;
        }

        .privacy-sidebar h2 {
          font-size: 1.3rem;
          font-weight: 600;
          margin-bottom: 16px;
          color: #111827;
        }

        .privacy-sidebar ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .privacy-sidebar li {
          margin-bottom: 12px;
        }

        .toc-link {
          background: none;
          border: none;
          padding: 0;
          font-size: 1rem;
          color: blue;
          cursor: pointer;
          text-align: left;
        }

        .toc-link:hover {
          padding-left: 4px;
        }

        /* Content */
        .privacy-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 32px;
        }

        .privacy-section {
          background: #ffffff;
          padding: 24px 28px;
          border-radius: 12px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.04);
          scroll-margin-top: 120px;
        }

        .privacy-section h1 {
          font-size: 1.4rem;
          font-weight: 600;
          margin-bottom: 12px;
          color: #111827;
        }

        .privacy-section p {
          color: #4b5563;
          line-height: 1.75;
          font-size: 1.05rem;
          margin: 0;
        }

        html {
          scroll-behavior: smooth;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .privacy-layout {
            flex-direction: column;
            gap: 20px;
          }

          .privacy-sidebar {
            display: none;
          }

          .privacy-header h1 {
            font-size: 1.4rem;
          }

          .back-btn {
            left: 16px;
          }
        }
      `}</style>

      <div className="privacy-wrapper">
        {/* Header */}
        <header className="privacy-header">
          <button className="back-btn" onClick={() => navigate(-1)}>
            <h1>←</h1>
          </button>
          <div className="header-text">
            <h1>Shipping Policy</h1>
          </div>
        </header>

        {/* Layout */}
        <main className="privacy-layout">
          {/* Sidebar */}
          <aside className="privacy-sidebar">
            <h2>Table of Contents</h2>
            <ul>
              {sections.map((s) => (
                <li key={s.id}>
                  <button
                    className="toc-link"
                    onClick={() => handleScroll(s.id)}
                  >
                    {s.title}
                  </button>
                </li>
              ))}
            </ul>
          </aside>

          {/* Content */}
          <div className="privacy-content">
            <section id="processing-time" className="privacy-section">
              <h1>Processing Time</h1>
              <p>
                Orders are processed and dispatched within 2–4 business days.
              </p>
            </section>

            <section id="shipping-partners" className="privacy-section">
              <h1>Shipping Partners</h1>
              <p>
                We use trusted courier services such as Blue Dart, Delhivery,
                India Post, and other reliable logistics partners.
              </p>
            </section>

            <section id="delivery-timelines" className="privacy-section">
              <h1>Delivery Timelines</h1>
              <p>
                • Metro Cities (India): 3–5 working days <br />
                • Other Indian Regions: 5–7 working days <br />
                • International Orders: 10–20 working days
              </p>
            </section>

            <section id="shipping-charges" className="privacy-section">
              <h1>Shipping Charges</h1>
              <p>
                • Free shipping for orders above ₹1,000 within India. <br />
                • Nominal charges apply for smaller orders and international
                shipments.
              </p>
            </section>

            <section id="tracking" className="privacy-section">
              <h1>Tracking</h1>
              <p>
                Customers receive tracking details via email or SMS once the
                order is shipped.
              </p>
            </section>
          </div>
        </main>
      </div>
    </>
  );
}
