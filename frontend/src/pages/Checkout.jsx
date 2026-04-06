import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";

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

    const handleOrder = async () => {
    if (!form.name || !form.address || !form.phone) {
        alert("Please fill all fields ❌");
        return;
    }

    if (cart.length === 0) {
        alert("Cart is empty ❌");
        return;
    }

    const order = {
        customer: form,
        items: cart.map((item) => ({
        name: item.name,
        price: item.price,
        qty: item.qty,
        productId: item._id,
        })),
        total: totalPrice,
    };

    try {
        const res = await fetch(
        `${import.meta.env.VITE_API_URL}/api/orders`,
        {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify(order),
        }
        );

        const data = await res.json();

        if (!res.ok) {
        throw new Error(data.message || "Order failed");
        }

        console.log("Saved order:", data); // ✅ use data

        alert("Order placed successfully ✅");
        clearCart();

    } catch (error) {
        console.error("Order error:", error);
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