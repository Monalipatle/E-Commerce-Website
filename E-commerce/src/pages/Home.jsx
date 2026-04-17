import { useProducts } from "../context/ProductContext";
import { useCart } from "../context/CartContext";
import "./Home.css";

const Home = () => {
  const { filteredProducts, search, setSearch, loading } = useProducts();
  const { dispatch } = useCart();

  if (loading) return <h2>Loading...</h2>;

  return (
    <div className="container">
      <h2 className="title">Products</h2>

      <input
        className="search-bar"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="grid">
        {filteredProducts.map((p) => (
          <div className="card" key={p.id}>
            <img src={p.image} alt={p.title} />

            <h4 className="card-title">{p.title}</h4>

            <p className="price">₹{p.price}</p>

            <button
              className="add-btn"
              onClick={() =>
                dispatch({ type: "ADD", payload: p })
              }
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home