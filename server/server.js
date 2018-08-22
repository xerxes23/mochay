const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.status(404).send({
    error: "Page not found"
  });
});

app.get("/users", (req, res) => {
  res
    .status(200)
    .send([
      { name: "Joe Mendoza", role: "CEO" },
      { name: "Rex", role: "man's best friend" }
    ]);
});

app.listen(3000, () => console.log("App listening on port 3000"));

module.exports = app;
