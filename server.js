import express from "express";
import morgan from "morgan";
import router from "./routes/products.js";

const app = express();

// middlewares
app.use(express.json());
app.use(morgan("dev"));
app.use(express.static("./static"));

// routes
app.use("/", router);

app.listen(3000, () => {
  console.log("server on port 3000");
});
