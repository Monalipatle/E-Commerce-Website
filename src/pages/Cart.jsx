import { useCart } from "../context/CartContext";
import { useOrders } from "../context/OrderContext";
import { useNavigate } from "react-router-dom";
import "./Cart.css";

const Cart = () => {
  const { cart, dispatch, totalPrice } = useCart();
  const { placeOrder } = useOrders();
  const navigate = useNavigate();

  const handleOrder = () => {
    if (cart.length === 0) {
      alert("Cart is empty");
      return;
    }

    // 1️⃣ Send cart data to Order Context
    placeOrder(cart, totalPrice);

    // 2️⃣ Clear cart
    dispatch({ type: "CLEAR" });

    // 3️⃣ Redirect
    navigate("/success");
  };

  return (
    <div className="cart-container">
      <h2 className="cart-title">Your Cart 🛒</h2>

      {cart.length === 0 ? (
        <p className="empty-cart">Your cart is empty</p>
      ) : (
        <>
          <div className="cart-list">
            {cart.map((item) => (
              <div className="cart-card" key={item.id}>
                <img src={item.image} alt={item.title} />

                <div className="cart-info">
                  <h4>{item.title}</h4>
                  <p>₹{item.price}</p>

                  <div className="qty-controls">
                    <button
                      onClick={() =>
                        dispatch({ type: "DEC", payload: item.id })
                      }
                    >
                      -
                    </button>

                    <span>{item.qty}</span>

                    <button
                      onClick={() =>
                        dispatch({ type: "INC", payload: item.id })
                      }
                    >
                      +
                    </button>
                  </div>

                  <button
                    className="remove-btn"
                    onClick={() =>
                      dispatch({ type: "REMOVE", payload: item.id })
                    }
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="cart-summary">
            <h3>Total: ₹{totalPrice}</h3>

            <button className="checkout-btn" onClick={handleOrder}>
              Place Order
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;