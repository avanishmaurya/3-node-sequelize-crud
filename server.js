const app = require("./app");
const db = require("./models");
require("dotenv").config();

db.sequelize.sync({ alter: true }).then(() => {
  console.log("Database connected");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
