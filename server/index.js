import dotenv from "dotenv";
import connectToDatbase from "./database.js";
import express from "express";

// Our Routes
import productRoute from "./routes/productRotes.js";

dotenv.config();
connectToDatbase();
const app = express();

app.use(express.json());

const port = process.env.PORT || 5000;

app.use("/api/products", productRoute);

app.listen(port, () => {
  console.log(`Server runs no port ${port}`);
});
