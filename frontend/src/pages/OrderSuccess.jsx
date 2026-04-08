import { useNavigate } from "react-router-dom";

function OrderSuccess() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#F8F6F4] text-center">

      <h1 className="text-4xl font-bold text-green-600 mb-4">
        🎉 Order Placed Successfully!
      </h1>

      <p className="text-gray-600 mb-6">
        Thank you for your purchase. Your order is being processed.
      </p>

      <div className="flex gap-4">
        <button
          onClick={() => navigate("/shop")}
          className="bg-[#6D1F2F] text-white px-6 py-3 rounded-lg"
        >
          Continue Shopping
        </button>

        <button
          onClick={() => navigate("/")}
          className="border px-6 py-3 rounded-lg"
        >
          Go Home
        </button>
      </div>

    </div>
  );
}

export default OrderSuccess;