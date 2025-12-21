import aboutImg from "../assets/about.avif";

const BRAND_RED = "#b1120b";

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="about-container">

        {/* LEFT IMAGE */}
        <div className="about-image animate-left">
          <img
            src={aboutImg}
            alt="Kongdoon – Farmer-first brand from Kishtwar"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="about-content animate-right">
          <h6 className="about-heading">
            ABOUT <span>KONGDOON</span>
          </h6>

          <p>
            Welcome to <strong>Kongdoon</strong>, a farmer-first brand rooted in
            the pristine valleys of Kishtwar. We bring you authentic Kishtwari
            saffron and premium walnuts, sourced directly from trusted local
            farmers.
          </p>

          <p>
            Our journey began with a simple belief — purity and quality should
            never be compromised. Every product reflects tradition,
            transparency, and respect for the farmers behind it.
          </p>

          {/* VISION BOX */}
          <div className="about-vision animate-up">
            <h5>Our Vision</h5>
            <p>
              “To connect farmers directly with homes while preserving the
              authenticity, heritage, and purity of Kishtwari produce.”
            </p>
          </div>
        </div>

      </div>

      {/* ================= INLINE CSS ================= */}
      <style>{`
        .about-section {
          padding: 100px 0;
          background: #ffffff;          /* ✅ brand background */
          overflow: hidden;
        }

        .about-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          align-items: center;
          gap: 70px;
        }

        /* IMAGE */
        .about-image img {
          width: 100%;
          height: 460px;
          object-fit: cover;
          border-radius: 22px;
          }

        /* CONTENT */
        .about-content {
          max-width: 520px;
        }

        .about-heading {
          font-size: 20px;
          font-weight: 600;
          color: #6b7280;
          margin-bottom: 18px;
          letter-spacing: 1px;
        }

        .about-heading span {
          color: ${BRAND_RED};
          font-weight: 700;
          margin-left: 6px;
        }

        .about-heading::after {
          content: "";
          display: inline-block;
          width: 60px;
          height: 2px;
          background: ${BRAND_RED};
          margin-left: 12px;
          vertical-align: middle;
        }

        .about-content p {
          font-size: 17px;
          line-height: 1.75;
          color: #374151;
          margin-bottom: 18px;
        }

        /* VISION BOX – BRAND THEME */
        .about-vision {
          margin-top: 34px;
          padding: 24px 28px;
          background: rgba(177,18,11,0.06);   /* ✅ red tint */
          border-left: 4px solid ${BRAND_RED};
          border-radius: 12px;
        }

        .about-vision h5 {
          margin-bottom: 10px;
          font-size: 18px;
          color: ${BRAND_RED};
        }

        .about-vision p {
          margin: 0;
          font-size: 16px;
          color: #7a1c18;
        }

        /* ================= ANIMATIONS ================= */
        .animate-left {
          animation: slideFromLeft 0.8s ease-out forwards;
        }

        .animate-right {
          animation: slideFromRight 0.8s ease-out forwards;
        }

        .animate-up {
          animation: fadeUp 0.8s ease-out forwards;
          animation-delay: 0.35s;
          opacity: 0;
        }

        @keyframes slideFromLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideFromRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* ===== RESPONSIVE ===== */
        @media (max-width: 768px) {
          .about-container {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .about-image img {
            height: auto;
          }

          .about-content {
            max-width: 100%;
          }
        }
      `}</style>
    </section>
  );
};

export default AboutSection;
