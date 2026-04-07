import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

function FeaturedProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/products`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.slice(0, 4));
      });
  }, []);

  return (
    <div className="px-10 py-16 bg-white">
      <h2 className="text-3xl font-bold mb-8 text-[#6D1F2F]">
        Featured Products ✨
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default FeaturedProducts;