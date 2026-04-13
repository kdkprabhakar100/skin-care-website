import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function OrderDetails() {
  const { id } = useParams();
  const [order, setOrder] = useState(null);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/orders/${id}`)
      .then(res => res.json())
      .then(setOrder);
  }, [id]);

  if (!order) return <p>Loading...</p>;

  return (
    <div className="p-10">

      <h1 className="text-2xl font-bold mb-4">
        Order Details
      </h1>

      <p><b>Name:</b> {order.customer?.name}</p>
      <p><b>Address:</b> {order.customer?.address}</p>
      <p><b>Phone:</b> {order.customer?.phone}</p>

      <div className="mt-5">
        {order.items.map((item, i) => (
          <p key={i}>
            {item.name} x {item.quantity}
          </p>
        ))}
      </div>

      <h3 className="mt-5 font-bold">
        Total: ${order.total}
      </h3>

    </div>
  );
}

export default OrderDetails;