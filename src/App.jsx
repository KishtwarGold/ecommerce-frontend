import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppNavbar from "./components/Navbar";

import Home from "./pages/Home";
import Collection from "./pages/Collection";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart"; // ✅ ADD THIS
import Checkout from "./pages/Checkout";

import { CartProvider } from "./context/CartContext";

const App = () => {
  return (
    <CartProvider> {/* ✅ Cart state available everywhere */}
      <BrowserRouter>
        <AppNavbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} /> {/* ✅ IMPORTANT */}
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
};

export default App;
