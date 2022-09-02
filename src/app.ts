import dotenv from "dotenv";
dotenv.config();

import express from "express";
import bodyParser from "body-parser";

const app = express();
const CyclicDb = require("cyclic-dynamodb");
const db = CyclicDb("beautiful-cow-sweatsuitCyclicDB");

app.set("view engine", "hbs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const run = async function () {
  let animals = db.collection("animals");
  let leo = await animals.set("leo", {
    type: "cat",
    color: "orange",
  });
  let item = await animals.get("leo");
  console.log(item);
};

app.get("/", (req, res) => {
  run();
  res.render("welcome");
});

module.exports.app = app;
