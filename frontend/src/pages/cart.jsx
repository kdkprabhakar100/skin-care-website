import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Cart() {
  const { cart } = useContext(CartContext);

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold text-[#6D1F2F]">
        Your Cart 🛒
      </h1>

      {cart.length === 0 ? (
        <p className="mt-4 text-gray-600">Cart is empty</p>
      ) : (
        <div className="mt-6 space-y-4">
          {cart.map((item, i) => (
            <div key={i} className="p-4 shadow rounded">
              <h2>{item.name}</h2>
              <p>${item.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Cart;