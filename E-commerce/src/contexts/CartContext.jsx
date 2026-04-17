import { createContext, useContext, useState } from "react";

// Create Context
const CartContext = createContext();

// Provider
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Example value
  const totalItems = cart.length;

  return (
    <CartContext.Provider value={{ cart, setCart, totalItems }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom Hook
export const useCart = () => {
  return useContext(CartContext);
};