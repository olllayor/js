import {
  getAllUsers,
  getOneUser,
  createUser,
  updateUser,
  deleteUser,
} from "../controllers/user.controller.js";

export const userRoutes = (req, res) => {
  const url = req.url;
  const method = req.method;
  console.log("URL: ", url);

  if (url === "/users" && method === "GET") {
    getAllUsers(req, res);
  } else if (url.startsWith("/users/") && method === "GET") {
    const id = url.split("/")[2];
    getOneUser(req, res, id);
  } else if (url === "/users" && method === "POST") {
    createUser(req, res);
  } else if (url.startsWith("/users/") && method === "PATCH") {
    const id = url.split("/")[2];
    updateUser(req, res, id);
  } else if (url.startsWith("/users/") && method === "DELETE") {
    const id = url.split("/")[2];
    deleteUser(req, res, id);
  }
};
