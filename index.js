const express = require("express");

const app = express({ extended: false });

app.use(express.json());
app.use(express.urlencoded());

app.post("/user", (req, res) => {
  console.log(req.body);

  res.send("Nuevo usuario creado");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
