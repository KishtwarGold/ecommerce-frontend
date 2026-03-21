import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { products } from "../utils/productsData";

import ProductGallery from "../components/products/ProductGallery";
import ProductInfo from "../components/products/ProductInfo";
import ProductTabs from "../components/products/ProductTabs";
import RelatedProducts from "../components/products/RelatedProducts";


export default function ProductDetails() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  // 🔹 Scroll to top on product change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // 🔹 Dynamic page title
  useEffect(() => {
    if (product) {
      document.title = `${product.name} | Kongdoon`;
    }
  }, [product]);

  if (!product) {
    return (
      <div style={{ padding: "160px 20px", textAlign: "center" }}>
        <h2>Product not found</h2>
      </div>
    );
  }

  return (
    <>
      <style>{`
        .pd-page {
          background: linear-gradient(180deg, #f8fafc, #ffffff);
          padding-top: 100px;
          padding-bottom: 100px;
        }

        .pd-container {
          max-width: 1200px;
          margin: auto;
          padding: 0 20px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 72px;
          align-items: start;
        }

        .pd-tabs-wrapper {
          max-width: 1080px;
          margin: 50px auto 0;
          padding: 0 20px;
        }

        @media (max-width: 1024px) {
          .pd-container {
            grid-template-columns: 1fr;
            gap: 52px;
          }

          .pd-tabs-wrapper {
            margin-top: 17px;
          }
        }
      `}</style>

      <div className="pd-page">
        <div className="pd-container">
          <ProductGallery image={product.image} />
          <ProductInfo product={product} />
        </div>

        <div className="pd-tabs-wrapper">
          <ProductTabs product={product} />
        </div>

        {/* ===============================
    RELATED PRODUCTS
=============================== */}
<div className="pd-tabs-wrapper">
  <RelatedProducts currentProduct={product} />
</div>

      </div>
    </>
  );
}
