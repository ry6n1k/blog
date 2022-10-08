const express = require("express");
const mongoose = require("mongoose");

const app = express();
const Schema = mongoose.Schema;
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const userSchema = new Schema({
  name: String,
  age: Number,
});

mongoose.connect("mongodb://localhost:27017/usersdb", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

const User = mongoose.model("User", userSchema);
const user = new User({
  name: "Tom",
  age: 25,
});

user.save(function (err) {
  mongoose.disconnect();
  if (err) {
    return console.log(err);
  }
  console.log("user is saved", user);
});

app.get("/", (request, response) => {
  response.send("hello world rybnik");
});

app.listen(port, () => {
  console.log("start server ...");
});
