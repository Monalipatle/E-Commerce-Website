import { useOrders } from "../context/OrderContext";
import "./Orders.css";
import { useNavigate } from "react-router-dom";

const Orders = () => {
  const { orders } = useOrders();
  const navigate = useNavigate();
  
  return (
    <div className="orders-container">
      <h2 className="orders-title">My Orders</h2>

      {orders.length === 0 ? (
        <p className="no-orders">No orders yet</p>
      ) : (
        orders.map((order) => (
          <div
            className="order-card"
            key={order.id}
            onClick={() => navigate(`/orders/${order.id}`)}
            style={{ cursor: "pointer" }}
          >
            
            {/* Header */}
            <div className="order-header">
              <div>
                <p><strong>Order ID:</strong> {order.id}</p>
                <p><strong>Date:</strong> {order.date}</p>
              </div>
              <div className="order-price">₹{order.total}</div>
            </div>

            {/* Items */}
            <div className="order-items">
              {order.items.map((item) => (
                <div key={item.id} className="order-item">
                  <img src={item.image} alt={item.title} />
                  <div>
                    <p>{item.title}</p>
                    <p>Qty: {item.qty}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Status Timeline */}
            <div className="timeline">
              <div className={`step ${getStatusClass(order.status, "Pending")}`}>
                Pending
              </div>
              <div className={`step ${getStatusClass(order.status, "Shipped")}`}>
                Shipped
              </div>
              <div className={`step ${getStatusClass(order.status, "Delivered")}`}>
                Delivered
              </div>
            </div>

          </div>
        ))
      )}
    </div>
  );
};

/* Helper for timeline */
const getStatusClass = (current, step) => {
  const order = ["Pending", "Shipped", "Delivered"];
  return order.indexOf(current) >= order.indexOf(step)
    ? "active"
    : "";
};

export default Orders;