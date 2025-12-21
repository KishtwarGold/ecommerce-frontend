import giftbox from "../assets/giftbox.jpeg";
import saffronimg1 from "../assets/1st.jpeg";
import saffronimg2 from "../assets/2nd.jpeg";
import saffronimg3 from "../assets/3rd.jpg";
import saffronimg4 from "../assets/4th.jpg";
import walnutimg from "../assets/walnut.jpg";
import walnutimg2 from "../assets/walnut2.png";

export const products = [
  // ======================
  // SAFFRON PRODUCTS
  // ======================
  {
    id: 1,
    name: "Exclusive Collection 10G",
    productType: "Saffron",
    category: "Exclusive Collection",
    weight: "10g",
    price: 899,
    image: saffronimg1,
    description: [
      "A total of 10 grams of premium-grade saffron sourced from our Exclusive Collection, known for its deep color and rich aroma.",
      "Carefully packed to preserve freshness and potency, this pack is ideal for regular home use, cooking, wellness drinks, and traditional recipes. Available to order across India."
    ]
  },

  {
    id: 2,
    name: "Exclusive Collection 5G",
    productType: "Saffron",
    category: "Exclusive Collection",
    weight: "5g",
    price: 499,
    image: saffronimg2,
    description: [
      "This pack contains a total of 5 grams of high-quality saffron, perfectly measured for moderate household usage.",
      "Designed for users who use saffron occasionally, it delivers authentic aroma, vibrant color, and consistent quality in every strand. Available to order pan India."
    ]
  },

  {
    id: 3,
    name: "Gift Box 3G",
    productType: "Saffron",
    category: "Gift Boxes",
    weight: "3g",
    price: 4000,
    image: giftbox,
    description: [
      "A total of 3 grams of premium saffron presented in an elegant gift box, making it a perfect choice for festive and special occasions.",
      "Carefully curated for gifting, this pack combines luxurious packaging with superior saffron quality, ideal for weddings, celebrations, and premium gifting."
    ]
  },

  {
    id: 4,
    name: "Premium Box 2G",
    productType: "Saffron",
    category: "Premium Collection",
    weight: "2g",
    price: 50,
    image: saffronimg3,
    description: [
      "This pack includes 2 grams of premium saffron, ideal for light usage or first-time buyers.",
      "Designed for individual users who use saffron occasionally, it maintains authentic taste, aroma, and freshness in a compact and convenient size."
    ]
  },

  {
    id: 5,
    name: "Premium Gift Box",
    productType: "Saffron",
    category: "Premium Collection",
    weight: "5g",
    price: 3500,
    image: saffronimg4,
    description: [
      "A total of 5 grams of premium saffron packed in a luxurious gift box designed for special moments and celebrations.",
      "Perfect for festive gifting, this box blends elegant presentation with rich aroma, purity, and exceptional saffron quality."
    ]
  },

 // ======================
// WALNUT PRODUCTS
// ======================
{
  id: 6,
  name: "Premium Walnuts 1 KG",
  productType: "Walnuts",
  category: "Premium Collection",
  weight: "1 kg",
  price: 2300,
  image: walnutimg,
  description: [
    "A total of 1 kilogram of premium quality walnuts, rich in omega-3 fatty acids and essential nutrients.",
    "Perfect for daily snacking and cooking, these walnuts are carefully packed to retain crunch, freshness, and natural taste."
  ]
},

{
  id: 7,
  name: "Premium Walnuts 500G",
  productType: "Walnuts",
  category: "Premium Collection",
  weight: "500g",
  price: 1400,
  image: walnutimg2,
  description: [
    "This pack contains 500 grams of premium walnuts, ideal for regular consumption and gifting purposes.",
    "Freshly packed to preserve crunch, taste, and nutritional value, making it a healthy and thoughtful choice."
  ]
}

];
