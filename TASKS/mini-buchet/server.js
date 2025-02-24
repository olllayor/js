import http from "http";
import { categoryRoutes } from "./routes/category.route.js";
import { userRoutes } from "./routes/user.route.js";
import { productRoutes } from "./routes/product.route.js";
import { orderRoutes } from "./routes/order.route.js";

export const sendJSON = (res, status, data) => {
  res.writeHead(status, { "Content-Type": "application/json" });
  res.end(JSON.stringify(data));
};

const server = http.createServer((req, res) => {
  const url = req.url;

  if (url.startsWith("/category")) {
    categoryRoutes(req, res);
  } else if (url.startsWith("/users")) {
    userRoutes(req, res);
  } else if (url.startsWith("/products")) {
    productRoutes(req, res);
  } else if (url.startsWith("/orders")) {
    orderRoutes(req, res);
  } else {
    sendJSON(res, 404, { error: "Route not found" });
  }
});

const PORT = 1221;

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

//  /products get all
// /products/:id get one
// /products post
// /products/:id patch
// /products/:id delete

// /categories get all
// /categories/:id get one
// /categories post
// /categories/:id patch
// /categories/:id delete

// /users get all
// /users/:id get one
// /users post
// /users/:id patch
// /users/:id delete

// /orders get all
// /orders/:id get one
// /orders post
// /orders/:id patch
// /orders/:id delete
