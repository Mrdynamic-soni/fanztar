import express from "express";
import { getMobileDataPrice } from "./src/controllers/order.controller.js";

const app = express();
app.use(express.json());

const port = process.env.PORT || 8989;

app.get("/", (req, res) => {
  res.status(200).send("Hello, I am Up");
});

app.post("/orders", getMobileDataPrice);

app.listen(port, () => {
  console.log(`Server is up and running on http://localhost:${port}`);
});
