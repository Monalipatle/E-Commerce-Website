import { Link, useLocation } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { useAuth } from "../../context/AuthContext";
import "./Navbar.css";

const Navbar = () => {
  const { totalItems } = useCart();
  const { user, logout } = useAuth();
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="logo">ShopShopShop</div>

      <div className="nav-links">
        <Link className={location.pathname === "/" ? "active" : ""} to="/">
          Home
        </Link>

        <Link className={location.pathname === "/cart" ? "active" : ""} to="/cart">
          Cart
          <span className="badge">{totalItems}</span>
        </Link>

        <Link className={location.pathname === "/orders" ? "active" : ""} to="/orders">
          Orders
        </Link>
      </div>

      <div className="auth-section">
        {user ? (
          <>
            <span className="user">Hi, {user.name}</span>
            <button className="logout" onClick={logout}>
              Logout
            </button>
          </>
        ) : (
          <Link className="login-btn" to="/login">
            Login
          </Link>
        )}
      </div>
      {user?.role === "admin" && <Link to="/admin">Admin Panel</Link>}
    </nav>
  );
};

export default Navbar;
