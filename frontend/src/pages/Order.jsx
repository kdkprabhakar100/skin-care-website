import { useEffect, useState } from "react";

function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/orders`)
      .then((res) => res.json())
      .then(setOrders);
  }, []);

  return (
    <div className="p-10 bg-[#F8F6F4] min-h-screen">

      <h1 className="text-3xl font-bold mb-6">
        Orders
      </h1>

      {orders.map((order) => (
        <div
          key={order._id}
          className="bg-white p-6 mb-4 rounded shadow"
        >
          <h2 className="font-bold">
            {order.customer.name}
          </h2>

          <p>{order.customer.address}</p>
          <p>{order.customer.phone}</p>

          <div className="mt-3">
            {order.items.map((item, i) => (
              <p key={i}>
                {item.name} x {item.qty}
              </p>
            ))}
          </div>

          <h3 className="mt-3 font-bold">
            Total: ${order.total}
          </h3>
        </div>
      ))}

    </div>
  );
}

export default Orders;