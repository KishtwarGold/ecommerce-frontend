// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// const BRAND_COLOR = "#b1120b";

// const slides = [
//   {
//     title: "From Farmers to Your Home",
//     desc: "Authentic produce sourced directly from Kishtwar’s trusted farmers.",
//     image: "/src/assets/mountain.png",
//   },
//   {
//     title: "Pure Kishtwari Saffron",
//     desc: "Hand-picked, sun-dried saffron threads straight from the farms of Kishtwar.",
//     image:
//       "/src/assets/SaffronPoster.jpeg",
//   },
//   {
//     title: "Premium Kishtwari Walnuts",
//     desc: "Naturally grown walnuts packed with nutrition and rich taste.",
//     image:
//       "https://png.pngtree.com/png-clipart/20240308/original/pngtree-photo-walnut-walnut-kernel-nut-isolated-png-full-hd-png-image_14536996.png",
//   },
// ];

// const NAVBAR_HEIGHT = 90;
// const EXTRA_GAP = 40;

// const Hero = () => {
//   const [current, setCurrent] = useState(0);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrent((p) => (p + 1) % slides.length);
//     }, 4000);
//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <>
//       <section
//         className="hero-section"
//         style={{ paddingTop: NAVBAR_HEIGHT + EXTRA_GAP }}
//       >
//         <div className="hero-container">
//           <div className="hero-row">
//             {/* LEFT */}
//             <div className="hero-left">
//               <span className="hero-badge">A FARMER’S BRAND</span>
//               <h1>{slides[current].title}</h1>
//               <p>{slides[current].desc}</p>
//               <button onClick={() => navigate("/collection")}>
//                 Shop Now
//               </button>
//             </div>

//             {/* RIGHT */}
//             <div className="hero-right">
//               <img src={slides[current].image} alt="hero" />
//             </div>
//           </div>
//         </div>

//         {/* DOTS */}
//         <div className="hero-dots">
//           {slides.map((_, i) => (
//             <span
//               key={i}
//               className={`dot ${i === current ? "active" : ""}`}
//               onClick={() => setCurrent(i)}
//             />
//           ))}
//         </div>
//       </section>

//       {/* ================= INLINE CSS ================= */}
//       <style>{`
//         .hero-section {
//           min-height: 100vh;
//           background: #fff7f7;
//           position: relative;
//           padding-bottom: 40px; /* ✅ IMPORTANT: space below dots */
//         }

//         .hero-container {
//           max-width: 1200px;
//           margin: 0 auto;
//           padding: 0 24px;
//         }

//         .hero-row {
//           display: flex;
//           align-items: center;
//           justify-content: space-between;
//           gap: 60px;
//         }

//         .hero-left {
//           max-width: 520px;
//         }

//         .hero-badge {
//           display: inline-block;
//           padding: 6px 14px;
//           border-radius: 20px;
//           border: 1px solid ${BRAND_COLOR};
//           color: ${BRAND_COLOR};
//           background: #fff;
//           font-size: 13px;
//           font-weight: 600;
//           margin-bottom: 20px;
//         }

//         .hero-left h1 {
//           font-size: 42px;
//           font-weight: 700;
//           margin-bottom: 20px;
//           color: #111827;
//           line-height: 1.2;
//         }

//         .hero-left p {
//           font-size: 18px;
//           color: #475569;
//           margin-bottom: 30px;
//           line-height: 1.6;
//         }

//         .hero-left button {
//           padding: 14px 34px;
//           border-radius: 30px;
//           border: none;
//           background: ${BRAND_COLOR};
//           color: #fff;
//           font-size: 16px;
//           cursor: pointer;
//         }

//         .hero-right img {
//           width: 420px;
//           height: 300px;
//           object-fit: cover;
//           border-radius: 14px;
//         }

//         /* ===== DOTS ===== */
//         .hero-dots {
//           margin-top: 40px;
//           display: flex;
//           justify-content: center;
//           gap: 8px;
//         }

//         .hero-dots .dot {
//           height: 10px;
//           width: 10px;
//           border-radius: 999px;
//           background: #e5e7eb;
//           cursor: pointer;
//           transition: all 0.3s ease;
//         }

