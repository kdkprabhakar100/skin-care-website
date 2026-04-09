const express = require("express");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const router = express.Router();
console.log("Auth routes loaded");

// 🔐 LOGIN
router.post("/login", async (req, res) => {
    console.log("BODY:", req.body);
  try {
    const { email, password } = req.body;

    // 1️⃣ Check user exists
    const user = await User.findOne({ email });
    console.log("USER:", user); // 👈 ADD THIS

    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    // 2️⃣ Check password (plain for now)
    if (user.password !== password) {
      return res.status(400).json({ message: "Invalid password" });
    }

    // 3️⃣ Generate token (IMPORTANT: include role)
    const token = jwt.sign(
      {
        id: user._id,
        role: user.role
      },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    // 4️⃣ Send response
    res.json({
      token,
      user: {
        email: user.email,
        role: user.role
      }
    });

  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});


// 🧾 REGISTER (for normal users)
router.post("/register", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if already exists
    const existing = await User.findOne({ email });

    if (existing) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Create user (default role = user)
    const user = await User.create({
      email,
      password,
      role: "user"
    });

    res.json({
      message: "User registered successfully",
      user
    });

  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;