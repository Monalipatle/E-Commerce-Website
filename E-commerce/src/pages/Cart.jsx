import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cart, dispatch, totalPrice } = useCart();

  return (
    <div>
      {cart.map((i) => (
        <div key={i.id}>
          {i.title} - {i.qty}
          <button onClick={() => dispatch({ type: "INC", payload: i.id })}>
            +
          </button>
          <button onClick={() => dispatch({ type: "DEC", payload: i.id })}>
            -
          </button>
          <button onClick={() => dispatch({ type: "REMOVE", payload: i.id })}>
            Remove
          </button>
        </div>
      ))}

      <h3>Total: ₹{totalPrice}</h3>
    </div>
  );
};

export default Cart;