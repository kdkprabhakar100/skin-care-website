import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import ProductDetails from "./pages/ProductDetails";
import Footer from "./components/footer";   
import Admin from "./pages/Admin.jsx";


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
      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default App;