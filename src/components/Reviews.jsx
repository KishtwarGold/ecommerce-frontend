import { useEffect, useState } from "react";
import dpimage from "../assets/dp.jpg";

const reviews = [
  {
    name: "Rohan Das",
    city: "AHMEDABAD",
    image: dpimage,
    text:
      "Maine yahan se premium walnuts order kiye the. Taste fresh tha aur packaging bhi kaafi achi thi. Daily use ke liye perfect product hai.",
  },
  {
    name: "Priya Sharma",
    city: "MUMBAI",
    image: dpimage,
    text:
      "Saffron ki quality really impressive hai. Natural aroma aur colour bilkul authentic lagta hai. Milk aur sweets ke liye best hai.",
  },
  {
    name: "Amit Verma",
    city: "PUNE",
    image: dpimage,
    text:
      "Dry fruits fresh mile aur price bhi reasonable laga. Market ke comparison me better quality experience raha.",
  },
  {
    name: "Sneha Gupta",
    city: "DELHI",
    image: dpimage,
    text:
      "Healthy lifestyle ke liye walnuts aur saffron best choice hai. Products fresh aaye aur delivery bhi time par thi.",
  },
];

const CustomerLove = () => {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(3);

  /* RESPONSIVE */
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setVisible(1);
      else if (window.innerWidth < 1024) setVisible(2);
      else setVisible(3);
      setIndex(0);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  /* AUTO SLIDE */
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => {
        const lastIndex = reviews.length - visible;
        return prev >= lastIndex ? 0 : prev + 1;
      });
    }, 3500);

    return () => clearInterval(interval);
  }, [visible]);

  return (
    <>
      <style>{`
        :root {
          --brand-red: #c5161d;
          --brand-red-light: rgba(197, 22, 29, 0.12);
        }

        .customer-love {
          padding: 40px 0 20px; /* 🔥 bottom gap reduced */
          background: #f8f7fb;
        }

        /* ❌ REMOVED local .container override
           Bootstrap default container hi use hoga */

        .title {
          text-align: center;
          font-size: 28px;
          letter-spacing: 2px;
          color: #6b7280;
        }
        .title span {
          color: var(--brand-red);
          font-weight: 600;
        }

        .subtitle {
          text-align: center;
          color: var(--brand-red);
          font-size: 14px;
          margin-top: 6px;
        }

        .viewport {
          overflow: hidden;
          margin-top: 24px;
        }

        .track {
          display: flex;
          gap: 24px;
          transition: transform 0.6s ease;
        }

        .card {
          flex: 0 0 calc((100% - ${(visible - 1) * 24}px) / ${visible});
          background: #ffffff;
          padding: 26px 24px 24px;
          border-radius: 20px;
          border: 1px solid var(--brand-red-light);
          position: relative;
        }

        .quote {
          position: absolute;
          top: 22px;
          right: 24px;
          font-size: 40px;
          color: var(--brand-red-light);
          font-weight: 700;
        }

        .user {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 18px;
        }

        .user img {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          border: 3px solid var(--brand-red);
          object-fit: cover;
        }

        .user h6 {
          margin: 0;
          font-size: 16px;
          font-weight: 600;
          color: #111827;
        }

        .user small {
          display: block;
          margin-top: 2px;
          font-size: 12px;
          letter-spacing: 0.5px;
          color: var(--brand-red);
          font-weight: 500;
        }

        .text {
          font-size: 15px;
          color: #4b5563;
          line-height: 1.7;
          margin-bottom: 18px;
          min-height: 90px;
        }

        .stars {
          color: #fbbf24;
          font-size: 18px;
        }

        .dots {
          display: flex;
          justify-content: center;
          gap: 10px;
          margin-top: 12px;
        }

        .dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #d1d5db;
          cursor: pointer;
        }

        .dot.active {
          background: var(--brand-red);
        }
      `}</style>

      <section className="customer-love">
        <div className="container">
          <h2 className="title">
            CUSTOMER <span>LOVE</span>
          </h2>
          <p className="subtitle">See what our customers say ❤️</p>

          <div className="viewport">
            <div
              className="track"
              style={{
                transform: `translateX(-${index * (100 / visible)}%)`,
              }}
            >
              {reviews.map((item, i) => (
                <div className="card" key={i}>
                  <div className="quote">“</div>

                  <div className="user">
                    <img src={item.image} alt={item.name} />
                    <div>
                      <h6>{item.name}</h6>
                      <small>{item.city}</small>
                    </div>
                  </div>

                  <p className="text">"{item.text}"</p>
                  <div className="stars">★★★★★</div>
                </div>
              ))}
            </div>
          </div>

          <div className="dots">
            {reviews.map((_, i) => (
              <span
                key={i}
                className={`dot ${i === index ? "active" : ""}`}
                onClick={() => setIndex(i)}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CustomerLove;
