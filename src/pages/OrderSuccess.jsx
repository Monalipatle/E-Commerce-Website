import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./OrderSuccess.css";

const OrderSuccess = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/orders");
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="success-container">
      <div className="success-box">
        <div className="checkmark-circle">
          <div className="checkmark"></div>
        </div>

        <h2>Order Placed Successfully 🎉</h2>
        <p>Redirecting to your orders...</p>
      </div>
    </div>
  );
};

export default OrderSuccess;