function Footer() {
  return (
    <div className="bg-[#6D1F2F] text-white px-10 py-8 mt-10">

      <div className="grid md:grid-cols-3 gap-6">

        <div>
          <h2 className="text-xl font-bold">SkinAura</h2>
          <p className="text-sm mt-2 text-gray-200">
            Your one-stop beauty store for premium skincare brands.
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Quick Links</h3>
          <p>Home</p>
          <p>Shop</p>
          <p>Cart</p>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Contact</h3>
          <p>Email: support@skinaura.com</p>
          <p>Phone: +977 9800000000</p>
        </div>

      </div>

      <p className="text-center text-sm mt-6 text-gray-300">
        © 2026 SkinAura. All rights reserved.
      </p>

    </div>
  );
}

export default Footer;