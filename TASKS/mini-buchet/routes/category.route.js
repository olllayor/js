import {
  getAllcategories,
  getCategory,
  createCategory,
  updateCategory,
  deleteCategory,
} from "../controllers/category.controller.js";

export const categoryRoutes = (req, res) => {
  const url = req.url;
  const method = req.method;
  console.log("URL: ", url);

  if (url === "/category" && method === "GET") {
    getAllcategories(req, res);
  } else if (url.startsWith("/category/") && method === "GET") {
    const id = url.split("/")[2];

    getCategory(req, res, id);
  } else if (url === "/category" && method === "POST") {
    createCategory(req, res);
  } else if (url.startsWith("/category/") && method === "PATCH") {
    const id = url.split("/")[2];
    updateCategory(req, res, id);
  } else if (url.startsWith("/category/") && method === "DELETE") {
    const id = url.split("/")[2];
    deleteCategory(req, res, id);
  } else {
    sendJSON(res, 404, { error: "Route Not found" });
  }
};
