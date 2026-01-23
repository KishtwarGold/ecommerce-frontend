import React from "react";
import { useNavigate } from "react-router-dom";

export default function TermsOfService() {
  const navigate = useNavigate();

  const sections = [
    { id: "introduction", title: "Introduction" },
    { id: "products", title: "Products" },
    { id: "orders-payments", title: "Orders & Payments" },
    { id: "shipping-delivery", title: "Shipping & Delivery" },
    { id: "returns-refunds", title: "Returns & Refunds" },
    { id: "liability", title: "Limitation of Liability" },
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

        // .back-btn:hover {
        //   background: #b9120dff;
        //   color: #ffffff;
        // }

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

        .privacy-section a {
          color: #b9120dff;
          text-decoration: none;
          font-weight: 500;
        }

        .privacy-section a:hover {
          text-decoration: underline;
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
            <h1>Terms of Service</h1>
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
            <section id="introduction" className="privacy-section">
              <h1>Introduction</h1>
              <p>
                By accessing{" "}
                <a href="https://kongdoon.com">kongdoon.com</a>, you agree
                to comply with and be bound by these Terms of Service.
              </p>
            </section>

            <section id="products" className="privacy-section">
              <h1>Products</h1>
              <p>
                • We sell 100% pure Kishtwari saffron. <br />
                • Product images may slightly vary due to natural variations.
              </p>
            </section>

            <section id="orders-payments" className="privacy-section">
              <h1>Orders & Payments</h1>
              <p>
                • Orders are confirmed only after successful payment. <br />
                • Prices are listed in INR and may change without notice. <br />
                • We reserve the right to cancel suspicious or bulk orders.
              </p>
            </section>

            <section id="shipping-delivery" className="privacy-section">
              <h1>Shipping & Delivery</h1>
              <p>
                • Orders are shipped within 2–4 business days. <br />
                • Delivery timelines: 5–7 working days (India); international
                delivery may vary.
              </p>
            </section>

            <section id="returns-refunds" className="privacy-section">
              <h1>Returns & Refunds</h1>
              <p>
                • Returns accepted only for damaged, tampered, or incorrect
                products. <br />
                • Requests must be raised within 48 hours of delivery. <br />
                • Refunds are processed within 7–10 business days after approval.
              </p>
            </section>

            <section id="liability" className="privacy-section">
              <h1>Limitation of Liability</h1>
              <p>
                We are not liable for delays caused by courier partners, natural
                events, or incorrect address details provided by customers.
              </p>
            </section>
          </div>
        </main>
      </div>
    </>
  );
}
