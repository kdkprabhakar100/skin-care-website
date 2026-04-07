import { useNavigate } from "react-router-dom";

function Categories() {
  const navigate = useNavigate();

  const categories = [
    {
      name: "Moisturizer",
      image: "https://plus.unsplash.com/premium_photo-1716629172328-68984cde63b9?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Serum",
      image: "https://images.unsplash.com/photo-1620916297397-a4a5402a3c6c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Sunscreen",
      image: "https://plus.unsplash.com/premium_photo-1663100784433-ac60688b5fe3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Cleanser",
      image: "https://plus.unsplash.com/premium_photo-1706800175680-27c871f15fcc?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <div className="px-10 py-16 bg-[#F8F6F4]">

      <h2 className="text-3xl font-bold mb-8 text-[#6D1F2F]">
        Shop by Category
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

        {categories.map((cat, index) => (
          <div
            key={index}
            onClick={() => navigate(`/shop?category=${cat.name}`)}
            className="cursor-pointer group"
          >
            <img
              src={cat.image}
              className="w-full h-60 object-cover rounded-xl group-hover:scale-105 transition"
            />
            <p className="mt-2 text-center font-semibold">
              {cat.name}
            </p>
          </div>
        ))}

      </div>

    </div>
  );
}

export default Categories;