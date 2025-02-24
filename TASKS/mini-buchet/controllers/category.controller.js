import { readDB, writeDB, uuidID } from "../utils.js";
import { sendJSON } from "../utils.js";

const filename = "/db/category.json";

export const getAllcategories = (req, res) => {
  const categories = readDB(filename);
  sendJSON(res, 200, categories);
};

export const getCategory = (req, res, id) => {
  const categories = readDB(filename);
  const category = categories.find((c) => c.id === +id);

  if (category) {
    sendJSON(res, 200, category);
  } else {
    sendJSON(res, 404, { error: "Category not found" });
  }
};

export const createCategory = (req, res) => {
  let body = "";
  req.on("data", (chunk) => (body += chunk.toString()));

  req.on("end", () => {
    try {
      const categories = readDB(filename);
      console.log(categories);

      const newCategory = JSON.parse(body);
      const id = +uuidID;

      const category = {
        id,
        ...newCategory,
      };
      categories.push(category);
      writeDB(filename, categories);
      sendJSON(res, 201, category);
    } catch (error) {
      sendJSON(res, 400, { error: "Invalid JSON data" });
    }
  });
};

export const updateCategory = (req, res, id) => {
  let body = "";

  req.on("data", (chunk) => (body += chunk.toString()));

  req.on("end", () => {
    let updatedCategoryData;
    try {
      updatedCategoryData = JSON.parse(body);
    } catch (error) {
      sendJSON(res, 400, { error: "Invalid JSON data" });

      return;
    }

    const categories = readDB(filename);
    const ind = categories.findIndex((c) => c.id === Number(id));
    if (ind !== -1) {
      const originalCategory = categories[ind];
      categories[ind] = {
        ...originalCategory,
        ...updatedCategoryData,
      };
      const updatedCategory = categories[ind];

      writeDB(filename, categories);
      sendJSON(res, 200, updatedCategory);
    } else {
      sendJSON(res, 404, { error: "Category not found" });
    }
  });
};

export const deleteCategory = (req, res, id) => {
  let body = "";

  req.on("data", (chunk) => (body += chunk.toString()));
  req.on("end", () => {
    const categories = readDB(filename);
    const ind = categories.findIndex((c) => c.id === Number(id));
    if (ind !== -1) {
      const deletedCategory = categories[ind];
      categories.splice(ind, 1);
      writeDB(filename, categories);
      sendJSON(res, 200, deletedCategory);
    } else {
      sendJSON(res, 404, { error: "Category not found" });
    }
  });
};
