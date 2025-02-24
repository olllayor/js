import {
  deleteOrder,
  getAllOrders,
  getOneOrder,
  updateOrder,
} from "../controllers/order.controller.js";

export const orderRoutes = (req, res) => {
  const url = req.url;
  const method = req.method;
  console.log(url, method);

  if (url === "/orders" && method === "GET") {
    getAllOrders(req, res);
  } else if (url.startsWith("/orders/") && method === "GET") {
    const id = url.split("/")[2];
    getOneOrder(req, res, id);
  } else if (url.startsWith("/orders/") && method === "PATCH") {
    const id = url.split("/")[2];
    updateOrder(req, res, id);
  } else if (url.startsWith("/orders/") && method === "DELETE") {
    const id = url.split("/")[2];
    deleteOrder(req, res, id);
  } else {
    sendJSON(res, 404, { error: "Route not found" });
  }
};
