require("dotenv").config();

const deb = {
  app: {
    port: process.env.PORT || 3000,
  },
  db: {
    dbURL: process.env.DB_URL || "mongodb://localhost:27017/myusersdb",
  },
};

module.exports = deb;
