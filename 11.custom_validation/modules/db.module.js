const mongoose = require("mongoose");
require("dotenv").config();
const db_url = process.env.DATABASE_URL;

// Database Schema
const dbSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    minlength: [1, "Name must be at least 1 character length"],
    maxlength: [50, "Name must be at most 50 character length"],
    trim: true,
  },
  age: {
    type: Number,
    required: [true, "Age is required"],
    min: [0, "Age cann't be negetive"],
  },
  gender: {
    type: String,
    enum: ["male", "female", "other", "Male", "Female", "Other"],
    required: [true, "Gender is required"],
  },
  phone: {
    type: String,
    required: [true, "Phone number is required"],
    validate: {
      validator: function (v) {
        return /^\+\d{2}\s\d{10}/.test(v);
      },
      message: (props) => `${props.value} is not a valid phone number!`,
    },
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    validate: {
      validator: function (v) {
        return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(v);
      },
      message: (props) => `${props.value} is not a valid email`,
    },
  },
});

// Database model
exports.Users = mongoose.model("users", dbSchema);

// Connect to Database
exports.connectDB = async () => {
  try {
    await mongoose.connect(db_url);
    console.log(`Database connected successfully`);
  } catch (error) {
    console.error(`Database connection failed \n${error.message}`);
    process.exit(1);
  }
};
