import { useEffect, useState } from "react";

function AdminOrders() {
  const [orders, setOrders] = useState([]);

  // 🔄 Fetch orders
  const fetchOrders = async () => {
    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/api/orders`
      );
      const data = await res.json();
      setOrders(data);
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  // 🔄 Update status
  const updateStatus = async (id, status) => {
    try {
      await fetch(
        `${import.meta.env.VITE_API_URL}/api/orders/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ status }),
        }
      );

      // Refresh orders without reload
      fetchOrders();

    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  // 🎨 Status color
  const getStatusColor = (status) => {
    if (status === "Pending") return "text-yellow-500";
    if (status === "Shipped") return "text-blue-500";
    if (status === "Delivered") return "text-green-500";
    return "text-gray-500";
  };

  return (
    <div className="p-10 bg-[#F8F6F4] min-h-screen">

      <h1 className="text-3xl font-bold mb-6">
        Admin Dashboard - Orders
      </h1>

      {orders.length === 0 ? (
        <p>No orders yet ❌</p>
      ) : (
        <div className="space-y-6">

          {orders.map((order) => (
            <div
              key={order._id}
              className="bg-white p-6 rounded-xl shadow"
            >

              {/* 👤 Customer */}
                <div className="mb-3">
                  <h2 className="font-bold text-lg">
                    {order.name}
                  </h2>
                  <p>{order.address}</p>
                  <p>{order.phone}</p>
                </div>

              {/* 🛒 Items */}
              <div className="border-t pt-3">
                {order.items?.map((item, i) => (
                  <div
                    key={i}
                    className="flex justify-between text-sm"
                  >
                    <p>
                      {item.name} x {item.qty}
                    </p>
                    <p>${item.price * item.qty}</p>
                  </div>
                ))}
              </div>

              {/* 💰 Total */}
              <div className="border-t mt-3 pt-3 flex justify-between font-bold">
                <span>Total</span>
                <span>${order.total}</span>
              </div>

              {/* 🟢 STATUS */}
              <div className="mt-3">
                <p className={`font-semibold ${getStatusColor(order.status)}`}>
                  Status: {order.status}
                </p>
              </div>

              {/* 🔘 ACTION BUTTONS */}
              <div className="mt-3 flex gap-2 flex-wrap">

                <button
                  onClick={() => updateStatus(order._id, "Pending")}
                  className="px-3 py-1 bg-gray-300 rounded hover:opacity-80"
                >
                  Pending
                </button>

                <button
                  onClick={() => updateStatus(order._id, "Shipped")}
                  className="px-3 py-1 bg-blue-500 text-white rounded hover:opacity-80"
                >
                  Shipped
                </button>

                <button
                  onClick={() => updateStatus(order._id, "Delivered")}
                  className="px-3 py-1 bg-green-500 text-white rounded hover:opacity-80"
                >
                  Delivered
                </button>

              </div>

              {/* 📅 Date */}
              <p className="text-xs text-gray-500 mt-3">
                {new Date(order.createdAt).toLocaleString()}
              </p>

            </div>
          ))}

        </div>
      )}

    </div>
  );
}

export default AdminOrders;