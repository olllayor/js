import { readDB, writeDB, uuidID } from "../utils.js";
import { sendJSON } from "../utils.js";

const filename = "/db/order.json";

// Get All orders

export const getAllOrders = (req, res) => {
  try {
    const orders = readDB(filename);
    sendJSON(res, 200, orders);
  } catch (error) {
    sendJSON(res, 400, { error: "Invalid JSON data" });
  }
};

// GET ONE ORDER
export const getOneOrder = (req, res, id) => {
  try {
    const orders = readDB(filename);
    const order = orders.find((o) => o.id === +id);
    console.log(order);

    if (order) {
      sendJSON(res, 200, order);
    } else {
      sendJSON(res, 404, { error: "Category not found" });
    }
  } catch (error) {
    sendJSON(res, 400, { error: "Invalid JSON data" });
  }
};

// UPDATE ORDER

export const updateOrder = (req, res, id) => {
  let body = "";
  req.on("data", (chunk) => (body += chunk.toString()));
  req.on("end", () => {
    try {
      const updateOrderData = JSON.parse(body);
      console.log(updateOrderData);

      const orders = readDB(filename);
      const orderIndex = orders.findIndex((o) => o.id === +id);
      if (orderIndex !== -1) {
        orders[orderIndex] = {
          ...orders[orderIndex],
          ...updateOrderData,
        };
        writeDB(filename, orders);
        sendJSON(res, 200, orders[orderIndex]);
      } else {
        sendJSON(res, 404, { error: "Order not found" });
      }
    } catch (error) {
      console.error("Error updating order:", error);
      sendJSON(res, 400, { error: "Invalid JSON data" });
    }
  });
};

// Delete ORDER

export const deleteOrder = (req, res, id) => {
  try {
    const orders = readDB(filename);
    const orderIndex = orders.findIndex((o) => o.id === +id);
    if (orderIndex !== -1) {
      const deletedOrder = orders[orderIndex];
      orders.splice(orderIndex, 1);
      writeDB(filename, orders);
      sendJSON(res, 200, deletedOrder);
    } else {
      sendJSON(res, 404, { error: "Order not found" });
    }
  } catch (error) {
    console.log(error);
    sendJSON(res, 400, { error: "Invalid JSON data" });
  }
};
