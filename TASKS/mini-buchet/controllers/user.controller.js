import { readDB, writeDB, uuidID } from "../utils.js";
import { sendJSON } from "../utils.js";
import { hashPassword } from "../utils.js";

const filename = "/db/users.json";

// GET ALL
export const getAllUsers = (req, res) => {
  try {
    const users = readDB(filename);
    sendJSON(res, 200, users);
  } catch (error) {
    sendJSON(res, 400, { error: "Invalid JSON data" });
  }
};

// GET ONE
export const getOneUser = (req, res, id) => {
  try {
    const users = readDB(filename);
    const user = users.find((u) => u.id === +id);
    console.log(user);

    if (user) {
      sendJSON(res, 200, user);
    } else {
      sendJSON(res, 404, { error: "User not found" });
    }
  } catch (error) {
    sendJSON(res, 400, { error: "Invalid JSON data" });
  }
};

// CREATE USER
export const createUser = (req, res) => {
  let body = "";
  req.on("data", (chunk) => (body += chunk.toString()));

  req.on("end", async () => {
    try {
      const users = readDB(filename);
      const userData = JSON.parse(body);
      const hashedpassword = await hashPassword(userData.password);
      const newUser = {
        id: +uuidID,
        ...userData,
        password: hashedpassword,
      };
      users.push(newUser);
      writeDB(filename, users);
      sendJSON(res, 201, newUser);
    } catch (error) {
      sendJSON(res, 400, { error: "Invalid JSON data" });
    }
  });
};

// UPDATE USER
export const updateUser = (req, res, id) => {
  let body = "";

  req.on("data", (chunk) => (body += chunk.toString()));

  req.on("end", async () => {
    try {
      let updatedUserData = JSON.parse(body);
      console.log("updatedUserData: ", updatedUserData);

      const users = readDB(filename);
      const userIndex = users.findIndex((u) => u.id === +id);
      if (userIndex !== -1) {
        console.log("users[userIndex]: ", users[userIndex]);
        const hashedpassword = await hashPassword(updatedUserData.password);
        users[userIndex] = {
          ...users[userIndex],
          ...updatedUserData,
          password: hashedpassword,
        };

        const updatedUser = users[userIndex];
        writeDB(filename, users);
        sendJSON(res, 200, updatedUser);
      } else {
        sendJSON(res, 404, { error: "User not found" });
      }
    } catch (error) {
      sendJSON(res, 400, { error: "Invalid JSON data" });
    }
  });
};

export const deleteUser = (req, res, id) => {
  try {
    let body = "";

    req.on("data", (chunk) => (body += chunk.toString()));
    req.on("end", () => {
      const users = readDB(filename);
      const userIndex = users.findIndex((u) => u.id === +id);
      if (userIndex !== -1) {
        users.splice(userIndex, 1);
        writeDB(filename, users);
        sendJSON(res, 200, { message: "User deleted" });
      } else {
        sendJSON(res, 404, { error: "User not found" });
      }
    });
  } catch (error) {
    sendJSON(res, 400, { error: "Invalid JSON data" });
  }
};
