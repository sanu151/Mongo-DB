const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = 3000;

const connnectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/usersDB");
    console.log(`DB is Connected Successfully`);
  } catch (error) {
    console.log(`DB not Connected`);
    console.log(error);
    process.exit(1);
  }
};

app.get("/", (req, res) => {
  res.send("<h1>Mongo DB connect with Express JS using Mongoose</h1>");
  res.end();
});

app.listen(port, async () => {
  await connnectDB();
  console.log(`Server running at http://localhost:${port}`);
});
