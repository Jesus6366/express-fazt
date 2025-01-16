import express from "express";

const router = express.Router();

let products = [
  {
    id: 1,
    name: "laptop",
    price: 3000,
  },
];

router.get("/api/products", (req, res) => {
  res.json(products);
});

router.post("/api/products", (req, res) => {
  const newProduct = { ...req.body, id: products.length + 1 };
  products.push(newProduct);
  res.send(products);
});

router.put("/api/products/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const newProduct = req.body;

  const foundProduct = products.find((product) => product.id === id);

  if (!foundProduct) {
    return res.status(404).json({ message: "Product not found " });
  }

  products = products.map((product) =>
    product.id === id ? { ...product, ...newProduct } : product
  );

  res.status(200).json(products);
});

router.delete("/api/products/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const foundProduct = products.find((product) => product.id === id);

  if (!foundProduct) {
    return res.status(404).json({ message: "Product not found " });
  }

  products = products.filter((product) => {
    return product.id !== id;
  });

  res.status(200).json(products);
});

router.get("/api/products/:id", (req, res) => {
  const id = req.params.id;

  const foundProduct = products.find((product) => product.id === parseInt(id));
  if (foundProduct) {
    return res.json(foundProduct);
  }

  res.status(404).json({ message: "Product not found" });
});

export default router;
