const express = require("express");
const testRouter = require("./routes/test");
const userRouter = require("./routes/userRoute");
const productRouter = require("./routes/productRoute");
const orderRouter = require("./routes/orderRoute");
const chalk = require("chalk");
const { sequelize } = require("./models");
const app = express();

const PORT = 5000;

app.use(express.json());

// app.use("/", testRouter);
app.use("/users", userRouter);
app.use("/products", productRouter);
app.use("/orders", orderRouter);

app.listen(PORT, async () => {
  console.log(chalk.blue(`app is running on port ${PORT}`));
  await sequelize.sync({ alter: true });
  console.log(chalk.blue("db connected"));
});
