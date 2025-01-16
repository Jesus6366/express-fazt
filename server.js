import express from "express";
import morgan from "morgan";

const app = express();
let products = [
  {
    id: 1,
    name: "laptop",
    price: 3000,
  },
];

// middlewares
app.use(express.json());
app.use(morgan("dev"));

// routes
app.get("/products", (req, res) => {
  res.json(products);
});

app.post("/products", (req, res) => {
  const newProduct = { ...req.body, id: products.length + 1 };
  products.push(newProduct);
  res.send(products);
});

app.put("/products/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const newProduct = req.body;

  const foundProduct = products.find((product) => product.id === id);

  if (!foundProduct) {
    return res.status(404).json({ message: "Product not found" });
  }

  products = products.map((product) =>
    product.id === id ? { ...product, ...newProduct } : product
  );

  res.status(200).json(products);
});

app.delete("/products/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const foundProduct = products.find((product) => product.id === id);

  if (!foundProduct) {
    return res.status(404).json({ message: "Product not found" });
  }

  products = products.filter((product) => {
    return product.id !== id;
  });

  res.status(200).json(products);
});

app.get("/products/:id", (req, res) => {
  const id = req.params.id;

  const foundProduct = products.find((product) => product.id === parseInt(id));
  if (foundProduct) {
    return res.json(foundProduct);
  }

  res.status(404).json({ message: "Product not found" });
});

app.listen(3000, () => {
  console.log("server on port 3000");
});
