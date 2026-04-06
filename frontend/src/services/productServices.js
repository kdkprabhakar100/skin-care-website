const API = import.meta.env.VITE_API_URL;

// 🔥 GET all products
export const fetchProducts = async () => {
  const res = await fetch(`${API}/api/products`);
  return res.json();
};

// 🔥 GET single product
export const fetchProductById = async (id) => {
  const res = await fetch(`${API}/api/products/${id}`);
  return res.json();
};