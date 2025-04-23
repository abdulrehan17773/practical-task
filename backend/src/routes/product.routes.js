import { Router } from "express";
import { addProduct, getProducts } from "../controllers/product.controllers.js";

const productRouter = Router();

productRouter.route("/products").get(getProducts);
productRouter.route("/products").post(addProduct);

export { productRouter };