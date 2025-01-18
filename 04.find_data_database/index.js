const app = require("./app");
const { connectDB } = require("./module/app.module");
const port = 3000;

app.listen(port, () => {
  connectDB();
  console.log(`Server running at http://localhost:${port}`);
});
