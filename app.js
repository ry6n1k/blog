const express = require("express");
const CyclicDb = require("cyclic-dynamodb");

const app = express();
const db = CyclicDb("beautiful-cow-sweatsuitCyclicDB");
const port = process.env.PORT || 3000;

app.set("view engine", "hbs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", async (req, res) => {
  let animals = db.collection("animals");
  let leo = await animals.set("leo", {
    type: "cat",
    color: "orange",
  });
  let item = await animals.get("leo");
  console.log(item)
  res.send('Deploy Cyclic App');
});

app.listen(port);
