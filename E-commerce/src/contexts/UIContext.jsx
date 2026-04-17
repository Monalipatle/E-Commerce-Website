import { createContext, useContext, useState } from "react";

const UIContext = createContext();

export const UIProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(prev => (prev === "light" ? "dark" : "light"));
  };

  return (
    <UIContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </UIContext.Provider>
  );
};

// Custom hook
export const useUI = () => {
  return useContext(UIContext);
};