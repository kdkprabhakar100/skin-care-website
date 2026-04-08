const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  customer: {
    name: String,
    address: String,
    phone: String,
  },

  items: [
    {
      name: String,
      price: Number,
      quantity: Number,
      productId: String,
    }
  ],

  total: Number,

  status: {
    type: String,
    default: "Pending",
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Order", orderSchema);