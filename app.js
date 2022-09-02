const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  console.log("just got a request");
  res.send("Deploy Cyclic App");
});

app.listen(port);
