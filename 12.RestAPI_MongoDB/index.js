require("dotenv").config();
const config = require("./config/app.config");

const app = require("./app");
const port = config.app.port;

app.listen(port, () => {
  console.log(`Server Running at http://localhost:${port}`);
});
