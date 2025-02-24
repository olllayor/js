import { ProductController } from "./product.controller.js";

export const routes = (req, res) => {
  const [_, basePath, id] = req.url.split("/");

  if (req.method === "GET" && basePath === "products") {
    return id
      ? ProductController.getById(req, res, id)
      : ProductController.getAll(req, res);
  }

  if (req.method === "POST" && basePath === "products") {
    return ProductController.create(req, res);
  }

  res.writeHead(404, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ error: "Route not found" }));
};
