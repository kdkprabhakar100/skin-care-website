import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { CartContext } from "../context/CartContext";

function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);

  const [product, setProduct] = useState(null);
  const [allProducts, setAllProducts] = useState([]);

  // 🔥 Fetch selected product
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/products/${id}`)
      .then((res) => res.json())
      .then(setProduct);
  }, [id]);

  // 🔥 Fetch all products (for related section)
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/products`)
      .then((res) => res.json())
      .then(setAllProducts);
  }, []);

  if (!product) return <p className="p-10">Loading...</p>;

  // 🔥 Filter related products (same category, exclude current)
  const relatedProducts = allProducts.filter(
    (p) =>
      p.category === product.category &&
      p._id !== product._id
  );

  return (
    <div className="p-10 bg-[#F8F6F4] min-h-screen">

      {/* 🧴 MAIN PRODUCT SECTION */}
      <div className="grid md:grid-cols-2 gap-10">

        {/* IMAGE */}
        <div className="flex justify-center">
          <img
            src={product.image}
            className="w-full max-w-md rounded-xl shadow-lg hover:scale-105 transition"
          />
        </div>

        {/* DETAILS */}
        <div>
          <h1 className="text-3xl font-bold text-[#6D1F2F]">
            {product.name}
          </h1>

          <p className="text-gray-500 mt-2">
            {product.brand}
          </p>

          {/* ⭐ Rating */}
          <p className="mt-2 text-yellow-500">
            ⭐ {product.rating || 4.5} ({product.numReviews || 10} reviews)
          </p>

          {/* 💰 Price */}
          <p className="text-2xl font-semibold mt-4">
            ${product.price}
          </p>

          {/* 📦 Stock */}
          <p className="mt-2 text-sm text-green-600">
            {product.stock > 0 ? "In Stock" : "Out of Stock"}
          </p>

          {/* 🧴 Description */}
          <p className="mt-4 text-gray-600 leading-relaxed">
            {product.description}
          </p>

          {/* 🔥 Urgency */}
          <p className="mt-2 text-red-500 text-sm">
            Only {product.stock || 5} left in stock!
          </p>

          {/* 🛒 BUTTON */}
          <button
              onClick={() => addToCart(product)}
              className="mt-6 bg-[#6D1F2F] text-white px-6 py-3 rounded-lg"
            >
            Add to Cart
          </button>
        </div>
      </div>

      {/* ⭐ REVIEWS SECTION */}
      <div className="mt-16">
        <h2 className="text-xl font-bold mb-4">
          Customer Reviews
        </h2>

        <div className="bg-white p-4 rounded shadow">
          <p>⭐⭐⭐⭐⭐</p>
          <p className="text-gray-600 mt-2">
            "Amazing product! My skin feels great."
          </p>
        </div>
      </div>

      {/* 🔥 RELATED PRODUCTS */}
      <div className="mt-16">
        <h2 className="text-xl font-bold mb-6">
          You may also like
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {relatedProducts.slice(0, 3).map((item) => (
            <div
              key={item._id}
              className="bg-white p-4 rounded-xl shadow"
            >
              <img
                src={item.image}
                className="w-full h-40 object-cover rounded"
              />
              <h3 className="mt-2 font-semibold">
                {item.name}
              </h3>
              <p className="text-sm text-gray-500">
                {item.brand}
              </p>
              <p className="font-bold">
                ${item.price}
              </p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

export default ProductDetails;