//         .hero-dots .dot.active {
//           width: 28px;
//           background: ${BRAND_COLOR};
//         }

//         /* ===== MOBILE (PEHLE JAISE FEEL) ===== */
//         @media (max-width: 768px) {
//           .hero-section {
//             padding-bottom: 64px; /* ✅ extra space on mobile */
//           }

//           .hero-row {
//             flex-direction: column;
//             align-items: flex-start;
//             gap: 40px;
//           }

//           .hero-left {
//             max-width: 100%;
//           }

//           .hero-left h1 {
//             font-size: 32px;
//           }

//           .hero-right img {
//             width: 100%;
//             height: auto;
//           }
//         }
//       `}</style>
//     </>
//   );
// };

// export default Hero;












// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// const BRAND_COLOR = "#b1120b";

// const slides = [
//   {
//     title: "From Farmers to Your Home",
//     desc: "Authentic produce sourced directly from Kishtwar’s trusted farmers.",
//     image: "/src/assets/saffronPoster.jpeg",
//   },
//   {
//     title: "Pure Kishtwari Saffron",
//     desc: "Hand-picked, sun-dried saffron threads straight from the farms of Kishtwar.",
//     image: "/src/assets/SaffronPoster.jpeg",
//   },
//   {
//     title: "Premium Kishtwari Walnuts",
//     desc: "Naturally grown walnuts packed with nutrition and rich taste.",
//     image:
//       "/src/assets/SaffronPoster.jpeg",
//   },
// ];

// const Hero = () => {
//   const [current, setCurrent] = useState(0);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrent((p) => (p + 1) % slides.length);
//     }, 4500);
//     return () => clearInterval(timer);
//   }, []);

//   const prev = () =>
//     setCurrent((p) => (p === 0 ? slides.length - 1 : p - 1));
//   const next = () =>
//     setCurrent((p) => (p + 1) % slides.length);

//   return (
//     <>
//       <section className="hero">

//         {/* IMAGE BANNER (UNCHANGED) */}
//         <div className="hero-image">
//           <img src={slides[current].image} alt="hero" />

//           <button className="arrow left" onClick={prev}>
//             <FaChevronLeft />
//           </button>
//           <button className="arrow right" onClick={next}>
//             <FaChevronRight />
//           </button>
//         </div>

//         {/* TEXT CONTENT */}
//         <div className="hero-content">
//           <span className="badge">A FARMER’S BRAND</span>

//           {/* 👇 ONLY wrapper added for mobile layout */}
//           <div className="mobile-text-row">
//             <h1>{slides[current].title}</h1>

//             <button
//               className="cta"
//               onClick={() => navigate("/collection")}
//             >
//               Shop Now
//             </button>
//           </div>

//           <p className="desc">{slides[current].desc}</p>
//         </div>
//       </section>

//       <style>{`
//         /* ================= BASE (ORIGINAL) ================= */
//         .hero {
//           background: #fff7f7;
//           padding-top: 50px;
//         }

//         .hero-image {
//           position: relative;
//           width: 100%;
//           overflow: hidden;
//         }

//         .hero-image img {
//           width: 100%;
//           height: auto;
//           display: block;
//           object-fit: cover;
//         }

//         .arrow {
//           position: absolute;
//           top: 50%;
//           transform: translateY(-50%);
//           width: 36px;
//           height: 36px;
//           border-radius: 50%;
//           border: none;
//           background: rgba(255, 255, 255, 0.57);
//           color: #111111b4;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           cursor: pointer;
//         }

//         .arrow.left { left: 12px; }
//         .arrow.right { right: 12px; }

//         .hero-content {
//           max-width: 1200px;
//           margin: 0 auto;
//           padding: 28px 20px 48px;
//         }

//         .badge {
//           display: inline-block;
//           padding: 6px 14px;
//           border-radius: 20px;
//           border: 1px solid ${BRAND_COLOR};
//           color: ${BRAND_COLOR};
//           font-size: 13px;
//           font-weight: 600;
//           margin-bottom: 16px;
//           background: #fff;
//         }

//         .hero-content h1 {
//           font-size: 32px;
//           font-weight: 700;
//           color: #111827;
//         }

