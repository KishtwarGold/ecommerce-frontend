import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import saffronPoster from "../assets/SaffronPoster.jpeg";

const BRAND_COLOR = "#b1120b";
const NAVBAR_HEIGHT = 65;

const slides = [
  {
    title: "A Golden Essence for Every Day",
    image: saffronPoster,
  },
  {
    title: "A Golden Essence for Every Day",
    image: saffronPoster,
  },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((p) => (p + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prev = () =>
    setCurrent((p) => (p === 0 ? slides.length - 1 : p - 1));
  const next = () =>
    setCurrent((p) => (p + 1) % slides.length);

  return (
    <>
      <section className="hero">
        {/* LEFT – TEXT */}
        <div className="hero-left">
          <h1 className="hero-title">
            <span className="desktop-text">
              {slides[current].title}
            </span>
            <span className="mobile-text">
              Pure & Premium
            </span>
          </h1>

          <button onClick={() => navigate("/collection")}>
            SHOP NOW
          </button>
        </div>

        {/* RIGHT – IMAGE */}
        <div className="hero-right">
          <img src={slides[current].image} alt="hero" />

          <button className="arrow left" onClick={prev}>
            <FaChevronLeft />
          </button>
          <button className="arrow right" onClick={next}>
            <FaChevronRight />
          </button>
        </div>
      </section>

      <style>{`
        /* ================= HERO BASE ================= */
        .hero {
          padding-top: ${NAVBAR_HEIGHT}px;
          display: flex;
          align-items: center;
          background: #fff7f7;
        }

        /* LEFT TEXT */
        .hero-left {
          width: 40%;
          padding: 50px 60px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .hero-left h1 {
          font-size: 40px;
          line-height: 1.2;
          margin-bottom: 28px;
          color: ${BRAND_COLOR};
          font-family: serif;
        }

        .desktop-text {
          display: inline;
        }

        .mobile-text {
          display: none;
        }

        .hero-left button {
          width: fit-content;
          padding: 14px 38px;
          border-radius: 999px;
          border: none;
          background: ${BRAND_COLOR};
          color: #fff;
          font-size: 16px;
          cursor: pointer;
        }

        /* RIGHT IMAGE */
        .hero-right {
          width: 60%;
          position: relative;
          overflow: hidden;
        }

        .hero-right img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          display: block;
          transition: transform 0.6s ease;
        }

        /* ARROWS (Hidden by default on desktop) */
        .arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%) scale(0.9);
          width: 35px;
          height: 35px;
          border-radius: 50%;
          border: none;
          color: #111111c3;
          background: rgba(255, 255, 255, 0.6);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;

          opacity: 0;
          pointer-events: none;
          transition: all 0.35s ease;
        }

        .arrow.left {
          left: 8px;
        }

        .arrow.right {
          right: 8px;
        }

        /* SHOW arrows on hover */
        .hero-right:hover .arrow {
          opacity: 1;
          pointer-events: auto;
          transform: translateY(-50%) scale(1);
        }

        .hero-right:hover .arrow.left {
          left: 16px;
        }

        .hero-right:hover .arrow.right {
          right: 16px;
        }

        /* ================= MOBILE ================= */
        @media (max-width: 768px) {
          .hero {
            flex-direction: column;
            padding-top: ${NAVBAR_HEIGHT}px;
          }

          .hero-left {
            width: 100%;
            padding: 14px 16px;
            order: 2;

            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;

            border-radius: 14px;
            margin: 12px;
          }

          .hero-left h1 {
            font-size: 22px;
            font-weight: 530;
            margin: 0;
            line-height: 1.35;
            color: #8f0d08;
            max-width: 68%;
            margin-left: 8px;
          }

          .hero-left button {
            padding: 8px 18px;
            font-size: 13px;
            font-weight: 600;
            border-radius: 999px;
            background: linear-gradient(135deg, #b1120b, #d62828);
            box-shadow: 0 6px 14px rgba(177, 18, 11, 0.28);
            white-space: nowrap;
            margin-right: 8px;
          }

          .hero-right {
            width: 100%;
            order: 1;
          }

          .hero-right img {
            height: auto;
          }

          /* Mobile text swap */
          .desktop-text {
            display: none;
          }

          .mobile-text {
            display: inline;
          }

          /* Arrows always visible on mobile */
          .arrow {
            opacity: 1;
            pointer-events: auto;
            transform: translateY(-50%) scale(1);
          }
        }
      `}</style>
    </>
  );
};

export default Hero;
