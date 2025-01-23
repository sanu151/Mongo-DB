const app = require("./app");
const { connectDb } = require("./modules/app.module");
const port = 3000;

app.listen(port, () => {
  connectDb();
  console.log(`Server running on http://localhost:${port}`);
});
