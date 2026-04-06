const Order = require("../models/Order");

// ✅ CREATE ORDER
const createOrder = async (req, res) => {
  try {
    console.log("BODY:", req.body); // 🔥 DEBUG

    const order = await Order.create(req.body);

    res.status(201).json(order);

  } catch (error) {
    console.error("ORDER ERROR:", error); // 🔥 SEE REAL ERROR

    res.status(500).json({
      message: error.message,
    });
  }
};

// ✅ GET ALL ORDERS (for admin later)
const getOrders = async (req, res) => {
  const orders = await Order.find();
  res.json(orders);
};

module.exports = { createOrder, getOrders };