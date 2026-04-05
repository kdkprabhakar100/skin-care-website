import { useParams } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);

  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    return <h1 className="p-10">Product not found</h1>;
  }

  return (
    <div className="p-10 flex flex-col md:flex-row gap-10">

      <img
        src={product.image}
        className="w-80 rounded-xl shadow-lg"
      />

      <div>
        <h1 className="text-3xl font-bold text-[#6D1F2F]">
          {product.name}
        </h1>

        <p className="text-gray-500 mt-2">{product.brand}</p>

        <p className="text-xl font-semibold mt-4">
          ${product.price}
        </p>

        <p className="mt-4 text-gray-600">
          This cream helps hydrate, repair, and brighten your skin.
        </p>

        <button
          onClick={() => addToCart(product)}
          className="mt-6 bg-[#6D1F2F] text-white px-6 py-3 rounded-lg hover:scale-105 transition"
        >
          Add to Cart
        </button>
      </div>

    </div>
  );
}

export default ProductDetails;