//         .desc {
//           font-size: 15px;
//           color: #475569;
//           margin-top: 14px;
//           line-height: 1.6;
//         }

//         .cta {
//           padding: 14px 36px;
//           border-radius: 999px;
//           border: none;
//           background: ${BRAND_COLOR};
//           color: #fff;
//           font-size: 16px;
//           cursor: pointer;
//           white-space: nowrap;
//         }

//         /* ================= DESKTOP (ORIGINAL) ================= */
//         @media (min-width: 1024px) {
//           .hero {
//             min-height: 100vh;
//             display: flex;
//             align-items: center;
//           }

//           .hero-image {
//             width: 50%;
//           }

//           .hero-content {
//             width: 50%;
//             padding: 0 48px;
//           }

//           .hero-content h1 {
//             font-size: 42px;
//           }

//           .desc {
//             font-size: 18px;
//             margin-top: 18px;
//           }

//           .mobile-text-row {
//             display: block;
//           }
//         }

//         /* ================= MOBILE (ONLY TEXT CHANGE) ================= */
//         @media (max-width: 1023px) {
//           .badge {
//             display: none;
//           }

//           .desc {
//             display: none;
//           }

//           .mobile-text-row {
//             display: flex;
//             align-items: center;
//             justify-content: space-between;
//             padding : 16px 0
//           }

//           .hero-content {
//             padding: 12px 20px 12px;
//           }

//           .hero-content h1 {
//             font-size: 20px;
//             line-height: 1.3;
//             margin:0;
//           }

//           .cta {
//             padding: 10px 18px;
//             font-size: 14px;
//           }
//         }
//       `}</style>
//     </>
//   );
// };

// export default Hero;


















// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// const BRAND_COLOR = "#b1120b";

// const slides = [
//   {
//     title: "From Farmers to Your Home",
//     desc: "Authentic produce sourced directly from Kishtwar’s trusted farmers.",
//     image: "/src/assets/saffronPoster.jpeg",
//   },
//   {
//     title: "Pure Kishtwari Saffron",
//     desc: "Hand-picked, sun-dried saffron threads straight from the farms of Kishtwar.",
//     image: "/src/assets/SaffronPoster.jpeg",
//   },
//   {
//     title: "Premium Kishtwari Walnuts",
//     desc: "Naturally grown walnuts packed with nutrition and rich taste.",
//     image:
//       "/src/assets/SaffronPoster.jpeg",
//   },
// ];

// const Hero = () => {
//   const [current, setCurrent] = useState(0);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrent((p) => (p + 1) % slides.length);
//     }, 4500);
//     return () => clearInterval(timer);
//   }, []);

//   const prev = () =>
//     setCurrent((p) => (p === 0 ? slides.length - 1 : p - 1));
//   const next = () =>
//     setCurrent((p) => (p + 1) % slides.length);

//   return (
//     <>
//       <section className="hero">

//         {/* IMAGE BANNER (UNCHANGED) */}
//         <div className="hero-image">
//           <img src={slides[current].image} alt="hero" />

//           <button className="arrow left" onClick={prev}>
//             <FaChevronLeft />
//           </button>
//           <button className="arrow right" onClick={next}>
//             <FaChevronRight />
//           </button>
//         </div>

//         {/* TEXT CONTENT */}
//         <div className="hero-content">
//           <span className="badge">A FARMER’S BRAND</span>

//           {/* 👇 ONLY wrapper added for mobile layout */}
//           <div className="mobile-text-row">
//             <h1>{slides[current].title}</h1>

//             <button
//               className="cta"
//               onClick={() => navigate("/collection")}
//             >
//               Shop Now
//             </button>
//           </div>

//           <p className="desc">{slides[current].desc}</p>
//         </div>
//       </section>

//       <style>{`
//         /* ================= BASE (ORIGINAL) ================= */
//         .hero {
//           background: #fff7f7;
//           padding-top: 50px;
//         }

//         .hero-image {
//           position: relative;
//           width: 100%;
//           overflow: hidden;
//         }

//         .hero-image img {
//           width: 100%;
//           height: auto;
//           display: block;
//           object-fit: cover;
//         }

