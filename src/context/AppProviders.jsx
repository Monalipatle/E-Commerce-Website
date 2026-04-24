import { ProductProvider } from "./ProductContext";
import { CartProvider } from "./CartContext";
import { AuthProvider } from "./AuthContext";
import { OrderProvider } from "./OrderContext";
import { UIProvider } from "./UIContext";

const AppProviders = ({ children }) => {
  return (
    <AuthProvider>
      <ProductProvider>
        <CartProvider>
          <OrderProvider>
            <UIProvider>{children}</UIProvider>
          </OrderProvider>
        </CartProvider>
      </ProductProvider>
    </AuthProvider>
  );
};

export default AppProviders;