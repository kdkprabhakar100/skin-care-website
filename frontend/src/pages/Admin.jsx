import { useState } from "react";

function Admin() {
  const [form, setForm] = useState({
    name: "",
    brand: "",
    category: "",
    price: "",
    stock: "",
    image: "",
    description: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch(`${import.meta.env.VITE_API_URL}/api/products`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    alert("Product Added ✅");
  };

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-6">Add Product</h1>

      <form onSubmit={handleSubmit} className="space-y-4">

        <input name="name" placeholder="Name" onChange={handleChange} className="border p-2 w-full" />
        <input name="brand" placeholder="Brand" onChange={handleChange} className="border p-2 w-full" />
        <input name="category" placeholder="Category" onChange={handleChange} className="border p-2 w-full" />
        <input name="price" placeholder="Price" onChange={handleChange} className="border p-2 w-full" />
        <input name="stock" placeholder="Stock" onChange={handleChange} className="border p-2 w-full" />
        <input name="image" placeholder="Image URL" onChange={handleChange} className="border p-2 w-full" />
        <textarea name="description" placeholder="Description" onChange={handleChange} className="border p-2 w-full" />

        <button className="bg-[#6D1F2F] text-white px-4 py-2 rounded">
          Add Product
        </button>

      </form>
    </div>
  );
}

export default Admin;