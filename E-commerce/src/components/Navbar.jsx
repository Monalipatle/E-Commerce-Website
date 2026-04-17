import "./Navbar.css"
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../contexts/CartContext";
import { useAuth } from "../contexts/AuthContext";
import { useUI } from "../contexts/UIContext";

export default function Navbar() {
  const { totalItems } = useCart();
  const { user, isAuthenticated, logout } = useAuth();
  const { theme, toggleTheme } = useUI();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className={`navbar ${theme}`}>
      <div className="nav-container">
        
        {/* Logo */}
        <h2 className="logo">
          <Link to="/">ShopEase</Link>
        </h2>

        {/* Search */}
        <input
          type="text"
          placeholder="Search products..."
          className="search-box"
        />

        {/* Nav Links */}
        <div className="nav-links">
          <Link to="/">Home</Link>

          {/* Cart */}
          <Link to="/cart" className="cart-link">
            Cart ({totalItems})
          </Link>

          {/* Auth Section */}
          {isAuthenticated ? (
            <>
              <span className="user-name">Hi, {user?.name}</span>
              <button onClick={handleLogout} className="btn">
                Logout
              </button>
            </>
          ) : (
            <Link to="/login">Login</Link>
          )}

          {/* Theme Toggle */}
          <button onClick={toggleTheme} className="btn">
            {theme === "light" ? "Dark" : "Light"}
          </button>
        </div>
      </div>
    </nav>
  );
}