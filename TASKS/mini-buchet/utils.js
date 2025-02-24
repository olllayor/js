import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "url";
import { v4 as uuidv4 } from "uuid";
import bycrypt from "bcrypt";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const sendJSON = (res, status, data) => {
  res.writeHead(status, { "Content-Type": "application/json" });
  res.end(JSON.stringify(data));
};

export const readDB = (filename) => {
  const filePath = path.join(__dirname, filename);
  try {
    const data = fs.readFileSync(filePath, "utf8");
    return JSON.parse(data);
  } catch (error) {
    console.error("Error reading file:", error);
    return [];
  }
};

export const writeDB = (filename, data) => {
  const filePath = path.join(__dirname, filename);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
};

export const uuidID = uuidv4()
  .replace(/[^0-9]/g, "")
  .substring(0, 5);

export const hashPassword = async (password) => {
  const saltRounds = 10;
  const hashedPassword = await bycrypt.hash(password, saltRounds);
  console.log("user password: ", password);
  console.log("hashed password: ", hashedPassword);

  return hashedPassword;
};
