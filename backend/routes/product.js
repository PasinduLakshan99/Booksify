import express from "express";
const router = express.Router();
import {
  createProduct,
  deleteProduct,
  getProductById,
  getProducts,
  updateProduct,
} from "./../controller/product.js";
import { isAdmin, isSignedIn } from "./../middleware/auth.js";

router.route("/").get(getProducts).post(isSignedIn, isAdmin, createProduct);
router
  .route("/:id")
  .get(getProductById)
  .delete(isSignedIn, isAdmin, deleteProduct)
  .put(isSignedIn, isAdmin, updateProduct);

export default router;
