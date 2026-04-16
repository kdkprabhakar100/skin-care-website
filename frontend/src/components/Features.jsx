function Features() {
  return (
    <div className="py-20 px-10 bg-white text-center">

      <h2 className="text-3xl font-bold mb-12 text-[#6D1F2F]">
        Why AuraSkin?
      </h2>

      <div className="grid md:grid-cols-3 gap-10">

        {/* FEATURE 1 */}
        <div className="bg-[#F8F6F4] p-6 rounded-xl hover:shadow-md transition">
          <p className="text-3xl">🛍️</p>
          <h3 className="text-lg font-semibold mt-3">
            Smart Shopping Experience
          </h3>
          <p className="text-gray-500 text-sm mt-2">
            Browse products, filter categories, and manage your cart with ease.
          </p>
        </div>

        {/* FEATURE 2 */}
        <div className="bg-[#F8F6F4] p-6 rounded-xl hover:shadow-md transition">
          <p className="text-3xl">⚡</p>
          <h3 className="text-lg font-semibold mt-3">
            Seamless Checkout
          </h3>
          <p className="text-gray-500 text-sm mt-2">
            Fast and smooth checkout process with real-time order tracking.
          </p>
        </div>

        {/* FEATURE 3 */}
        <div className="bg-[#F8F6F4] p-6 rounded-xl hover:shadow-md transition">
          <p className="text-3xl">📊</p>
          <h3 className="text-lg font-semibold mt-3">
            Admin Analytics Dashboard
          </h3>
          <p className="text-gray-500 text-sm mt-2">
            Monitor revenue, manage orders, and track business performance.
          </p>
        </div>

        {/* FEATURE 4 */}
        <div className="bg-[#F8F6F4] p-6 rounded-xl hover:shadow-md transition">
          <p className="text-3xl">🔍</p>
          <h3 className="text-lg font-semibold mt-3">
            Advanced Order Management
          </h3>
          <p className="text-gray-500 text-sm mt-2">
            Search, filter, and update order status with ease.
          </p>
        </div>

        {/* FEATURE 5 */}
        <div className="bg-[#F8F6F4] p-6 rounded-xl hover:shadow-md transition">
          <p className="text-3xl">🔐</p>
          <h3 className="text-lg font-semibold mt-3">
            Secure Admin Access
          </h3>
          <p className="text-gray-500 text-sm mt-2">
            Protected admin routes ensure safe and controlled access.
          </p>
        </div>

        {/* FEATURE 6 */}
        <div className="bg-[#F8F6F4] p-6 rounded-xl hover:shadow-md transition">
          <p className="text-3xl">🚀</p>
          <h3 className="text-lg font-semibold mt-3">
            Scalable Architecture
          </h3>
          <p className="text-gray-500 text-sm mt-2">
            Built with MERN stack for performance, scalability, and future growth.
          </p>
        </div>

      </div>

    </div>
  );
}

export default Features;