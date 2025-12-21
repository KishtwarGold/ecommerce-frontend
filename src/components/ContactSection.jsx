import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
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

          {/* LEFT */}
          <div className="contact-left animate-left">
            <img
              src="https://images.unsplash.com/photo-1525182008055-f88b95ff7980"
              alt="Contact Kongdoon"
              className="contact-image"
            />

            <div className="info-card animate-up">
              <FaPhoneAlt />
              <div>
                <h6>Call Us</h6>
                <p>+91 98765 43210</p>
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
          </div>

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

              <button type="submit">
                Send Message
              </button>
            </form>
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
          align-items: start; /* important */
        }

        .contact-image {
          width: 100%;
          border-radius: 18px;
          box-shadow: 0 22px 50px rgba(0,0,0,0.18);
          margin-bottom: 28px;
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
        }

        /* 🔥 MAIN FIX IS HERE */
        .contact-form {
          padding: 36px;
          border-radius: 18px;
          box-shadow: 0 26px 60px rgba(0,0,0,0.12);
          background: #ffffff;

          /* STOP GRID STRETCH */
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
