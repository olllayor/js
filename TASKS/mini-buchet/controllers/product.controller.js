import { readDB, writeDB, uuidID } from "../utils.js";
import { sendJSON } from "../utils.js";
import { hashPassword } from "../utils.js";

const filename = "/db/product.json";

// GET ALL
export const getAllProducts = (req, res) => {
  try {
    const products = readDB(filename);
    sendJSON(res, 200, products);
  } catch (error) {
    sendJSON(res, 400, { error: "Invalid JSON data" });
  }
};

// GET ONE
export const getOneProduct = (req, res, id) => {
  try {
    const products = readDB(filename);
    const product = products.find((p) => p.id === +id);
    console.log(product);

    if (product) {
      sendJSON(res, 200, product);
    } else {
      sendJSON(res, 404, { error: "Product not found" });
    }
  } catch (error) {
    sendJSON(res, 400, { error: "Invalid JSON data" });
  }
};

// CREATE PRODUCT
export const createProduct = (req, res) => {
  let body = "";
  req.on("data", (chunk) => (body += chunk.toString()));

  req.on("end", () => {
    try {
      const products = readDB(filename);
      const newProduct = JSON.parse(body);
      const checkCategory = products.find(
        (p) => p.categoryId === newProduct.categoryId
      );
      if (!checkCategory) {
        console.log("Category not found:", checkCategory);
        sendJSON(res, 404, { error: "Category not found" });
      } else {
        console.log("Category found:", checkCategory);
        const product = {
          id: +uuidID,
          ...newProduct,
        };
        products.push(product);
        writeDB(filename, products);
        sendJSON(res, 201, product);
      }
    } catch (error) {
      console.error("Error creating product:", error);
      sendJSON(res, 400, { error: "Invalid JSON data" });
    }
  });
};

// UPDATE PRODUCT
export const updateProduct = (req, res, id) => {
  let body = "";
  req.on("data", (chunk) => (body += chunk.toString()));

  req.on("end", () => {
    try {
      const products = readDB(filename);
      let updatedProductData = JSON.parse(body);
      const checkCategory = products.find(
        (p) => p.categoryId === updatedProductData.categoryId
      );
      if (!checkCategory) {
        console.log("Category not found:", checkCategory);
        sendJSON(res, 404, { error: "Category not found" });
      } else {
        console.log("New Update: ", updatedProductData);
        const productIndex = products.findIndex((p) => p.id === +id);

        if (productIndex !== -1) {
          products[productIndex] = {
            ...products[productIndex],
            ...updatedProductData,
          };
          writeDB(filename, products);
          sendJSON(res, 200, products[productIndex]);
        } else {
          sendJSON(res, 404, { error: "Product not found" });
        }
      }
    } catch (error) {
      console.error("Error updating product:", error);
      sendJSON(res, 400, { error: error.message || "Invalid JSON data" });
    }
  });
};

// DELETE PRODUCT
export const deleteProduct = (req, res, id) => {
  let body = "";
  req.on("data", (chunk) => (body += chunk.toString()));

  req.on("end", () => {
    try {
      const products = readDB(filename);
      const productInd = products.findIndex((p) => p.id === +id);
      console.log("Product ind: ", productInd);

      if (productInd !== -1) {
        const deletedProduct = products[productInd];
        products.splice(productInd, 1);
        writeDB(filename, products);
        sendJSON(res, 200, deletedProduct);
      } else {
        sendJSON(res, 404, { error: "Product not found" });
      }
    } catch (error) {
        sendJSON(res, 400, { error: "Invalid JSON data" }); 
    }
  });
};
