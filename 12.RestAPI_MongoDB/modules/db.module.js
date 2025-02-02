const mongoose = require("mongoose");
const { isEmail } = require("validator");

const email = "test@example.com";

const dbSchema = {
  name: {
    type: String,
    required: [true, "Please enter your name"],
  },
  age: {
    type: Number,
    required: [true, "Please specify your age"],
  },
  gender: {
    type: String,
    enum: ["male", "female", "other", "prefer not to say"], // Allowed values
    required: [true, "Please specify a gender"],
  },
  phone: {
    type: String,
    required: [true, "Please enter a phone number"],
    validate: {
      validator: function (v) {
        // Simple regex for phone number validation (adjust as needed)
        return /^\+?(\d.*){3,}$/.test(v);
      },
      message: (props) => `${props.value} is not a valid phone number!`,
    },
  },
  email: {
    type: String,
    required: [true, "Please enter an email"],
    unique: true,
    lowercase: true,
    validate: [isEmail, "Please enter a valid email"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
};

const Users = mongoose.model("users", dbSchema);

module.exports = Users;
