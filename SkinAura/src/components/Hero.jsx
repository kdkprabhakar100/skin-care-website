function Hero() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-10 bg-[#F8F6F4]">

      <div>
        <h1 className="text-4xl font-bold text-[#6D1F2F]">
          Glow Naturally ✨
        </h1>

        <p className="mt-4 text-gray-600">
          Hydrate, repair, and brighten your skin in 7 days
        </p>

        <button className="mt-6 bg-[#6D1F2F] text-white px-6 py-3 rounded-lg hover:scale-105 transition">
          Shop Now
        </button>
      </div>

      <img
        src="https://images.unsplash.com/photo-1600180758890-6b94519a8ba5"
        className="w-80 mt-6 md:mt-0 rounded-xl shadow-lg"
      />

    </div>
  );
}

export default Hero;