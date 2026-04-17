import { useOrders } from "../context/OrderContext";

const Orders = () => {
  const { orders } = useOrders();

  return (
    <div>
      {orders.map((o) => (
        <div key={o.id}>
          ₹{o.total} - {o.status}
        </div>
      ))}
    </div>
  );
};

export default Orders;