//         .arrow {
//           position: absolute;
//           top: 50%;
//           transform: translateY(-50%);
//           width: 36px;
//           height: 36px;
//           border-radius: 50%;
//           border: none;
//           background: rgba(255, 255, 255, 0.57);
//           color: #111111b4;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           cursor: pointer;
//         }

//         .arrow.left { left: 12px; }
//         .arrow.right { right: 12px; }

//         .hero-content {
//           max-width: 1200px;
//           margin: 0 auto;
//           padding: 28px 20px 48px;
//         }

//         .badge {
//           display: inline-block;
//           padding: 6px 14px;
//           border-radius: 20px;
//           border: 1px solid ${BRAND_COLOR};
//           color: ${BRAND_COLOR};
//           font-size: 13px;
//           font-weight: 600;
//           margin-bottom: 16px;
//           background: #fff;
//         }

//         .hero-content h1 {
//           font-size: 32px;
//           font-weight: 700;
//           color: #111827;
//         }

//         .desc {
//           font-size: 15px;
//           color: #475569;
//           margin-top: 14px;
//           line-height: 1.6;
//         }

//         .cta {
//           padding: 14px 36px;
//           border-radius: 999px;
//           border: none;
//           background: ${BRAND_COLOR};
//           color: #fff;
//           font-size: 16px;
//           cursor: pointer;
//           white-space: nowrap;
//         }

//         /* ================= DESKTOP (ORIGINAL) ================= */
//         @media (min-width: 1024px) {
//           .hero {
//             min-height: 100vh;
//             display: flex;
//             align-items: center;
//           }

//           .hero-image {
//             width: 50%;
//           }

//           .hero-content {
//             width: 50%;
//             padding: 0 48px;
//           }

//           .hero-content h1 {
//             font-size: 42px;
//           }

//           .desc {
//             font-size: 18px;
//             margin-top: 18px;
//           }

//           .mobile-text-row {
//             display: block;
//           }
//         }

//         /* ================= MOBILE (ONLY TEXT CHANGE) ================= */
//         @media (max-width: 1023px) {
//           .badge {
//             display: none;
//           }

//           .desc {
//             display: none;
//           }

//           .mobile-text-row {
//             display: flex;
//             align-items: center;
//             justify-content: space-between;
//             padding : 16px 0
//           }

//           .hero-content {
//             padding: 12px 20px 12px;
//           }

//           .hero-content h1 {
//             font-size: 20px;
//             line-height: 1.3;
//             margin:0;
//           }

//           .cta {
//             padding: 10px 18px;
//             font-size: 14px;
//           }
//         }
//       `}</style>
//     </>
//   );
// };

// export default Hero;















// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// const BRAND_COLOR = "#b1120b";
// const NAVBAR_HEIGHT = 65; // 🔥 change if your navbar height changes

// const slides = [
//   {
//     title: "A Golden Essence for Every Day",
//     image: "/src/assets/saffronPoster.jpeg",
//   },
//   {
//     title: "A Golden Essence for Every Day",
//     image: "/src/assets/SaffronPoster.jpeg",
//   },
// ];

// const Hero = () => {
//   const [current, setCurrent] = useState(0);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrent((p) => (p + 1) % slides.length);
//     }, 5000);
//     return () => clearInterval(timer);
//   }, []);

//   const prev = () =>
//     setCurrent((p) => (p === 0 ? slides.length - 1 : p - 1));
//   const next = () =>
//     setCurrent((p) => (p + 1) % slides.length);

//   return (
//     <>
//       <section className="hero">

//         {/* LEFT – TEXT */}
//         <div className="hero-left">
//           <h1 className="hero-title">
//   <span className="desktop-text">
//     {slides[current].title}
//   </span>
//   <span className="mobile-text">
//     Pure & Premium
//   </span>
// </h1>

//           <button onClick={() => navigate("/collection")}>
//             SHOP NOW
//           </button>
//         </div>

//         {/* RIGHT – IMAGE */}
//         <div className="hero-right">
//           <img src={slides[current].image} alt="hero" />

//           <button className="arrow left" onClick={prev}>
//             <FaChevronLeft />
//           </button>
//           <button className="arrow right" onClick={next}>
//             <FaChevronRight />
//           </button>
//         </div>

