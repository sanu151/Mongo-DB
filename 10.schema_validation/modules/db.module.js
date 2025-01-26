const mongoose = require("mongoose");
require("dotenv").config();
const db_url = process.env.DATABASE_URL;

// Database Schema
const dbSchema = mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title is required"],
    minlength: [3, "Title must be at least 3 characters long"],
    maxlength: [50, "Title must be at most 50 characters long"],
    uppercase: true,
    trim: true,
  },
  price: {
    type: Number,
    required: [true, "Price is required"],
    min: [0, "Price cannot be negative"],
  },
  rating: {
    type: Number,
    required: [true, "Rating is required"],
    min: [1, "Minimum rating is 1"],
    max: [5, "Maximum rating is 5"],
  },
  desc: {
    type: String,
    required: [true, "Description is required"],
    minlength: [10, "Description must be at least 10 characters long"],
    maxlength: [100, "Description Cannot be more than 100 characters long"],
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Database model
exports.Products = mongoose.model("products", dbSchema);

// Connect to the database
exports.connectDB = async () => {
  try {
    await mongoose.connect(db_url);
    console.log(`Database is connected`);
  } catch (error) {
    console.error(`Error connecting to the database. \n${error}`);
    process.exit(1);
  }
};
