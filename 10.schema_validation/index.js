require("dotenv").config();
const app = require("./app");
const { connectDB } = require("./modules/db.module");
const port = process.env.PORT || 3001;

app.listen(port, () => {
  connectDB();
  console.log(`Server is running at http://localhost:${port}`);
});
