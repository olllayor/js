import {
  getAllProducts,
  getOneProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/product.controller.js";
import { sendJSON } from "../utils.js";

export const productRoutes = (req, res) => {
  const url = req.url;
  const method = req.method;
  console.log(url, method);

  if (url === "/products" && method === "GET") {
    getAllProducts(req, res);
  } else if (url.startsWith("/products") && method === "GET") {
    const id = url.split("/")[2];
    getOneProduct(req, res, +id);
  } else if (url === "/products" && method === "POST") {
    createProduct(req, res);
  } else if (url.startsWith("/products/") && method === "PATCH") {
    const id = url.split("/")[2];
    updateProduct(req, res, id);
  } else if (url.startsWith("/products/") && method === "DELETE") {
    const id = url.split("/")[2];
    deleteProduct(req, res, id);
  } else {
    sendJSON(res, 404, { error: "Route not found" });
  }
};
