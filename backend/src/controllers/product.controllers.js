import { asyncHandler } from "../utils/asyncHandler.js";
import { Product } from "../models/product.models.js";
import { ApiError } from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";

// Get all products
const getProducts = asyncHandler(async (req, res) => {
  try {
    const products = await Product.find(); 

    return res.status(200).json(
      new ApiResponse(200, { products }, "Products fetched successfully")
    );
  } catch (err) {
    throw new ApiError(500, "Error fetching products");
  }
});

// Add a new product
const addProduct = asyncHandler(async (req, res) => {
  const { name, price } = req.body;

  if (!name || !price) {
    throw new ApiError(400, "Name and price are required");
  }

  try {
    const newProduct = new Product({
      name,
      price,
    });

    await newProduct.save();

    return res.status(200).json(
      new ApiResponse(200, { data: newProduct }, "Product added successfully")
    );
  } catch (err) {
    throw new ApiError(500, "Error saving product");
  }
});

export { addProduct, getProducts };
