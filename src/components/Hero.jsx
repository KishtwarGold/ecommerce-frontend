import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const BRAND_COLOR = "#b1120b";

const slides = [
  {
    title: "From Farmers to Your Home",
    desc: "Authentic produce sourced directly from Kishtwar’s trusted farmers.",
    image: "/src/assets/mountain.png",
  },
  {
    title: "Pure Kishtwari Saffron",
    desc: "Hand-picked, sun-dried saffron threads straight from the farms of Kishtwar.",
    image:
      "https://babysaffron.com/_next/image?url=https%3A%2F%2Fprodstoragebabysaffron.blob.core.windows.net%2Fassets%2Fimages%2Fabout%2Fright-saffron.png&w=1920&q=75",
  },
  {
    title: "Premium Kishtwari Walnuts",
    desc: "Naturally grown walnuts packed with nutrition and rich taste.",
    image:
      "https://png.pngtree.com/png-clipart/20240308/original/pngtree-photo-walnut-walnut-kernel-nut-isolated-png-full-hd-png-image_14536996.png",
  },
];

const NAVBAR_HEIGHT = 90;
const EXTRA_GAP = 40;

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((p) => (p + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <section
        className="hero-section"
        style={{ paddingTop: NAVBAR_HEIGHT + EXTRA_GAP }}
      >
        <div className="hero-container">
          <div className="hero-row">
            {/* LEFT */}
            <div className="hero-left">
              <span className="hero-badge">A FARMER’S BRAND</span>
              <h1>{slides[current].title}</h1>
              <p>{slides[current].desc}</p>
              <button onClick={() => navigate("/collection")}>
                Shop Now
              </button>
            </div>

            {/* RIGHT */}
            <div className="hero-right">
              <img src={slides[current].image} alt="hero" />
            </div>
          </div>
        </div>

        {/* DOTS */}
        <div className="hero-dots">
          {slides.map((_, i) => (
            <span
              key={i}
              className={`dot ${i === current ? "active" : ""}`}
              onClick={() => setCurrent(i)}
            />
          ))}
        </div>
      </section>

      {/* ================= INLINE CSS ================= */}
      <style>{`
        .hero-section {
          min-height: 100vh;
          background: #fff7f7;
          position: relative;
          padding-bottom: 40px; /* ✅ IMPORTANT: space below dots */
        }

        .hero-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .hero-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 60px;
        }

        .hero-left {
          max-width: 520px;
        }

        .hero-badge {
          display: inline-block;
          padding: 6px 14px;
          border-radius: 20px;
          border: 1px solid ${BRAND_COLOR};
          color: ${BRAND_COLOR};
          background: #fff;
          font-size: 13px;
          font-weight: 600;
          margin-bottom: 20px;
        }

        .hero-left h1 {
          font-size: 42px;
          font-weight: 700;
          margin-bottom: 20px;
          color: #111827;
          line-height: 1.2;
        }

        .hero-left p {
          font-size: 18px;
          color: #475569;
          margin-bottom: 30px;
          line-height: 1.6;
        }

        .hero-left button {
          padding: 14px 34px;
          border-radius: 30px;
          border: none;
          background: ${BRAND_COLOR};
          color: #fff;
          font-size: 16px;
          cursor: pointer;
        }

        .hero-right img {
          width: 420px;
          height: 300px;
          object-fit: cover;
          border-radius: 14px;
        }

        /* ===== DOTS ===== */
        .hero-dots {
          margin-top: 40px;
          display: flex;
          justify-content: center;
          gap: 8px;
        }

        .hero-dots .dot {
          height: 10px;
          width: 10px;
          border-radius: 999px;
          background: #e5e7eb;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .hero-dots .dot.active {
          width: 28px;
          background: ${BRAND_COLOR};
        }

        /* ===== MOBILE (PEHLE JAISE FEEL) ===== */
        @media (max-width: 768px) {
          .hero-section {
            padding-bottom: 64px; /* ✅ extra space on mobile */
          }

          .hero-row {
            flex-direction: column;
            align-items: flex-start;
            gap: 40px;
          }

          .hero-left {
            max-width: 100%;
          }

          .hero-left h1 {
            font-size: 32px;
          }

          .hero-right img {
            width: 100%;
            height: auto;
          }
        }
      `}</style>
    </>
  );
};

export default Hero;
