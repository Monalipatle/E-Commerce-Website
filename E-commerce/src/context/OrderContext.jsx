import { createContext, useContext, useState } from "react";

const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const [orders, setOrders] = useState(
    JSON.parse(localStorage.getItem("orders")) || []
  );

  const placeOrder = (cart, total) => {
    const newOrder = {
      id: Date.now(),
      items: cart,
      total,
      date: new Date().toLocaleString(),
      status: "Pending",
    };

    const updated = [newOrder, ...orders];
    setOrders(updated);
    localStorage.setItem("orders", JSON.stringify(updated));
  };

  return (
    <OrderContext.Provider value={{ orders, placeOrder }}>
      {children}
    </OrderContext.Provider>
  );
};

export const useOrders = () => useContext(OrderContext);