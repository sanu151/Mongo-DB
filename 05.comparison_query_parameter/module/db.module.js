const mongoose = require("mongoose");

const dbSchema = mongoose.Schema({
  title: String,
  price: Number,
  desc: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

exports.dbModel = mongoose.model("products", dbSchema);

exports.createDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/productdb");
    console.log(`db is connected`);
  } catch (error) {
    console.log(`db not connected`);
    console.log(error.message);
    process.exit(1);
  }
};
