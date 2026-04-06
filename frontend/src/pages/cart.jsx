import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Cart() {
  const {
    cart,
    addToCart,
    decreaseQty,
    removeFromCart,
    totalPrice,
  } = useContext(CartContext);

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        cart.map((item) => (
          <div
            key={item._id}
            className="flex justify-between items-center bg-white p-4 mb-4 rounded shadow"
          >

            <div>
              <h2>{item.name}</h2>
              <p>${item.price}</p>
            </div>

            <div className="flex items-center gap-2">
              <button onClick={() => decreaseQty(item._id)}>-</button>
              <span>{item.qty}</span>
              <button onClick={() => addToCart(item)}>+</button>
            </div>

            <button
              onClick={() => removeFromCart(item._id)}
              className="text-red-500"
            >
              Remove
            </button>
          </div>
        ))
      )}

      <h2 className="mt-6 font-bold text-xl">
        Total: ${totalPrice.toFixed(2)}
      </h2>
    </div>
  );
}

export default Cart;