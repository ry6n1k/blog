const express = require("express");

const homeRouter = require("./home.router");
const userRouter = require("./user.router");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/users", userRouter);
app.use("/", homeRouter);

app.use(function (request, response, next) {
  response.status(404).send("not found");
});

app.listen(port, () => {
  console.log("start server ...");
});
