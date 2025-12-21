import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // ✅ ALWAYS ARRAY
  const [cartItems, setCartItems] = useState([]);

  // ✅ Load from localStorage (optional but recommended)
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  // ✅ Save to localStorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  // ✅ ADD TO CART (merge qty if same product)
  const addToCart = (product) => {
    setCartItems((prev = []) => {
      const existing = prev.find((item) => item.id === product.id);

      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, qty: item.qty + product.qty }
            : item
        );
      }

      return [...prev, product];
    });
  };

  // ✅ REMOVE ITEM
  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,       // 🔥 IMPORTANT NAME
        addToCart,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// ✅ REQUIRED HOOK
export const useCart = () => useContext(CartContext);
