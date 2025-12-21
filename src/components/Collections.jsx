import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { products } from "../utils/productsData";

const LatestCollections = () => {
  const [columns, setColumns] = useState(4);
  const sectionRef = useRef(null);
  const navigate = useNavigate();

  /* RESPONSIVE COLUMNS */
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setColumns(2);
      else if (window.innerWidth < 1024) setColumns(3);
      else setColumns(4);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  /* SCROLL FADE-IN */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .fade-section {
          opacity: 0;
          transform: translateY(40px);
          transition: all 0.8s ease;
        }
        .fade-section.show {
          opacity: 1;
          transform: translateY(0);
        }

        .card-animate {
          transition: transform 0.35s ease, box-shadow 0.35s ease;
        }
        .card-animate:hover {
          transform: translateY(-6px);
          box-shadow: 0 14px 30px rgba(0,0,0,0.15);
        }

        .img-animate img {
          transition: transform 0.45s ease;
        }
        .card-animate:hover .img-animate img {
          transform: scale(1.08);
        }

        .arrow-animate {
          transition: all 0.3s ease;
        }
        .arrow-animate:hover {
          background: #b1120b;
          color: #fff;
        }
      `}</style>

      <section ref={sectionRef} className="fade-section" style={styles.section}>
        <div style={styles.container}>
          <div style={styles.headingWrap}>
            <h2 style={styles.heading}>
              Featured <span style={styles.headingAccent}>Collections</span>
            </h2>
            <p style={styles.subtitle}>
              Discover our newest arrivals of premium saffron and dry fruits
            </p>
          </div>

          <div
            style={{
              ...styles.grid,
              gridTemplateColumns: `repeat(${columns}, 1fr)`,
            }}
          >
            {products.map((item) => (
              <div key={item.id} className="card-animate" style={styles.card}>
                <div
                  className="img-animate"
                  style={{
                    ...styles.imageWrap,
                    height: columns >= 4 ? "220px" : "180px",
                  }}
                >
                  <img src={item.image} alt={item.name} style={styles.image} />
                </div>

                <div style={styles.content}>
                  <h2 style={styles.name}>{item.name}</h2>

                  <div style={styles.priceRow}>
                    <span style={styles.price}>₹{item.price}</span>
                    <button
                      className="arrow-animate"
                      style={styles.arrow}
                      onClick={() => navigate(`/product/${item.id}`)}
                    >
                      →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default LatestCollections;

/* ================= STYLES (UNCHANGED) ================= */

const styles = {
  section: {
    padding: "50px 0",
    background: "#ffffff",
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 24px",
  },
  headingWrap: {
    textAlign: "center",
    marginBottom: "32px",
  },
  heading: {
    fontSize: "30px",
    letterSpacing: "2px",
    color: "#6b7280",
    marginBottom: "10px",
  },
  headingAccent: {
    color: "#b1120b",
    fontWeight: "600",
    fontSize: "30px",
  },
  subtitle: {
    fontSize: "16px",
    color: "#b1120b",
  },
  grid: {
    display: "grid",
    gap: "20px",
  },
  card: {
    background: "#fff",
    borderRadius: "16px",
    boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
    overflow: "hidden",
  },
  imageWrap: {
    background: "#f3f4f6",
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  content: {
    padding: "14px",
  },
  name: {
    marginBottom: "4px",
    color: "#1f2937",
    fontWeight: "500",
    fontSize: "18px",
  },
  priceRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  price: {
    fontSize: "15px",
    fontWeight: "600",
    color: "#b1120b",
  },
  arrow: {
    width: "30px",
    height: "30px",
    borderRadius: "50%",
    border: "1px solid #b1120b",
    background: "transparent",
    color: "#b1120b",
    cursor: "pointer",
  },
};
