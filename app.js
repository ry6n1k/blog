const express = require("express");
const db = require("cyclic-dynamodb");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// create an item
app.post("/:col/:key", async (req, res) => {
  const col = req.params.col;
  const key = req.params.key;
  const item = await db.collection(col).set(key, req.body);
  console.log(JSON.stringify(item, null, 2));
  res.json(item).end();
});

// get a full
app.get("/:col", async (req, res) => {
  const col = req.params.col;
  const items = await db.collection(col).list();
  console.log(JSON.stringify(items, null, 2));
  res.json(items).end();
});

app.listen(port);
