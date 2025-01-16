const mongoose = require("mongoose");

// Create Product Schema
const productSchema = mongoose.Schema({
  title: String,
  price: Number,
  descripton: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Create Product Model
exports.Product = mongoose.model("products", productSchema);

// Connect Database using mongoose
exports.connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/productdb");
    console.log("db is connected successfully");
  } catch (error) {
    console.log("db not connected");
    console.log(error);
    process.exit(1);
  }
};
