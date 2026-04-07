import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Navbar() {
  const { totalItems } = useContext(CartContext);

  return (
    <div className="flex justify-between items-center px-10 py-4 bg-white shadow">

      {/* LOGO */}
      <h1 className="text-xl font-bold text-[#6D1F2F]">
        SkinAura
      </h1>

      {/* NAV LINKS */}
      <div className="flex gap-6 items-center">

        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>

        {/* 🛒 CART ICON */}
        <Link to="/cart" className="relative">

          <span className="text-2xl">🛒</span>

          {/* 🔥 BADGE */}
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
              {totalItems}
            </span>
          )}

        </Link>

      </div>

    </div>
  );
}

export default Navbar;