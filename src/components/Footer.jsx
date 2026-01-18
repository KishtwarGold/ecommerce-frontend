import React from "react";
import logo from "../assets/logo.png";
import {
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <style>{`
        .footer {
          background: #a5100bff;
          color: #f9fafb;
          padding: 80px 0 30px;
          font-family: system-ui, -apple-system, BlinkMacSystemFont;
        }

        .footer-container {
          max-width: 1200px;
          margin: auto;
          padding: 0 24px;
          display: grid;
          grid-template-columns: 1.3fr 0.7fr 0.7fr 1fr;
          gap: 56px;
        }

        .footer-brand {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .footer-brand img {
          width: 46px;
          height: 46px;
          border-radius: 50%;
        }

        .footer-brand h2 {
          font-size: 22px;
          font-weight: 700;
          margin: 0;
        }

        .footer-desc {
          font-size: 14px;
          line-height: 1.7;
          margin-top: 16px;
          color: rgba(255,255,255,0.85);
          max-width: 320px;
        }

        /* SOCIAL ICONS */
        .social-icons {
          display: flex;
          gap: 14px;
          margin-top: 20px;
        }

        .social-icons a {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          background: rgba(255,255,255,0.12);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          font-size: 18px;
          transition: all 0.3s ease;
        }

        .social-icons a:hover {
          background: #b1120b;
          transform: translateY(-4px);
        }

        .footer-title {
          font-size: 15px;
          font-weight: 600;
          margin-bottom: 16px;
          position: relative;
        }

        .footer-title::after {
          content: "";
          width: 28px;
          height: 2px;
          background: #f78d8aff;
          display: block;
          margin-top: 6px;
        }

        .footer-links {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .footer-links li {
          margin: 10px 0;
        }

        .footer-links a {
          font-size: 14px;
          color: rgba(255,255,255,0.85);
          text-decoration: none;
          transition: all 0.25s ease;
        }

        .footer-links a:hover {
          color: #ffb3b0;
          padding-left: 6px;
        }

        /* CONTACT */
        .contact-item {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 14px;
          font-size: 14px;
          color: rgba(255,255,255,0.85);
        }

        .contact-icon {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ffb3b0;
          font-size: 15px;
        }

        .footer-bottom {
          max-width: 1200px;
          margin: 48px auto 0;
          padding-top: 20px;
          border-top: 1px solid rgba(255,255,255,0.15);
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 13px;
          color: rgba(255,255,255,0.75);
        }

        .footer-bottom a {
          margin-left: 18px;
          color: rgba(255,255,255,0.75);
          text-decoration: none;
        }

        .footer-bottom a:hover {
          color: #ffb3b0;
        }

        @media (max-width: 992px) {
          .footer-container {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 576px) {
          .footer-container {
            grid-template-columns: 1fr;
            gap: 36px;
          }

          .footer-bottom {
            flex-direction: column;
            gap: 12px;
            text-align: center;
          }
        }
      `}</style>

      <footer className="footer">
        <div className="footer-container">

          {/* BRAND */}
          <div>
            <div className="footer-brand">
              <img src={logo} alt="Kongdoon" />
              <h2>Kongdoon</h2>
            </div>

            <p className="footer-desc">
              From the pristine valleys of Kishtwar, delivering GI-tagged
              saffron with purity, tradition & excellence.
            </p>

            <div className="social-icons">
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaYoutube /></a>
              <a href="#"><FaWhatsapp /></a>
              <a href="#"><FaLinkedinIn /></a>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="footer-title">Quick Links</h3>
            <ul className="footer-links">
              <li><a href="/">Home</a></li>
              <li><a href="/collection">Collection</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>

          {/* POLICIES */}
          <div>
            <h3 className="footer-title">Policies</h3>
            <ul className="footer-links">
              <li><a href="/privacy-policy">Privacy Policy</a></li>
              <li><a href="/terms-of-service">Terms & Conditions</a></li>
              <li><a href="/shipping-policy">Shipping Policy</a></li>
              {/* <li><a href="/shipping-policy">Delivery Info</a></li> */}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="footer-title">Contact Us</h3>

            <div className="contact-item">
              <div className="contact-icon"><FaPhoneAlt /></div>
              +91 81690 45778
            </div>

            <div className="contact-item">
              <div className="contact-icon"><FaEnvelope /></div>
              support@kongdoon.com
            </div>

            <div className="contact-item">
              <div className="contact-icon"><FaMapMarkerAlt /></div>
              Kishtwar, J&K, India
            </div>
          </div>

        </div>

        <div className="footer-bottom">
          <p>© 2026 Kongdoon. All rights reserved.</p>
          <div>
            <a href="/privacy-policy">Privacy</a>
            <a href="/terms-of-service">Terms</a>
            <a href="/shipping-policy">Sitemap</a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
