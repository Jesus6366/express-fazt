const express = require("express");

const app = express();

app.get("/hello/:user", (req, res) => {
  const user = req.params.user;
  console.log(user);

  res.send(`Hello ${user}`);
});

app.get("/add/:x/:y", (req, res) => {
  console.log(req.params.x);
  console.log(req.params.y);

  const result = Number(req.params.x) + Number(req.params.y);

  console.log(result);

  res.send(`Result: ${result}`);
});

app.get("/users/:username/photo", (req, res) => {
  if (req.params.username === "jesus") {
    return res.sendFile("./javascript.png", {
      root: __dirname,
    });
  }

  res.send("User not authorized");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
