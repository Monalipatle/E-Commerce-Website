import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />   {/* ✅ Navbar will show here */}

      <Routes>
        <Route path="/" element={<h1>Home Page</h1>} />
        <Route path="/cart" element={<h1>Cart Page</h1>} />
        <Route path="/login" element={<h1>Login Page</h1>} />
      </Routes>
    </Router>
  );
}

export default App;