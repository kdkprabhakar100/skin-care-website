import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart.jsx";
import ProductDetails from "./pages/ProductDetails";
import Footer from "./components/footer";   
import Admin from "./pages/Admin.jsx";
import Checkout from "./pages/Checkout.jsx";  
import Order from "./pages/Order.jsx";
import AdminOrders from "./pages/AdminOrder.jsx";
import OrderSuccess from "./pages/OrderSuccess.jsx";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/orders" element={<Order />} />
        <Route path="/admin/orders" element={<AdminOrders />} />
        <Route path="/success" element={<OrderSuccess />} />
      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default App;