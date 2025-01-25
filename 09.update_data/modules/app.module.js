const mongoose = require("mongoose");
require("dotenv").config();

// DB Schema
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

// DB Model
exports.Product = mongoose.model("product", dbSchema);

// Connect to MongoDB
exports.connectDB = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL);
    console.log("Database Connected");
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};