//       </section>

//       <style>{`
//         /* ================= HERO BASE ================= */
//         .hero {
//           padding-top: ${NAVBAR_HEIGHT}px; /* ✅ FIX: navbar overlap */
//           display: flex;
//           align-items: center;
//           background: #fff7f7;
//         }

//         /* LEFT TEXT */
//         .hero-left {
//           width: 40%;
//           padding: 50px 60px;
//           display: flex;
//           flex-direction: column;
//           justify-content: center;
//         }

//         .desktop-text {
//   display: inline;
// }

// .mobile-text {
//   display: none;
// }


//         .hero-left h1 {
//           font-size: 40px;
//           line-height: 1.2;
//           margin-bottom: 28px;
//           color: ${BRAND_COLOR};
//           font-family: serif;
//         }

//         .hero-left button {
//           width: fit-content;
//           padding: 14px 38px;
//           border-radius: 999px;
//           border: none;
//           background: ${BRAND_COLOR};
//           color: #fff;
//           font-size: 16px;
//           cursor: pointer;
//         }

//         /* RIGHT IMAGE */
//         .hero-right {
//           width: 60%;
//           position: relative;
//         }

//         .hero-right img {
//           width: 100%;
//           height: 100%;
//           object-fit: contain; /* 🔥 no crop + full cover */
//           display: block;
//         }

//         /* ARROWS */
//         .arrow {
//           position: absolute;
//           top: 50%;
//           transform: translateY(-50%);
//           width: 35px;
//           height: 35px;
//           border-radius: 50%;
//           border: none;
//           color: #111111c3;
//           background: rgba(255, 255, 255, 0.53);
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           cursor: pointer;
//         }

//         .arrow.left { left: 16px; }
//         .arrow.right { right: 16px; }

//         /* ================= MOBILE ================= */
//         @media (max-width: 768px) {
//           .hero {
//             flex-direction: column;
//             padding-top: ${NAVBAR_HEIGHT}px;
//           }

//           .hero-left {
//     width: 100%;
//     padding: 14px 16px;
//     order: 2;

//     display: flex;
//     flex-direction: row;
//     align-items: center;
//     justify-content: space-between;

//      border-radius: 14px;
//     margin: 12px;
//   }

//           .hero-left h1 {
//     font-size: 24px;
//     font-weight: 540;
//     margin: 0;
//     line-height: 1.35;
//     color: #8f0d08;                /* deeper brand red */
//     max-width: 68%;
//     margin-left:10px;
//   }

//   .hero-left button {
//     padding: 8px 18px;
//     font-size: 13px;
//     font-weight: 600;
//     border-radius: 999px;
//     background: linear-gradient(
//       135deg,
//       #b1120b,
//       #d62828
//     );
//     box-shadow: 0 6px 14px rgba(177, 18, 11, 0.28);
//     white-space: nowrap;
//     margin-right:10px;
//   }

//           .hero-right {
//             width: 100%;
//             order: 1;
//           }

//           .hero-right img {
//             height: auto;
//           }

//           .desktop-text {
//     display: none;
//   }

//   .mobile-text {
//     display: inline;
//   }
//         }
//       `}</style>
//     </>
//   );
// };

// export default Hero;












import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const BRAND_COLOR = "#b1120b";
const NAVBAR_HEIGHT = 65;

const slides = [
  {
    title: "A Golden Essence for Every Day",
    image: "/src/assets/SaffronPoster.jpeg",
  },
  {
    title: "A Golden Essence for Every Day",
    image: "/src/assets/SaffronPoster.jpeg",
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

        // .hero-right:hover img {
        //   transform: scale(1.03);
        // }

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
            font-size: 24px;
            font-weight: 540;
            margin: 0;
            line-height: 1.35;
            color: #8f0d08;
            max-width: 68%;
            margin-left: 10px;
          }

          .hero-left button {
            padding: 8px 18px;
            font-size: 13px;
            font-weight: 600;
            border-radius: 999px;
            background: linear-gradient(135deg, #b1120b, #d62828);
            box-shadow: 0 6px 14px rgba(177, 18, 11, 0.28);
            white-space: nowrap;
            margin-right: 10px;
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
