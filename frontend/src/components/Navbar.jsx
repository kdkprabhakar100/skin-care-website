import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex justify-between items-center px-8 py-4 bg-white shadow-md">

      <Link to="/" className="text-xl font-bold text-[#6D1F2F]">
        SkinAura
      </Link>

      <div className="space-x-6 hidden md:flex">
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
      </div>

      <Link
        to="/cart"
        className="bg-[#6D1F2F] text-white px-4 py-2 rounded"
      >
        Cart
      </Link>

    </div>
  );
}

export default Navbar;