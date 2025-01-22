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

exports.dbModule = mongoose.model("product", dbSchema);

exports.connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/productdb1");
    console.log(`Connected to the database`);
  } catch (error) {
    console.log("Error connecting to the database");
    console.log(error.message);
    process.exit(1);
  }
};
