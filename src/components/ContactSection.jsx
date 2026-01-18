import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
  FaLinkedin,
} from "react-icons/fa";
import { useState } from "react";

const BRAND_RED = "#b1120b";

const ContactSection = () => {
  const [isHuman, setIsHuman] = useState(false);

  return (
    <section className="contact-section">
      <div className="contact-container">

        {/* HEADER */}
        <div className="contact-header">
          <h3>
            CONTACT <span>US</span>
          </h3>
          <p>We’d love to hear from you. Reach out for any queries.</p>
        </div>

        {/* GRID */}
        <div className="contact-grid">

          {/* RIGHT FORM */}
          <div className="contact-form animate-right">
            <h4>
              Send a Message <span>(We reply fast)</span>
            </h4>

            <form>
              <label>Name</label>
              <input type="text" placeholder="Your Name" />

              <label>Email</label>
              <input type="email" placeholder="Your Email" />

              <label>Message</label>
              <textarea rows="4" placeholder="How can we help you?" />

              <button type="submit">Send Message</button>
            </form>
          </div>

          {/* LEFT */}
          <div className="contact-left animate-left">

            <div className="info-card animate-up">
              <FaPhoneAlt />
              <div>
                <h6>Call Us</h6>
                <p>+91 81690 45778</p>
              </div>
            </div>

            <div className="info-card animate-up delay-1">
              <FaEnvelope />
              <div>
                <h6>Email Us</h6>
                <p>support@kongdoon.com</p>
              </div>
            </div>

            <div className="info-card animate-up delay-2">
              <FaMapMarkerAlt />
              <div>
                <h6>Visit Us</h6>
                <p>Kishtwar, Jammu & Kashmir</p>
              </div>
            </div>

            {/* FOLLOW US */}
            <div className="info-card animate-up delay-3 follow-card">
              <div className="follow-content">
                <h6>Follow Us</h6>
                <div className="social-icons">
                  <a href="#" aria-label="Instagram"><FaInstagram /></a>
                  <a href="#" aria-label="YouTube"><FaYoutube /></a>
                  <a href="#" aria-label="WhatsApp"><FaWhatsapp /></a>
                  <a href="#" aria-label="LinkedIn"><FaLinkedin /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CSS */}
      <style>{`
        .contact-section {
          padding: 90px 0 40px;
          background: #ffffff;
        }

        .contact-container {
          max-width: 1200px;
          margin: auto;
          padding: 0 24px;
        }

        .contact-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .contact-header h3 {
          font-size: 22px;
          color: #6b7280;
          letter-spacing: 1.5px;
        }

        .contact-header span {
          color: ${BRAND_RED};
          font-weight: 700;
        }

        .contact-header p {
          color: #6b7280;
          margin-top: 8px;
          font-size: 14px;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: start;
        }

        .info-card {
          display: flex;
          gap: 16px;
          align-items: center;
          background: #fff;
          padding: 18px 22px;
          border-radius: 14px;
          box-shadow: 0 10px 26px rgba(0,0,0,0.08);
          margin-bottom: 18px;
        }

        .info-card svg {
          color: ${BRAND_RED};
          font-size: 18px;
          flex-shrink: 0;
        }

        .info-card h6 {
          margin-bottom: 4px;
        }

        .contact-form {
          padding: 36px;
          border-radius: 18px;
          box-shadow: 0 26px 60px rgba(0,0,0,0.12);
          background: #ffffff;
          align-self: flex-start;
        }

        .contact-form h4 {
          margin-bottom: 18px;
        }

        .contact-form h4 span {
          color: ${BRAND_RED};
          font-size: 13px;
        }

        .contact-form label {
          font-size: 12px;
          font-weight: 500;
          margin-top: 10px;
          display: block;
        }

        .contact-form input,
        .contact-form textarea {
          width: 100%;
          padding: 12px;
          margin-top: 6px;
          margin-bottom: 14px;
          border-radius: 10px;
          border: 1px solid #e5e7eb;
        }

        button {
          margin-top: 10px;
          width: 50%;
          padding: 14px;
          border-radius: 30px;
          background: ${BRAND_RED};
          color: white;
          border: none;
          cursor: pointer;
        }

        /* FOLLOW CARD */
        .follow-card {
          align-items: flex-start;
        }

        .follow-content h6 {
          margin-bottom: 10px;
        }

        /* ✅ FINAL SOCIAL ICON FIX */
        .social-icons {
          display: flex;
          gap: 22px;
        }

        .social-icons a,
        .social-icons a:hover,
        .social-icons a:focus,
        .social-icons a:active {
          background: transparent !important;
          box-shadow: none !important;
          outline: none !important;
          text-decoration: none !important;
          color: ${BRAND_RED};
        }

        .social-icons svg {
          font-size: 30px;
          line-height: 1;
        }

        /* Animations */
        .animate-left { animation: left 0.8s ease; }
        .animate-right { animation: right 0.8s ease; }
        .animate-up { animation: up 0.8s ease; }

        @keyframes left {
          from { opacity: 0; transform: translateX(-40px); }
          to { opacity: 1; }
        }

        @keyframes right {
          from { opacity: 0; transform: translateX(40px); }
          to { opacity: 1; }
        }

        @keyframes up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; }
        }

        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr;
          }

          button {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
};

export default ContactSection;
