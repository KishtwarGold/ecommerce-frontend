export default function ProductGallery({ image }) {
  if (!image) return null;

  return (
    <>
      <style>{`
        /* PURE IMAGE – NO CARD, NO SHADOW, NO BACKGROUND */
        .pg-hero-wrapper {
          width: 100%;
          max-width: 520px;
          margin: 0 auto;
          background: transparent;
        }

        .pg-hero-image {
          width: 100%;
          height: 420px;

          /* important for walnuts + saffron */
          object-fit: contain;

          /* REMOVE CARD FEEL COMPLETELY */
          border-radius: 0;
          box-shadow: none;
          background: transparent;
          display: block;
        }

        @media (max-width: 1024px) {
          .pg-hero-image {
            height: 360px;
          }
        }

        @media (max-width: 640px) {
          .pg-hero-image {
            height: 300px;
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
