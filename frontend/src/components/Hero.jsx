import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-between px-10 md:px-20 bg-gradient-to-br from-[#F8F6F4] to-[#F1ECE8]">

      {/* LEFT */}
      <div className="max-w-xl">

        <p className="text-sm text-gray-500 mb-2">
          ✨ Trusted by 10,000+ skincare lovers
        </p>

        <h1 className="text-5xl md:text-6xl font-bold text-[#6D1F2F] leading-tight">
          Your Skin,<br />But Better.
        </h1>

        <p className="mt-6 text-gray-600 text-lg">
          Discover dermatologist-approved skincare products designed
          to hydrate, repair, and glow — naturally.
        </p>

        <div className="mt-8 flex gap-4">

          <button
            onClick={() => navigate("/shop")}
            className="bg-[#6D1F2F] text-white px-8 py-3 rounded-xl shadow-lg hover:scale-105 transition"
          >
            Shop Now
          </button>

          <button
            className="border border-[#6D1F2F] text-[#6D1F2F] px-8 py-3 rounded-xl hover:bg-[#6D1F2F] hover:text-white transition"
          >
            Learn More
          </button>

        </div>

      </div>

      {/* RIGHT IMAGE */}
      <div className="mt-10 md:mt-0">
        <img
          src="https://images.unsplash.com/photo-1596755389378-c31d21fd1273"
          className="w-[400px] md:w-[500px] rounded-2xl shadow-2xl"
        />
      </div>

    </div>
  );
}

export default Hero;