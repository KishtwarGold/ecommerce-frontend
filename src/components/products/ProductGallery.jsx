export default function ProductGallery({ image }) {
  if (!image) return null;

  return (
    <>
      <style>{`
        /* ── DESKTOP / TABLET (≥ 768px) — original ── */
        .pg-hero-wrapper {
          width: 100%;
          max-width: 520px;
          margin: 0 auto;
          background: transparent;
        }

        .pg-hero-image {
          width: 100%;
          height: 420px;
          object-fit: cover;
          object-position: center;
          border-radius: 20px;
          box-shadow: none;
          background: transparent;
          display: block;
        }

        @media (max-width: 1024px) {
          .pg-hero-image {
            height: 360px;
          }
        }

        /* ── MOBILE (≤ 767px) — cover + rounded ── */
        @media (max-width: 767px) {
          .pg-hero-wrapper {
            max-width: 100%;
            aspect-ratio: 1 / 1;
            overflow: hidden;
          }

          .pg-hero-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
            border-radius: 12px;
          }
        }
      `}</style>

      <div className="pg-hero-wrapper">
        <img
          src={image}
          alt="product"
          className="pg-hero-image"
        />
      </div>
    </>
  );
}