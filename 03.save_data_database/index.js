const app = require("./app");
const { connectDb } = require("./modules/product.module");
const port = 3000;

app.listen(port, () => {
  connectDb();
  console.log(`Server running at http://localhost:${port}`);
});
