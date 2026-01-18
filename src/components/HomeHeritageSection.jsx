import React from "react";
import { Link } from "react-router-dom";
import mountain from "../assets/mountain.png";

const HomeHeritageSection = () => {
  return (
    <>
      <style>{`
        /* ===== SECTION SPACING + CENTER FIX ===== */
        .heritage-section {
          margin: 80px 0;
          min-height: 70vh;              /* 👉 center feel */
          display: flex;                /* 👉 */
          align-items: center;           /* 👉 */
        }

        /* ===== LEGACY PILL ===== */
        .highlight-btn {
          border: 1px solid #b1120b;
          background: #b1120b;
          color: #ffffff;
          padding: 5px 16px;
          border-radius: 999px;
          font-size: 12.5px;
          font-weight: 600;
        }

        /* ===== TITLE ===== */
        .heritage-title {
          font-size: 34px;
          font-weight: 500;
          line-height: 1.25;
          color: #0f172a;
        }

        /* ===== DESCRIPTION ===== */
        .heritage-desc {
          font-size: 14.5px;
          color: #64748b;
          max-width: 500px;
          line-height: 1.7;
        }

        /* ===== FEATURE CARDS ===== */
        .info-box {
          background: #ffffff;
          border-radius: 12px;
          padding: 10px 14px;
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13.5px;
          font-weight: 500;
          color: #1f2937;
          box-shadow: 0 6px 18px rgba(0,0,0,0.05);
        }

        /* ===== CTA BUTTON ===== */
        .learn-btn {
          border: 2px solid #b1120b;
          background: transparent;
          color: #b1120b;
          padding: 11px 26px;
          border-radius: 12px;
          font-size: 12.5px;
          font-weight: 600;
          letter-spacing: 0.8px;
          transition: all 0.25s ease;
        }

        .learn-btn:hover {
          background: #b1120b;
          color: #ffffff;
        }

        /* ===== IMAGE ===== */
        .heritage-img {
          border-radius: 26px;
          height: 360px;
          object-fit: cover;
          box-shadow: 0 18px 40px rgba(0,0,0,0.14);
        }

        /* ===== MOBILE ===== */
        @media (max-width: 768px) {
          .heritage-section {
            margin: 60px 0;
            min-height: auto;   /* 👉 mobile me natural */
          }

          .heritage-title {
            font-size: 26px;
          }

          .heritage-img {
            height: 260px;
            margin-top: 24px;
          }
        }
      `}</style>

      <section className="heritage-section">
        <div className="container">
          <div className="row align-items-center">

            {/* LEFT */}
            <div className="col-lg-6 mb-4 mb-lg-0">
              <button className="highlight-btn mb-3">
                Our Legacy
              </button>

              <h3 className="heritage-title mb-3">
                Saffron Heritage of Kishtwar
              </h3>

              <p className="heritage-desc mb-4">
                Nestled in the pristine valleys of Kishtwar, our saffron fields
                have been cultivating the world's most precious spice for generations.
              </p>

              <div className="row g-3 mb-4">
                <div className="col-6">
                  <div className="info-box">GI Tagged</div>
                </div>
                <div className="col-6">
                  <div className="info-box">High Altitude</div>
                </div>
                <div className="col-6">
                  <div className="info-box">Hand Picked</div>
                </div>
                <div className="col-6">
                  <div className="info-box">Premium Grade</div>
                </div>
              </div>

              <Link to="/about">
                <button className="learn-btn">
                  LEARN MORE ABOUT US
                </button>
              </Link>
            </div>

            {/* RIGHT */}
            <div className="col-lg-6">
              <img
                src={mountain}
                alt="Mountain valley"
                className="img-fluid w-100 heritage-img"
              />
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default HomeHeritageSection;
