import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Import Providers
import { CartProvider } from "./contexts/CartContext";
import { AuthProvider } from "./contexts/AuthContext";
import { UIProvider } from "./contexts/UIContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  
    <CartProvider>
      <AuthProvider>
        <UIProvider>
          <App />
        </UIProvider>
      </AuthProvider>
    </CartProvider>
  
);