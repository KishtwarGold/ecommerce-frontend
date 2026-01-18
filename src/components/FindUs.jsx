import React from "react";

export default function FindUs() {
  return (
    <>
      {/* ================= INTERNAL CSS ================= */}
      <style>
        {`
          .find-us-section {
            width: 100%;
            padding: 3.5rem 0;
            background-color: #f8f9fa;
          }

          .find-us-container {
            max-width: 1300px;
            margin: auto;
            text-align: center;
            padding: 0 1rem;
          }

          .find-us-title {
            font-size: 2rem;
            margin-bottom: 0.4rem;
            font-weight: 600;
          }

          .find-us-text {
            color: #6c757d;
            margin-bottom: 2.2rem;
          }

          .map-wrapper {
            width: 100%;
            max-width: 1200px;
            margin: auto;
            border-radius: 18px;
            overflow: hidden;
            background: #fff;
            box-shadow: 0 14px 35px rgba(0, 0, 0, 0.18);
          }

          .map-wrapper iframe {
            width: 100%;
            height: 460px;
            border: 0;
            pointer-events: auto;
          }

          /* Tablet */
          @media (max-width: 992px) {
            .map-wrapper iframe {
              height: 360px;
            }
          }

          /* Mobile */
          @media (max-width: 576px) {
            .find-us-title {
              font-size: 1.6rem;
            }

            .map-wrapper iframe {
              height: 260px;
            }
          }
        `}
      </style>

      {/* ================= FIND US SECTION ================= */}
      <section className="find-us-section">
        <div className="find-us-container">
          <h2 className="find-us-title">Find Us</h2>
          <p className="find-us-text">
            Located in the beautiful valleys of Kishtwar
          </p>

          <div className="map-wrapper">
            <iframe
              title="Kishtwar Area Map"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26273.41820933934!2d75.711!3d33.313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e1a3dca1a05d2f%3A0x8a5f1f7f6405c1d9!2sKishtwar!5e0!3m2!1sen!2sin!4v1699012345678"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
}
