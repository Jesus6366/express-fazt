import express from "express";
import morgan from "morgan";

const app = express();

// middlewares
app.use(express.json());
app.use(morgan("dev"));

// routes
app.get("/products", (req, res) => {
  res.send("Getting products");
});

app.post("/products", (req, res) => {
  res.send("Creating products");
});

app.put("/products", (req, res) => {
  res.send("Updating products");
});

app.delete("/products", (req, res) => {
  res.send("Deleting products");
});

app.get("/products/:id", (req, res) => {
  res.send("Getting one product");
});

app.listen(3000, () => {
  console.log("server on port 3000");
});
