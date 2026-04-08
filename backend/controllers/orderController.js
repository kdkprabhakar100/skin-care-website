const Order = require("../models/Order");

const createOrder = async (req, res) => {
  try {
    const { customer, items, total } = req.body;

    console.log("Incoming Order:", req.body); // 🔥 debug

    if (!customer || !items || !total) {
      return res.status(400).json({ message: "Missing fields" });
    }

    const order = new Order({
      customer,
      items,
      total,
    });

    const savedOrder = await order.save();

    res.status(201).json(savedOrder);

  } catch (error) {
    console.error("Order error:", error);
    res.status(500).json({ message: "Error creating order" });
  }
};


// ✅ GET ALL ORDERS (for admin later)
const getOrders = async (req, res) => {
  const orders = await Order.find();
  res.json(orders);
};


// ✅ UPDATE STATUS
const updateOrderStatus = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    order.status = req.body.status;

    const updated = await order.save();

    res.json(updated);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createOrder, getOrders, updateOrderStatus };