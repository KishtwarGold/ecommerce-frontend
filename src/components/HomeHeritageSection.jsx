// import React from "react";
// import { Link } from "react-router-dom";
// import mountain from "../assets/1.jpg";

// const HomeHeritageSection = () => {
//   return (
//     <>
//       <style>{`
//         .heritage-section {
//           // margin: 80px 0;
//           padding: 80px 0; /* ✅ FIX: add padding instead */
//         }

//         .highlight-btn {
//           border: 1px solid #b1120b;
//           background: #b1120b;
//           color: #ffffff;
//           padding: 5px 16px;
//           border-radius: 999px;
//           font-size: 15px;
//           font-weight: 600;
//         }

//         .heritage-title {
//           font-size: 24px;
//           font-weight: 500;
//           line-height: 1.25;
//           color: #0f172a;
//         }

//         .heritage-desc {
//           font-size: 16px;
//           color: #3f4751;
//           max-width: 600px;
//           line-height: 1.7;
//         }

//         .learn-btn {
//           border: 2px solid #b1120b;
//           background: transparent;
//           color: #b1120b;
//           padding: 11px 26px;
//           border-radius: 12px;
//           font-size: 15px;
//           font-weight: 600;
//           letter-spacing: 0.8px;
//           transition: all 0.25s ease;
//         }

//         .learn-btn:hover {
//           background: #b1120b;
//           color: #ffffff;
//         }

//         .heritage-img {
//           border-radius: 26px;
//           height: 360px;
//           object-fit: cover;
//           box-shadow: 0 18px 40px rgba(0,0,0,0.14);
//         }

//         @media (max-width: 768px) {
//           .heritage-section {
//             // margin: 60px 0;
//             padding: 60px 0; /* mobile spacing */
//           }

//           .heritage-title {
//             font-size: 26px;
//           }

//           .heritage-img {
//             height: 260px;
//             margin-top: 24px;
//           }
//         }
//       `}</style>

//       <section className="heritage-section">
//         <div className="container">
//           <div className="row align-items-center">

//             {/* LEFT */}
//             <div className="col-lg-6 mb-4 mb-lg-0">
//               <button className="highlight-btn mb-3">
//                 About Kishtwar
//               </button>

//               <p className="heritage-desc mb-3">
//                 <strong>Kishtwar</strong>  is known for its breathtaking valleys
//                 and ideal climate, making it one of the finest regions for
//                 cultivating premium saffron.
//               </p>

//               <p className="heritage-desc mb-3">
//                 Located in the Himalayan region, it offers high-altitude fields,
//                 fertile soil, and natural conditions that enhance the aroma,
//                 color, and quality of saffron.
//               </p>

//               <p className="heritage-desc mb-4">
//                 The rich heritage and traditional farming practices of Kishtwar
//                 make it a trusted source for authentic and high-quality saffron.
//                  A legacy known for its unmatched quality and richness.
//               </p>

//               <Link to="/about">
//                 <button className="learn-btn">
//                   Know more about Kishtwar ➜
//                 </button>
//               </Link>
//             </div>

//             {/* RIGHT */}
//             <div className="col-lg-6">
//               <img
//                 src={mountain}
//                 alt="Kishtwar Valley"
//                 className="img-fluid w-100 heritage-img"
//               />
//             </div>

//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default HomeHeritageSection;



import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HomeHeritageSection = () => {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false, // clean UI
  };

  return (
    <>
      <style>{`
        .heritage-section {
          padding: 80px 0;
        }

        .highlight-btn {
          border: 1px solid #b1120b;
          background: #b1120b;
          color: #ffffff;
          padding: 5px 16px;
          border-radius: 999px;
          font-size: 15px;
          font-weight: 600;
        }

        .heritage-desc {
          font-size: 16px;
          color: #3f4751;
          max-width: 600px;
          line-height: 1.7;
        }

        .learn-btn {
          border: 2px solid #b1120b;
          background: transparent;
          color: #b1120b;
          padding: 11px 26px;
          border-radius: 12px;
          font-size: 15px;
          font-weight: 600;
        }

        .learn-btn:hover {
          background: #b1120b;
          color: #fff;
        }

        .slider-img {
          width: 100%;
          height: 360px;
          object-fit: cover;
          border-radius: 20px;
        }

        @media (max-width: 768px) {
          .heritage-section {
            padding: 40px 0;
          }

          .slider-img {
            height: 240px;
            margin-top: 20px;
          }
        }
      `}</style>

      <section className="heritage-section">
        <div className="container">
          <div className="row align-items-center">

            {/* LEFT */}
            <div className="col-lg-6 mb-4 mb-lg-0">
              <button className="highlight-btn mb-3">
                About Kishtwar
              </button>

              <p className="heritage-desc mb-3">
                <strong>Kishtwar</strong> is known for its breathtaking valleys
                and ideal climate, making it one of the finest regions for
                cultivating premium saffron.
              </p>

              <p className="heritage-desc mb-3">
                Located in the Himalayan region, it offers high-altitude fields,
                fertile soil, and natural conditions that enhance the aroma,
                color, and quality of saffron.
              </p>

              <p className="heritage-desc mb-4">
                The rich heritage and traditional farming practices of Kishtwar
                make it a trusted source for authentic saffron.
              </p>

              <Link to="/about">
                <button className="learn-btn">
                  Know more about Kishtwar ➜
                </button>
              </Link>
            </div>

            {/* RIGHT SLIDER */}
            <div className="col-lg-6">
              <Slider {...settings}>
                <div>
                  <img src={img1} alt="" className="slider-img" />
                </div>
                <div>
                  <img src={img2} alt="" className="slider-img" />
                </div>
                <div>
                  <img src={img3} alt="" className="slider-img" />
                </div>
              </Slider>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default HomeHeritageSection;