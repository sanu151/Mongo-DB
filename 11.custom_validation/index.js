const app = require("./app");
const { connectDB } = require("./modules/db.module");
require("dotenv").config();
const port = process.env.PORT || 3001;

app.listen(port, () => {
  connectDB();
  console.log(`Server running at http://localhost:${port}`);
});
