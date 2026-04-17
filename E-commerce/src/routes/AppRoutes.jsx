import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "../pages/Home"
import Cart from "../pages/Cart"
import Login from "../pages/Login"
import Checkout from "../pages/Checkout"
import Orders from "../pages/Orders"
import Navbar from "../components/Navbar/Navbar"

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/orders" element={<Orders />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes