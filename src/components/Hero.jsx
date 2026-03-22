import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Poster1 from "../assets/Poster1.png";
import Poster2 from "../assets/Poster2.png";
import Poster3 from "../assets/Poster3.png";
import Poster4 from "../assets/Poster4.png";

const BRAND_COLOR = "#b1120b";
const NAVBAR_HEIGHT = 60;

const slides = [
  { title: "A Golden Essence for Every Day", image: Poster1 },
  { title: "A Golden Essence for Every Day", image: Poster2 },
  { title: "A Golden Essence for Every Day", image: Poster3 },
  { title: "A Golden Essence for Every Day", image: Poster4 },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();

  // ✅ Touch swipe state
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);
  const SWIPE_THRESHOLD = 50; // minimum px to count as swipe

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((p) => (p + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((p) => (p === 0 ? slides.length - 1 : p - 1));
  const next = () => setCurrent((p) => (p + 1) % slides.length);

  // ✅ Touch handlers
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchEndX.current = null;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) >= SWIPE_THRESHOLD) {
      if (diff > 0) next(); // swipe left → next
      else prev();          // swipe right → prev
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <>
      <section className="hero">
        {/* LEFT – TEXT */}
        <div className="hero-left">
          <h1 className="hero-title">
            <span className="desktop-text">{slides[current].title}</span>
            <span className="mobile-text">Pure & Premium</span>
          </h1>
          <button onClick={() => navigate("/collection")}>SHOP NOW</button>
        </div>

        {/* RIGHT – IMAGE with swipe support */}
        <div
          className="hero-right"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <img src={slides[current].image} alt="hero" />

          {/* Arrows — hidden on mobile via CSS */}
          <button className="arrow left" onClick={prev}>
            <FaChevronLeft />
          </button>
          <button className="arrow right" onClick={next}>
            <FaChevronRight />
          </button>

          {/* Dots */}
          <div className="hero-dots">
            {slides.map((_, i) => (
              <span
                key={i}
                className={`hero-dot ${i === current ? "active" : ""}`}
                onClick={() => setCurrent(i)}
              />
            ))}
          </div>
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

        .desktop-text { display: inline; }
        .mobile-text  { display: none; }

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
          user-select: none;
          -webkit-user-drag: none;
        }

        /* ARROWS — desktop only */
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
          z-index: 10;
        }

        .arrow.left  { left: 8px; }
        .arrow.right { right: 8px; }

        .hero-right:hover .arrow {
          opacity: 1;
          pointer-events: auto;
          transform: translateY(-50%) scale(1);
        }

        .hero-right:hover .arrow.left  { left: 16px; }
        .hero-right:hover .arrow.right { right: 16px; }

        /* DOTS */
        .hero-dots {
          position: absolute;
          bottom: 12px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 7px;
          z-index: 10;
        }

        .hero-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.5);
          cursor: pointer;
          transition: all 0.3s ease;
          display: inline-block;
        }

        .hero-dot.active {
          background: white;
          width: 22px;
          border-radius: 4px;
        }

        /* ================= MOBILE ================= */
        @media (max-width: 768px) {
          .hero {
            flex-direction: column;
            padding-top: ${NAVBAR_HEIGHT}px;
          }

          // .hero-left {
          //   width: 100%;
          //   padding: 14px 16px;
          //   order: 2;
          //   display: flex;
          //   flex-direction: row;
          //   align-items: center;
          //   justify-content: space-between;
          //   border-radius: 14px;
          //   margin: 12px;
          // }

          .hero-left {
            display: none !important; 
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
            touch-action: pan-y; /* ✅ vertical scroll allow, horizontal swipe capture */
          }

          .hero-right img { height: auto; }

          .desktop-text { display: none; }
          .mobile-text  { display: inline; }

          /* ✅ Arrows completely hidden on mobile */
          .arrow {
            display: none !important;
          }

          /* ✅ Smaller dots on mobile */
          .hero-dots {
            bottom: 8px;
            gap: 5px;
          }

          .hero-dot {
            width: 5px;
            height: 5px;
          }

          .hero-dot.active {
            width: 14px;
            height: 5px;
          }
        }
      `}</style>
    </>
  );
};

export default Hero;