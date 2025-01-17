const mongoose = require("mongoose");

// nongoDB schema
const productSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
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

//mongoDB model
exports.products = mongoose.model("products", productSchema);

// mongoDB database connect
exports.connectDb = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/productdb");
    console.log("database connected successfully");
  } catch (error) {
    console.log("database not connected");
    console.log(error);
    process.exit(1);
  }
};
