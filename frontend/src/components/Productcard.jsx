function ProductCard({ product }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition">

      <img
        src={product.image}
        className="w-full h-48 object-cover rounded"
      />

      <h3 className="mt-3 font-semibold">{product.name}</h3>
      <p className="text-sm text-gray-500">{product.brand}</p>

      <div className="flex justify-between items-center mt-2">
        <p className="font-bold">${product.price}</p>

        <button className="bg-[#6D1F2F] text-white px-3 py-1 rounded text-sm">
          Add
        </button>
      </div>

    </div>
  );
}

export default ProductCard;