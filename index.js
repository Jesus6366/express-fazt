const express = require("express");
const morgan = require("morgan");

const app = express();

// midlewares
app.use(morgan("dev"));

app.use((req, res, next) => {
  console.log("paso por aqui");
  next();
});

app.get("/profile", (req, res) => {
  res.send("profile page");
});

app.use((req, res, next) => {
  if (req.query.login === "jesus") {
    next();
  } else {
    res.send("Not authorized");
  }
});

app.get("/dashboard", (req, res) => {
  res.send("Dashboard Page");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
