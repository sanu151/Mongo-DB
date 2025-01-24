const mongoose = require("mongoose");

// Database Schema
const dbSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Database Model
exports.Products = mongoose.model("products", dbSchema);

// Connect to MongoDB
exports.connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log(`Database connected successfully`);
  } catch (error) {
    console.log(`Database connection failed: ${error.message}`);
    process.exit(1);
  }
};
