import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import{ useLocation } from "react-router-dom";  
import { useNavigate } from "react-router-dom";

function Navbar() {
  const { totalItems } = useContext(CartContext);
  const location = useLocation();
  const navigate = useNavigate();
  const isAdminPage = location.pathname.startsWith("/admin"); 
  return (
    <div className="flex justify-between items-center px-10 py-4 bg-white shadow">

      {/* LOGO */}
      <h1 className="text-xl font-bold text-[#6D1F2F]">
        SkinAura
      </h1>

      {/* NAV LINKS */}

      <div className="flex gap-6">

      {isAdminPage ? (
        <>
          <a href="/admin/dashboard">Dashboard</a>
          <a href="/admin/orders">Orders</a>
          <button
            onClick={() => {
              localStorage.removeItem("isAdmin");
              navigate("/admin/login");
            }}
            className="flex items-center gap-2 bg-gradient-to-r from-red-500 to-red-600 
                      text-white px-5 py-2.5 rounded-xl shadow-md 
                      hover:shadow-lg hover:scale-105 
                      transition-all duration-200 ease-in-out"
          >
            Logout
          </button>
        </>
      ) : (
        <>
          <a href="/">Home</a>
          <a href="/shop">Shop</a>
          <Link to="/cart" className="relative">
          <span className="text-2xl">🛒</span>
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                  {totalItems}
                </span>
              )}

            </Link>
        </>
      )}

    </div>

    </div>
  );
}

export default Navbar;