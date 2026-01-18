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
    price: 5100,
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
    price: 2800,
    image: saffronimg2,
    description: [
      "This pack contains a total of 5 grams of high-quality saffron, perfectly measured for moderate household usage.",
      "Designed for users who use saffron occasionally, it delivers authentic aroma, vibrant color, and consistent quality in every strand. Available to order pan India."
    ]
  },

  {
    id: 3,
    name: "1G Premium Pack",
    productType: "Saffron",
    category: "Premium Collection",
    weight: "1g",
    price: 650,
    image: giftbox,
    description: [
      "A total of 1 gram of premium saffron presented in an elegant gift box, making it a perfect choice for festive and special occasions.",
      "Carefully curated for gifting, this pack combines luxurious packaging with superior saffron quality, ideal for weddings, celebrations, and premium gifting."
    ]
  },

  {
    id: 4,
    name: "2G Premium Pack",
    productType: "Saffron",
    category: "Premium Collection",
    weight: "2g",
    price: 1200,
    image: saffronimg3,
    description: [
      "This pack includes 2 grams of premium saffron, ideal for light usage or first-time buyers.",
      "Designed for individual users who use saffron occasionally, it maintains authentic taste, aroma, and freshness in a compact and convenient size."
    ]
  },

  // {
  //   id: 5,
  //   name: "Premium Gift Box",
  //   productType: "Saffron",
  //   category: "Premium Collection",
  //   weight: "5g",
  //   price: 3500,
  //   image: saffronimg4,
  //   description: [
  //     "A total of 5 grams of premium saffron packed in a luxurious gift box designed for special moments and celebrations.",
  //     "Perfect for festive gifting, this box blends elegant presentation with rich aroma, purity, and exceptional saffron quality."
  //   ]
  // },

 // ======================
// WALNUT PRODUCTS
// ======================
{
  id: 6,
  name: "Premium Walnuts 500G",
  productType: "Walnuts",
  category: "Premium Collection",
  weight: "500G",
  price: 1200,
  image: walnutimg,
  description: [
    "A total of 500 grams of premium quality walnuts, rich in omega-3 fatty acids and essential nutrients.",
    "Perfect for daily snacking and cooking, these walnuts are carefully packed to retain crunch, freshness, and natural taste."
  ]
},

{
  id: 7,
  name: "Premium Walnuts 1KG",
  productType: "Walnuts",
  category: "Premium Collection",
  weight: "1KG",
  price: 2200,
  image: walnutimg2,
  description: [
    "This pack contains 1 kilogram of premium walnuts, ideal for regular consumption and gifting purposes.",
    "Freshly packed to preserve crunch, taste, and nutritional value, making it a healthy and thoughtful choice."
  ]
},

{
  id: 8,
  name: "Premium Walnuts 2KG",
  productType: "Walnuts",
  category: "Premium Collection",
  weight: "2 kg",
  price: 4000,
  image: walnutimg,
  description: [
    "A total of 2 kilograms of premium quality walnuts, rich in omega-3 fatty acids and essential nutrients.",
    "Perfect for daily snacking and cooking, these walnuts are carefully packed to retain crunch, freshness, and natural taste."
  ]
}

];
