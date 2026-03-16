import { CheckCircle, XCircle } from "lucide-react";

const KongdoonDifference = () => {
  return (
    <>
      <style>{`

        .diff-section{
          padding:70px 20px;
          background:linear-gradient(180deg,#faf7f5,#ffffff);
        }

        .diff-title{
          text-align:center;
          font-size:36px;
          font-weight:600;
          margin-bottom:10px;
        }

        .title-gray{
          color:#6b7280;
        }

        .title-red{
          color:#b1120b;
        }

        .diff-sub{
          font-size:18px;
          text-align:center;
          max-width:680px;
          margin:0 auto 60px;
          color:#6b7280;
          line-height:1.7;
        }

        .diff-grid{
          max-width:1200px;
          margin:auto;
          display:grid;
          grid-template-columns:1fr 80px 1fr;
          gap:30px;
          align-items:center;
        }

        .vs-badge{
          display:flex;
          align-items:center;
          justify-content:center;
          width:60px;
          height:60px;
          border-radius:50%;
          background:#b1120b;
          color:white;
          font-weight:600;
          font-size:22px;
          margin:auto;
          box-shadow:0 10px 25px rgba(0,0,0,0.15);
        }

        .diff-card{
          background:white;
          padding:40px 35px;
          border-radius:22px;
          box-shadow:0 15px 40px rgba(0,0,0,0.08);
          position:relative;
          transition:all .35s ease;
        }

        .diff-card:hover{
          transform:translateY(-8px);
          box-shadow:0 25px 60px rgba(0,0,0,0.15);
        }

        .kongdoon{
          border:2px solid #b1120b;
        }

        .ordinary{
          border:1px solid #e5e7eb;
        }

        .premium-badge{
          position:absolute;
          top:-12px;
          left:20px;
          background:#b1120b;
          color:white;
          font-size:12px;
          padding:6px 14px;
          border-radius:20px;
          font-weight:500;
        }

        .card-title{
          font-size:21px;
          font-weight:600;
          margin-bottom:24px;
          color:#1f2937;
        }

        .feature{
          display:flex;
          align-items:center;
          gap:14px;
          margin-bottom:16px;
          font-size:17px;
          color:#374151;
        }

        .icon-good{
          color:#16a34a;
        }

        .icon-bad{
          color:#9ca3af;
        }

        @media(max-width:900px){

          .diff-grid{
            grid-template-columns:1fr;
          }

          .vs-badge{
            width:50px;
            height:50px;
            font-size:18px;
          }

          .diff-title{
            font-size:30px;
          }

          .feature{
            font-size:16.8px;
        }
        }

      `}</style>

      <section className="diff-section">

        <h2 className="diff-title">
          <span className="title-gray">Why</span>{" "}
          <span className="title-red">Kongdoon Saffron</span>{" "}
          <span className="title-gray">is Special</span>
        </h2>

        <p className="diff-sub">
          Our saffron is cultivated in the pristine valleys of Kishtwar using
          traditional methods that preserve purity, aroma and medicinal value.
        </p>

        <div className="diff-grid">

          {/* Kongdoon Card */}
          <div className="diff-card kongdoon">

            <div className="premium-badge">
              Premium Choice
            </div>

            <div className="card-title">
              Kongdoon Saffron
            </div>

            <div className="feature">
              <CheckCircle size={28} className="icon-good"/>
              Grown in the pure valleys of Kishtwar
            </div>

            <div className="feature">
              <CheckCircle size={28} className="icon-good"/>
              Carefully hand-picked by farmers
            </div>

            <div className="feature">
              <CheckCircle size={28} className="icon-good"/>
              Deep red premium saffron threads
            </div>

            <div className="feature">
              <CheckCircle size={28} className="icon-good"/>
              Strong natural aroma & flavour
            </div>

            <div className="feature">
              <CheckCircle size={28} className="icon-good"/>
              100% pure with no artificial coloring
            </div>

          </div>

          {/* VS Badge */}
          <div className="vs-badge">
            VS
          </div>

          {/* Ordinary Card */}
          <div className="diff-card ordinary">

            <div className="card-title">
              Ordinary Saffron
            </div>

            <div className="feature">
              <XCircle size={28} className="icon-bad"/>
              Source of saffron often unknown
            </div>

            <div className="feature">
              <XCircle size={28} className="icon-bad"/>
              Not always carefully hand picked
            </div>

            <div className="feature">
              <XCircle size={28} className="icon-bad"/>
              Threads may be lighter in color
            </div>

            <div className="feature">
              <XCircle size={28} className="icon-bad"/>
              Weak aroma & taste
            </div>

            <div className="feature">
              <XCircle size={28} className="icon-bad"/>
              May contain artificial coloring
            </div>

          </div>

        </div>

      </section>
    </>
  );
};

export default KongdoonDifference;