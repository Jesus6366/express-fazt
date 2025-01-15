const express = require("express");

const app = express();

app.get("/products", (req, res) => {
  // query a database
  // validate data
  // process data
  res.send("List of products");
});

app.post("/products", (req, res) => {
  res.send("Creating products");
});

app.put("/products", (req, res) => {
  res.send("updating a product");
});

app.delete("/products", (req, res) => {
  res.send("Deleting products");
});

app.patch("/products", (req, res) => {
  res.send("Updating a part of a product");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
