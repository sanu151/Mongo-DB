const mongoose = require("mongoose");

// Collection Schema
const dbSchema = mongoose.Schema({
  title: String,
  price: Number,
  desc: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Collection Model
exports.dbModel = mongoose.model("products", dbSchema);

// Connect to Database
exports.connectDB = async () => {
  try {
    mongoose.connect("mongodb://127.0.0.1:27017/productdb");
    console.log(`DB is successfully connected`);
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};
