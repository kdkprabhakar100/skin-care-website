import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";


function Checkout() {
  const { cart, totalPrice, clearCart } = useContext(CartContext);

  const [form, setForm] = useState({
    name: "",
    address: "",
    phone: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };


const navigate = useNavigate();
console.log("SENDING ORDER:", cart);
const handleOrder = async () => {
  try {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/api/orders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    body: JSON.stringify({
      customer: {
        name: form.name,
        address: form.address,
        phone: form.phone,
      },

      items: cart.map(item => ({
        name: item.name,
        price: item.price,
        quantity: item.qty || 1,
      })),

      total: totalPrice,
    })
    });

    const data = await res.json();

    console.log("RESPONSE:", data);

    if (!res.ok) throw new Error(data.message);

    clearCart();
    navigate("/success");

  } catch (error) {
    console.error("FULL ERROR:", error);
    alert("Order failed ❌");
  }
};


  return (
    <div className="p-10 bg-[#F8F6F4] min-h-screen">

      <h1 className="text-3xl font-bold mb-6">
        Checkout
      </h1>

      <div className="grid md:grid-cols-2 gap-10">

        {/* 🧾 FORM */}
        <div className="space-y-4">
          <input
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
            className="border p-2 w-full rounded"
          />

          <input
            name="address"
            placeholder="Address"
            onChange={handleChange}
            className="border p-2 w-full rounded"
          />

          <input
            name="phone"
            placeholder="Phone"
            onChange={handleChange}
            className="border p-2 w-full rounded"
          />
        </div>

        {/* 🛒 ORDER SUMMARY */}
        <div className="bg-white p-6 rounded shadow">

          <h2 className="text-xl font-bold mb-4">
            Order Summary
          </h2>

          {cart.map((item) => (
            <div key={item._id} className="flex justify-between mb-2">
              <p>{item.name} x {item.qty}</p>
              <p>${item.price * item.qty}</p>
            </div>
          ))}

          <hr className="my-4" />

          <h3 className="font-bold text-lg">
            Total: ${totalPrice.toFixed(2)}
          </h3>

          <button
            onClick={handleOrder}
            className="mt-6 w-full bg-[#6D1F2F] text-white py-3 rounded-lg"
          >
            Place Order
          </button>
        </div>

      </div>
    </div>
  );
}

export default Checkout;