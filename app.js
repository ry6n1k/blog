const express = require("express");
const { default: mongoose } = require("mongoose");

const homeRouter = require("./home.router");
const userRouter = require("./user.router");

const app = express();
const port = process.env.PORT || 3000;

app.set("view engine", "hbs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/users", userRouter);
app.use("/", homeRouter);

app.use(function (request, response, next) {
  response.status(404).send("not found");
});

mongoose.connect(
  "mongodb://localhost:27017/usersdb",
  {
    useUnifiedTopology: true,
  },
  function (err) {
    if (err) {
      return console.log(err);
    }
    app.listen(port, () => {
      console.log("start server ...");
    });
  }
);
