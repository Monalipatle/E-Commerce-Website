import { useCart } from "../context/CartContext";
import { useOrders } from "../context/OrderContext";

const Checkout = () => {
  const { cart, totalPrice, dispatch } = useCart();
  const { placeOrder } = useOrders();

  return (
    <button
      onClick={() => {
        placeOrder(cart, totalPrice);
        dispatch({ type: "CLEAR" });
      }}
    >
      Place Order
    </button>
  );
};

export default Checkout;