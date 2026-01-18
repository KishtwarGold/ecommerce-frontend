import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import AppNavbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Collection from "./pages/Collection";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsofService from "./pages/TermsOfServices";
import ShippingPolicy from "./pages/ShippingPolicy";

import { CartProvider } from "./context/CartContext";

/* 👇 Layout Wrapper */
const Layout = () => {
  const location = useLocation();

  // ❌ Pages jahan Navbar & Footer nahi chahiye
  const hideLayoutRoutes = ["/privacy-policy","/terms-of-service", "/shipping-policy"];

  const hideLayout = hideLayoutRoutes.includes(location.pathname);

  return (
    <>
      {!hideLayout && <AppNavbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsofService />} />
        <Route path="/shipping-policy" element={<ShippingPolicy />} />
      </Routes>

      {!hideLayout && <Footer />}
    </>
  );
};

const App = () => {
  return (
    <CartProvider>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </CartProvider>
  );
};

export default App;
