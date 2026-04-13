import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminOrders() {
  const [orders, setOrders] = useState([]);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const navigate = useNavigate();

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

      fetchOrders();
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  // 🔍 FILTER LOGIC
  const filteredOrders = orders.filter((order) => {
    const matchesSearch =
      order.customer?.name
        ?.toLowerCase()
        .includes(search.toLowerCase());

    const matchesStatus =
      statusFilter === "All" || order.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  // 🎨 STATUS COLOR
  const getStatusColor = (status) => {
    if (status === "Pending") return "text-yellow-500";
    if (status === "Shipped") return "text-blue-500";
    if (status === "Delivered") return "text-green-500";
    return "text-gray-500";
  };

  return (
    <div className="p-10 bg-[#F8F6F4] min-h-screen">

      {/* 🔍 FILTER UI */}
      <div className="flex gap-4 mb-6 flex-wrap">

        <input
          type="text"
          value={search}  // ✅ controlled input
          placeholder="Search by customer..."
          className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#6D1F2F]"
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          value={statusFilter}  // ✅ controlled select
          className="border p-2 rounded"
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="All">All Status</option>
          <option value="Pending">Pending</option>
          <option value="Shipped">Shipped</option>
          <option value="Delivered">Delivered</option>
        </select>

        {/* 🔥 CLEAR FILTER BUTTON */}
        <button
          onClick={() => {
            setSearch("");
            setStatusFilter("All");
          }}
          className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition"
        >
          Clear Filters
        </button>

      </div>

      <h1 className="text-3xl font-bold mb-6">
        Admin Dashboard - Orders
      </h1>

      {/* ❌ NO MATCH MESSAGE */}
      {filteredOrders.length === 0 ? (
        <div className="text-center mt-20">
          <p className="text-3xl">😕</p>
          <p className="text-gray-500 mt-2">
            No matching customers found
          </p>
        </div>
      ) : (
        <div className="space-y-6">

          {filteredOrders.map((order) => (
            <div
              key={order._id}
              onClick={() => navigate(`/admin/orders/${order._id}`)} // 🔥 CLICKABLE
              className="bg-white p-6 rounded-xl shadow hover:shadow-md transition cursor-pointer"
            >

              {/* 👤 CUSTOMER */}
              <div className="mb-3">
                <h2 className="font-bold text-lg">
                  {order.customer?.name}
                </h2>

                <p>{order.customer?.address}</p>
                <p>{order.customer?.phone}</p>
              </div>

              {/* 🛒 ITEMS */}
              <div className="border-t pt-3">
                {order.items?.map((item, i) => (
                  <div key={i} className="flex justify-between text-sm">
                    <p>
                      {item.name} x {item.quantity || 1}
                    </p>
                    <p>
                      ${item.price * (item.quantity || 1)}
                    </p>
                  </div>
                ))}
              </div>

              {/* 💰 TOTAL */}
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

            </div>
          ))}

        </div>
      )}

    </div>
  );
}

export default AdminOrders;