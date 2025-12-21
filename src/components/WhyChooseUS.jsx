import { FaTruck, FaTags, FaHeadset, FaLeaf } from "react-icons/fa";

const BRAND_RED = "#b1120b";

const WhyChooseUs = () => {
  return (
    <section className="why-section">
      <div className="why-container">

        {/* HEADING */}
        <h3 className="why-heading">
          WHY <span>CHOOSE US</span>
        </h3>

        {/* CARDS */}
        <div className="why-grid">

          <div className="why-card">
            <FaTruck className="why-icon" />
            <h5>Super Fast Delivery</h5>
            <p>
              We ensure your order reaches you quickly and safely,
              straight from Kishtwar farms.
            </p>
          </div>

          <div className="why-card">
            <FaTags className="why-icon" />
            <h5>Best Prices</h5>
            <p>
              Premium Kishtwari produce at fair prices by cutting out
              unnecessary middlemen.
            </p>
          </div>

          <div className="why-card">
            <FaHeadset className="why-icon" />
            <h5>24/7 Support</h5>
            <p>
              Our support team is always available to help you with
              your queries and concerns.
            </p>
          </div>

          <div className="why-card">
            <FaLeaf className="why-icon" />
            <h5>Eco Friendly</h5>
            <p>
              Sustainable sourcing and eco-friendly packaging for a
              better tomorrow.
            </p>
          </div>

        </div>
      </div>

      {/* ================= INLINE CSS ================= */}
      <style>{`
        .why-section {
          padding: 90px 0;
          background: #fff7f7;
        }

        .why-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
          text-align: center;
        }

        .why-heading {
          font-size: 22px;
          font-weight: 600;
          letter-spacing: 1.5px;
          color: #6b7280;
          margin-bottom: 50px;
        }

        .why-heading span {
          color: ${BRAND_RED};
          font-weight: 700;
          margin-left: 6px;
        }

        .why-heading::after {
          content: "";
          display: inline-block;
          width: 60px;
          height: 2px;
          background: ${BRAND_RED};
          margin-left: 12px;
          vertical-align: middle;
        }

        .why-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 26px;
        }

        /* CARD */
        .why-card {
          background: #ffffff;
          padding: 34px 26px;
          border-radius: 16px;
          border: 1.5px solid transparent;   /* hidden border */
          box-shadow: 0 14px 30px rgba(0,0,0,0.08);
          transition:
            transform 0.3s ease,
            box-shadow 0.3s ease,
            border-color 0.3s ease;
          cursor: default;
        }

        .why-card:hover {
          transform: translateY(-6px);
          border-color: ${BRAND_RED};        /* 🔥 hover border */
          box-shadow: 0 22px 44px rgba(177,18,11,0.22);
        }

        .why-icon {
          font-size: 30px;
          color: ${BRAND_RED};
          margin-bottom: 16px;
          transition: transform 0.3s ease;
        }

        .why-card:hover .why-icon {
          transform: scale(1.08);
        }

        .why-card h5 {
          font-size: 17px;
          font-weight: 600;
          margin-bottom: 10px;
          color: #111827;
        }

        .why-card p {
          font-size: 15px;
          line-height: 1.6;
          color: #4b5563;
        }

        /* RESPONSIVE */
        @media (max-width: 992px) {
          .why-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 576px) {
          .why-grid {
            grid-template-columns: 1fr;
          }

          .why-heading {
            font-size: 20px;
          }
        }
      `}</style>
    </section>
  );
};

export default WhyChooseUs;
