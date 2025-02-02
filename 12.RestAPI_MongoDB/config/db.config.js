const mongoose = require("mongoose");

const config = require("./app.config");

const dbURL = config.db.dbURL;

mongoose
  .connect(dbURL)
  .then(() => console.log(`MongoDB Atlas Connected Successfully`))
  .catch((error) => {
    console.log(`MongoDB Atlas Connection Error: ${error.message}`);
    process.exit(1);
  });
