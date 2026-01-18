import React from "react";
import { useNavigate } from "react-router-dom";

export default function PrivacyPolicy() {
  const navigate = useNavigate();

  const sections = [
    { id: "info-collect", title: "Information We Collect" },
    { id: "use-info", title: "How We Use Your Information" },
    { id: "data-protection", title: "Data Protection" },
    { id: "contact", title: "Contact Us" },
  ];

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
          gap: 12px;
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

        .back-btn:hover {
          background: #b9120dff;
          color: #ffffff;
        }

        .header-text {
          flex: 1;
          text-align: center;
        }

        .privacy-header h1 {
          font-size: 1.9rem;
          font-weight: 600;
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

        .privacy-sidebar a {
          text-decoration: none;
          font-size: 1rem;
          transition: 0.2s;
        }

        .privacy-sidebar a:hover {
          padding-left: 4px;
          color: #454444ff;
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

          .header-text {
            text-align: left;
          }
        }
      `}</style>

      <div className="privacy-wrapper">
        {/* Header */}
        <header className="privacy-header">
          {/* ✅ BACK BUTTON */}
          <button className="back-btn" onClick={() => navigate(-1)}>
            ← Back
          </button>

          <div className="header-text">
            <h1>Privacy Policy</h1>
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
                  <a href={`#${s.id}`}>{s.title}</a>
                </li>
              ))}
            </ul>
          </aside>

          {/* Content */}
          <div className="privacy-content">
            <section id="info-collect" className="privacy-section">
              <h1>Information We Collect</h1>
              <p>
                • Name, email address, phone number, shipping address. <br />
                • Payment information (processed securely via payment gateways; we
                do not store card details). <br />
                • Browsing data (cookies, analytics, device info).
              </p>
            </section>

            <section id="use-info" className="privacy-section">
              <h1>How We Use Your Information</h1>
              <p>
                • To process and deliver your orders. <br />
                • To communicate updates, offers, and customer support. <br />
                • To improve website experience and services.
              </p>
            </section>

            <section id="data-protection" className="privacy-section">
              <h1>Data Protection</h1>
              <p>
                • We use secure servers and SSL encryption. <br />
                • Payment details are processed by trusted third-party gateways. <br />
                • We never sell or share your personal data with unauthorized parties.
              </p>
            </section>

            <section id="contact" className="privacy-section">
              <h1>Contact Us</h1>
              <p>
                For any privacy concerns, write to us at: <br />
                {" "}
                <a href="mailto:support@kishtwargold.com">
                  support@kongdoon.com
                </a>
              </p>
            </section>
          </div>
        </main>
      </div>
    </>
  );
}
