import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      // ❌ If login fails
      if (!res.ok) {
        setError(data.message || "Login failed");
        return;
      }

      // 🔐 Decode token
      const user = JSON.parse(atob(data.token.split(".")[1]));

      // ❌ Not admin
      if (user.role !== "admin") {
        setError("Access denied. Admin only.");
        return;
      }

      // ✅ Save token
      localStorage.setItem("token", data.token);

      // ✅ Redirect properly
      navigate("/admin/dashboard");

    } catch (err) {
      setError("Server error. Try again.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">

      <div className="bg-white p-8 rounded-xl shadow-md w-80">
        <h1 className="text-2xl font-bold mb-6 text-center">
          🔐 Admin Login
        </h1>

        {/* ERROR */}
        {error && (
          <p className="text-red-500 text-sm mb-3 text-center">
            {error}
          </p>
        )}

        <input
          type="email"
          placeholder="Email"
          className="w-full mb-3 p-2 border rounded"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mb-4 p-2 border rounded"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleLogin}
          className="w-full bg-black text-white py-2 rounded hover:bg-gray-800"
        >
          Login
        </button>
      </div>

    </div>
  );
}

export default AdminLogin;