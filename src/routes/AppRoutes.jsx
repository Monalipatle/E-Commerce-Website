import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "../pages/Home"
import Cart from "../pages/Cart"
import Login from "../pages/Login"
import Checkout from "../pages/Checkout"
import Orders from "../pages/Orders"
import Navbar from "../components/Navbar/Navbar"
import Footer from "../components/Footer/Footer";
import ProtectedRoute from "./ProtectedRoute";
import OrderDetails from "../pages/OrderDetails";
import OrderSuccess from "../pages/OrderSuccess";

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
        <Route path="/cart" element={<ProtectedRoute> <Cart /> </ProtectedRoute>}/>  
        <Route path="/checkout" element={ <ProtectedRoute> <Checkout /> </ProtectedRoute>}/>
        <Route path="/orders/:id" element={<OrderDetails />} />
        <Route path="/success" element={<OrderSuccess />} />

      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default AppRoutes