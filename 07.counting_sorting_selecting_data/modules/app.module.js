const mongoose = require("mongoose");

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

exports.Products = mongoose.model("products", dbSchema);

exports.connectDb = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/productdb1");
    console.log(`Database connection successful`);
  } catch (error) {
    console.log(`Database connection error: ${error}`);
    process.exit(1);
  }
};
