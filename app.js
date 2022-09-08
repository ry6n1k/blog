const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (request, response) => {
  response.send("hello world rybnik");
});

app.listen(port, () => {
  console.log("start server ...");
});
