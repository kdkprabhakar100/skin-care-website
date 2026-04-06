import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-10 py-20 bg-[#F8F6F4]">

      {/* LEFT CONTENT */}
      <div className="max-w-xl">

        <h1 className="text-5xl md:text-6xl font-bold text-[#6D1F2F] leading-tight">
          Glow Naturally ✨
        </h1>

        <p className="mt-5 text-gray-600 text-lg">
          Hydrate, repair, and brighten your skin in just 7 days.
        </p>

        <div className="mt-8 flex gap-4">
          <button
            onClick={() => navigate("/shop")}
            className="bg-[#6D1F2F] text-white px-8 py-3 rounded-lg hover:scale-105 transition"
          >
            Shop Now
          </button>

          <button className="border border-[#6D1F2F] text-[#6D1F2F] px-8 py-3 rounded-lg hover:bg-[#6D1F2F] hover:text-white transition">
            Explore
          </button>
        </div>

      </div>

      {/* RIGHT IMAGE */}
      <div className="relative mt-10 md:mt-0">

        <img
          src="https://images.unsplash.com/photo-1571779719707-0f24f62ab4fc?q=80&w=1121&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Skincare product"
          className="w-96 rounded-2xl shadow-xl"
        />

        {/* Glow effect */}
        <div className="absolute -top-6 -right-6 w-40 h-40 bg-[#6D1F2F]/20 rounded-full blur-3xl"></div>

      </div>

    </div>
  );
}

export default Hero;