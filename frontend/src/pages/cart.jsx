import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

function Cart() {
  const {
    cart,
    addToCart,
    decreaseQty,
    removeFromCart,
    totalPrice,
  } = useContext(CartContext);

  const navigate = useNavigate(); 

  return (
    <div className="p-10 bg-[#F8F6F4] min-h-screen">

      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {/* 🛍️ CART ITEMS */}
          {cart.map((item) => (
            <div
              key={item._id}
              className="flex justify-between items-center bg-white p-5 rounded-lg mb-4 shadow"
            >

              {/* PRODUCT INFO */}
              <div>
                <h2 className="font-semibold text-lg">{item.name}</h2>
                <p className="text-gray-600">${item.price}</p>
              </div>

              {/* QUANTITY CONTROL */}
              <div className="flex items-center gap-3">
                <button
                  onClick={() => decreaseQty(item._id)}
                  className="px-2 text-lg"
                >
                  -
                </button>

                <span className="font-semibold">{item.qty}</span>

                <button
                  onClick={() => addToCart(item)}
                  className="px-2 text-lg"
                >
                  +
                </button>
              </div>

              {/* REMOVE */}
              <button
                onClick={() => removeFromCart(item._id)}
                className="text-red-500 hover:underline"
              >
                Remove
              </button>

            </div>
          ))}

          {/* 💰 TOTAL + CHECKOUT */}
          <div className="mt-10 flex flex-col items-end gap-4">

            <h2 className="text-xl font-bold">
              Total: ${totalPrice.toFixed(2)}
            </h2>

            <button
              onClick={() => navigate("/checkout")}
              className="bg-[#6D1F2F] text-white px-8 py-3 rounded-lg hover:scale-105 transition"
            >
              Proceed to Checkout
            </button>

          </div>
        </>
      )}

    </div>
  );
}

export default Cart;