import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminDashboard() {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();
  <button
  onClick={() => {
    localStorage.removeItem("isAdmin");
    navigate("/admin/login");
  }}
  className="bg-red-500 text-white px-4 py-2 rounded mb-4"
>
  Logout
</button>

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/orders`)
      .then((res) => res.json())
      .then((data) => {
        console.log("Orders:", data);
        setOrders(data);
      });
  }, []);

  // 💰 TOTAL REVENUE
  const totalRevenue = orders.reduce(
    (sum, order) => sum + (order.total || 0),
    0
  );

  // 📦 TOTAL ORDERS
  const totalOrders = orders.length;

  // 📊 STATUS COUNTS
  const pending = orders.filter((o) => o.status === "Pending").length;
  const shipped = orders.filter((o) => o.status === "Shipped").length;
  const delivered = orders.filter((o) => o.status === "Delivered").length;

  // 🔥 BEST SELLER (FIXED)
  const productMap = {};

  orders.forEach((order) => {
    order.items?.forEach((item) => {
      productMap[item.name] =
        (productMap[item.name] || 0) + (item.quantity || 1);
    });
  });

  const bestSeller =
    Object.keys(productMap).length > 0
      ? Object.keys(productMap).reduce((a, b) =>
          productMap[a] > productMap[b] ? a : b
        )
      : "N/A";

  return (
    <div className="p-10 bg-[#F8F6F4] min-h-screen">

      <h1 className="text-3xl font-bold mb-8">
        📊 Admin Analytics Dashboard
      </h1>

      {/* 🔥 STATS */}
      <div className="grid md:grid-cols-5 gap-6 mb-10">

        <div className="bg-white p-6 rounded-xl shadow text-center">
          <h2 className="text-gray-500">Revenue</h2>
          <p className="text-2xl font-bold text-green-600">
            ${totalRevenue}
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow text-center">
          <h2 className="text-gray-500">Orders</h2>
          <p className="text-2xl font-bold">{totalOrders}</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow text-center">
          <h2 className="text-gray-500">Pending</h2>
          <p className="text-2xl font-bold text-yellow-500">{pending}</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow text-center">
          <h2 className="text-gray-500">Delivered</h2>
          <p className="text-2xl font-bold text-green-500">{delivered}</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow text-center">
          <h2 className="text-gray-500">Best Seller</h2>
          <p className="text-lg font-bold">{bestSeller}</p>
        </div>

      </div>

      {/* 🧾 ORDERS */}
      <div className="bg-white p-6 rounded-xl shadow">
        <h2 className="text-xl font-bold mb-6">
          🧾 Recent Orders
        </h2>

        {orders.length === 0 ? (
          <p>No orders yet ❌</p>
        ) : (
          orders.slice(0, 5).map((order) => (
            <div
              key={order._id}
              className="border rounded-lg p-4 mb-4 hover:shadow-md transition"
            >

              {/* 👤 CUSTOMER */}
              <div className="flex justify-between items-center mb-2">
                <div>
                  <h3 className="font-bold text-lg">
                    {order.customer?.name}
                  </h3>

                  <p className="text-sm text-gray-500">
                    {order.customer?.phone}
                  </p>

                  <p className="text-sm text-gray-500">
                    {order.customer?.address}
                  </p>
                </div>

                {/* 💰 TOTAL */}
                <div className="text-right">
                  <p className="text-lg font-bold text-green-600">
                    ${order.total}
                  </p>

                  <p className="text-xs text-gray-400">
                    {order.createdAt
                      ? new Date(order.createdAt).toLocaleDateString()
                      : ""}
                  </p>
                </div>
              </div>

              {/* 🛒 ITEMS */}
              <div className="border-t pt-3 mt-3 space-y-1">
                {order.items?.map((item, i) => (
                  <div key={i} className="flex justify-between text-sm">
                    <p>
                      {item.name} x {item.quantity || 1}
                    </p>
                    <p className="font-medium">
                      ${item.price * (item.quantity || 1)}
                    </p>
                  </div>
                ))}
              </div>

              {/* 🟢 STATUS */}
              <div className="mt-3 flex justify-between items-center">
                <span
                  className={`px-3 py-1 text-sm rounded-full font-semibold ${
                    order.status === "Pending"
                      ? "bg-yellow-100 text-yellow-600"
                      : order.status === "Shipped"
                      ? "bg-blue-100 text-blue-600"
                      : "bg-green-100 text-green-600"
                  }`}
                >
                  {order.status || "Pending"}
                </span>
              </div>

            </div>
          ))
        )}
      </div>

    </div>
  );
}

export default AdminDashboard; 