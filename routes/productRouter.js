import express from "express";
import { createProduct } from "../controllers/productController.js";



const productRouter = express.Router();

productRouter.post("/api/products", createProduct);

export default productRouter;
