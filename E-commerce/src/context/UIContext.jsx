import { createContext, useContext, useState } from "react";

const UIContext = createContext();

export const UIProvider = ({ children }) => {
  const [toast, setToast] = useState(null);

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(null), 3000);
  };

  return (
    <UIContext.Provider value={{ toast, showToast }}>
      {children}
    </UIContext.Provider>
  );
};

export const useUI = () => useContext(UIContext);