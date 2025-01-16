// MongoDB Schema and model

const app = require("./app");
const { connectDB } = require("./modules/product.module");
const port = 3000;

app.listen(port, () => {
  connectDB();
  console.log(`Server running at http://localhost:${port}`);
});
