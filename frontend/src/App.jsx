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
import AdminDashboard from "./pages/AdminDashboard.jsx";
import AdminRoute from "./components/AdminRoute.jsx";
import AdminLogin from "./pages/AdminLogin.jsx";
import OrderDetails from "./pages/OrderDetails.jsx";

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
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route
          path="/admin/dashboard"
            element={
              <AdminRoute>
                <AdminDashboard />
              </AdminRoute>
                
            }
          />
        <Route path="/order/:id" element={<OrderDetails />} />
      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default App;