const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/isAlive", (req, res) => {
  res.sendStatus(204);
});

app.get("/myfile", (req, res) => {
  res.sendFile("./javascript.png", {
    root: __dirname,
  });
});

app.get("/user", (req, res) => {
  const user = {
    name: "Jesus",
    lastName: "Martha",
    Age: 40,
    points: [1, 2, 3],
    adress: {
      city: "New york",
      street: "Some street 123",
    },
  };
  res.json(user);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
