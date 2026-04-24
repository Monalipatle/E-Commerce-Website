import { useProducts } from "../context/ProductContext";
import { useCart } from "../context/CartContext";
import "./Home.css";

const Home = () => {
  const { filteredProducts, search, setSearch } = useProducts();
  const { dispatch } = useCart();

  return (
    <div className="home-container">
      <h2 className="title">Explore Products</h2>

      <input
        className="search-bar"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="product-grid">
        {filteredProducts.map((p) => (
          <div className="product-card" key={p.id}>
            <img src={p.image} alt={p.title} />

            <div className="product-info">
              <h4>{p.title}</h4>
              <p className="price">₹{p.price}</p>

              <button
                className="cart-btn"
                onClick={() =>
                  dispatch({ type: "ADD", payload: p })
                }
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;