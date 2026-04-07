import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { fetchProducts } from "../services/productServices.js";
import { useLocation } from "react-router-dom";

function Shop() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [brand, setBrand] = useState("All");

  const location = useLocation();

  // 🔥 Get category from URL
  const query = new URLSearchParams(location.search);
  const categoryFromURL = query.get("category");

  // 🔄 Fetch products
  useEffect(() => {
    fetchProducts().then(setProducts);
  }, []);

  // 🔄 Sync category with URL
  useEffect(() => {
    if (categoryFromURL) {
      setCategory(categoryFromURL);
    }
  }, [categoryFromURL]);

  // 🔥 Filtering logic
  const filteredProducts = products.filter((p) => {
    return (
      (category === "All" ||
  p.category?.toLowerCase() === category.toLowerCase()) &&
      (brand === "All" || p.brand?.toLowerCase() === brand.toLowerCase()) &&
      p.name.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <div className="p-10 bg-[#F8F6F4] min-h-screen">

      <h1 className="text-3xl font-bold text-[#6D1F2F] mb-6">
        Shop All Products
      </h1>

      {/* 🔍 SEARCH */}
      <input
        type="text"
        placeholder="Search products..."
        className="border p-2 rounded w-full mb-6"
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* 🎯 FILTERS */}
      <div className="flex gap-4 mb-6">

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="All">All Categories</option>
          <option value="Moisturizer">Moisturizer</option>
          <option value="Serum">Serum</option>
          <option value="Sunscreen">Sunscreen</option>
        </select>

        <select
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
        >
          <option value="All">All Brands</option>
          <option value="CeraVe">CeraVe</option>
          <option value="The Ordinary">The Ordinary</option>
        </select>

      </div>

      {/* 🛍️ PRODUCTS */}
      <div className="grid md:grid-cols-3 gap-6">
        {filteredProducts.map((item) => (
          <ProductCard key={item._id} product={item} />
        ))}
      </div>

    </div>
  );
}

export default Shop;