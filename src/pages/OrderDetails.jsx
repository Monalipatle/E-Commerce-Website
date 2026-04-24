import { useParams } from "react-router-dom";
import { useOrders } from "../context/OrderContext";
import "./OrderDetails.css";

const OrderDetails = () => {
  const { id } = useParams();
  const { orders } = useOrders();

  const order = orders.find((o) => o.id.toString() === id);

  if (!order) return <h2>Order not found</h2>;

  return (
    <div className="details-container">
      <h2>Order Details</h2>

      <div className="details-card">
        <p><strong>Order ID:</strong> {order.id}</p>
        <p><strong>Date:</strong> {order.date}</p>
        <p><strong>Total:</strong> ₹{order.total}</p>

        {/* Timeline */}
        <div className="timeline">
          <div className={`step ${getStatus(order.status, "Pending")}`}>Pending</div>
          <div className={`step ${getStatus(order.status, "Shipped")}`}>Shipped</div>
          <div className={`step ${getStatus(order.status, "Delivered")}`}>Delivered</div>
        </div>

        {/* Items */}
        <h3>Items</h3>
        <div className="items">
          {order.items.map((item) => (
            <div className="item" key={item.id}>
              <img src={item.image} alt={item.title} />
              <div>
                <p>{item.title}</p>
                <p>₹{item.price}</p>
                <p>Qty: {item.qty}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const getStatus = (current, step) => {
  const order = ["Pending", "Shipped", "Delivered"];
  return order.indexOf(current) >= order.indexOf(step) ? "active" : "";
};

export default OrderDetails;