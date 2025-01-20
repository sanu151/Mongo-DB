const app = require("./app");
const { createDB } = require("./module/db.module");
const port = 3000;

app.listen(port, () => {
  createDB();
  console.log(`Server running at http://localhost:${port}`);
});
