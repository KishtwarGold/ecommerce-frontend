import { useEffect, useState } from "react";
import {
  FaLeaf,
  FaHandshake,
  FaCheckCircle,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

const BRAND_RED = "#b1120b";

const MissionSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Scroll animation (desktop only)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.2 }
    );

    document
      .querySelectorAll(".animate-on-scroll")
      .forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const cards = [
    {
      icon: <FaLeaf />,
      title: "Sustainable Farming",
      desc:
        "We follow eco-friendly farming methods that preserve soil health and protect the natural environment.",
    },
    {
      icon: <FaHandshake />,
      title: "Fair Trade",
      desc:
        "We ensure fair compensation and ethical practices for all farmers and workers involved in saffron cultivation.",
    },
    {
      icon: <FaCheckCircle />,
      title: "Quality Commitment",
      desc:
        "Every strand of saffron is carefully inspected and tested to meet our strict quality standards.",
    },
  ];

  return (
    <section className="mission-section">
      <div className="mission-container">

        {/* LABEL */}
        <div className="mission-label animate-on-scroll">
          <h5>
            <span>OUR</span>
            <strong> MISSION</strong>
          </h5>
          <i />
        </div>

        {/* TITLE */}
        <h2 className="mission-title animate-on-scroll">
          Bringing Purity to your Kitchen
        </h2>

        {/* DESC */}
        <p className="mission-desc animate-on-scroll">
          Our mission is to share the authentic taste and aroma of Kishtwar saffron
          with the world, while supporting local farmers, sustainable practices,
          and delivering uncompromising quality directly from our fields to your table.
        </p>

        {/* DESKTOP GRID */}
        <div className="mission-grid desktop-only">
          {cards.map((card, i) => (
            <div
              key={i}
              className="mission-card animate-on-scroll"
              style={{ transitionDelay: `${i * 0.15}s` }}
            >
              <div className="mission-icon">{card.icon}</div>
              <h4>{card.title}</h4>
              <p>{card.desc}</p>
            </div>
          ))}
        </div>

        {/* MOBILE SLIDER */}
        <div className="mobile-slider">
          <div className="slider-window">
            <div
              className="slider-track"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {cards.map((card, i) => (
                <div className="slide" key={i}>
                  <div className="mission-card">
                    <div className="mission-icon">{card.icon}</div>
                    <h4>{card.title}</h4>
                    <p>{card.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* SIMPLE ARROWS */}
          <div className="mobile-arrows-bottom">
            <button
              onClick={() => setActiveIndex((i) => Math.max(i - 1, 0))}
              disabled={activeIndex === 0}
            >
              <FaChevronLeft />
            </button>

            <button
              onClick={() =>
                setActiveIndex((i) => Math.min(i + 1, cards.length - 1))
              }
              disabled={activeIndex === cards.length - 1}
            >
              <FaChevronRight />
            </button>
          </div>
        </div>

      </div>

      {/* ================= CSS ================= */}
      <style>{`
        .mission-section {
          padding: 10px 0 60px;
          background: #ffffff;
        }

        .mission-container {
          max-width: 1200px;
          margin: auto;
          padding: 0 20px;
          text-align: center;
        }

        .mission-label {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 18px;
          font-size: 14px;
          letter-spacing: 2px;
          color: #6b7280;
        }

        .mission-label strong {
          color: ${BRAND_RED};
        }

        .mission-label i {
          width: 50px;
          height: 2px;
          background: ${BRAND_RED};
          display: inline-block;
        }

        .mission-title {
          font-size: 34px;
          margin-bottom: 18px;
        }

        .mission-desc {
          max-width: 780px;
          margin: 0 auto 40px;
          color: #4b5563;
          line-height: 1.7;
        }

        /* DESKTOP GRID */
        .desktop-only {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
        }

        .mission-card {
          background: #fff;
          padding: 34px 28px;
          border-radius: 20px;
          box-shadow: 0 20px 45px rgba(0,0,0,0.08);
        }

        .mission-icon {
          width: 56px;
          height: 56px;
          margin: 0 auto 18px;
          background: ${BRAND_RED};
          color: #fff;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* DESKTOP HOVER LIFT (E-COMMERCE STYLE) */
        @media (min-width: 769px) {
          .mission-card {
            cursor: pointer;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }

          .mission-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 28px 60px rgba(0,0,0,0.18);
          }
        }

        /* MOBILE SLIDER */
        .mobile-slider {
          display: none;
          flex-direction: column;
          align-items: center;
        }

        .slider-window {
          overflow: hidden;
          width: 100%;
          max-width: 340px;
        }

        .slider-track {
          display: flex;
          transition: transform 0.4s ease;
        }

        .slide {
          min-width: 100%;
          padding: 10px;
        }

        .mobile-arrows-bottom {
          display: flex;
          justify-content: center;
          gap: 26px;
          margin-top: 12px;
        }

        .mobile-arrows-bottom button {
          background: none;
          border: none;
          font-size: 20px;
          color: ${BRAND_RED};
          cursor: pointer;
        }

        .mobile-arrows-bottom button:disabled {
          opacity: 0.35;
          cursor: not-allowed;
        }

        /* SCROLL ANIMATION (DESKTOP ONLY) */
        .animate-on-scroll {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }

        .animate-on-scroll.animate-in {
          opacity: 1;
          transform: translateY(0);
        }

        /* MOBILE FIXES */
        @media (max-width: 768px) {
          .desktop-only {
            display: none;
          }

          .mobile-slider {
            display: flex;
          }

          .mission-title {
            font-size: 26px;
          }

          /* disable animation */
          .animate-on-scroll {
            opacity: 1 !important;
            transform: none !important;
            transition: none !important;
          }

          /* light shadow */
          .mission-card {
            box-shadow: 0 4px 10px rgba(0,0,0,0.06);
          }
        }
      `}</style>
    </section>
  );
};

export default MissionSection;
