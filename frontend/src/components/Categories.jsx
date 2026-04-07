import { useNavigate } from "react-router-dom";

function Categories() {
  const navigate = useNavigate();

  const categories = [
    {
      name: "Moisturizer",
      image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348",
    },
    {
      name: "Serum",
      image: "https://images.unsplash.com/photo-1600180758890-6b94519a8ba6",
    },
    {
      name: "Sunscreen",
      image: "https://images.unsplash.com/photo-1585238342024-78d387f4a707",
    },
    {
      name: "Cleanser",
      image: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc",
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
              className="w-full h-40 object-cover rounded-xl group-hover:scale-105 transition"
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