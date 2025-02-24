const products = [
  { id: 1, name: "Laptop", price: 1000 },
  { id: 2, name: "Phone", price: 500 },
];

// Helper function to send JSON responses
const sendJSON = (res, status, data) => {
  res.writeHead(status, { "Content-Type": "application/json" });
  res.end(JSON.stringify(data));
};

export const ProductController = {
  getAll: (req, res) => sendJSON(res, 200, products),

  getById: (req, res, id) => {
    const product = products.find((p) => p.id === Number(id));
    return product
      ? sendJSON(res, 200, product)
      : sendJSON(res, 404, { error: "Product not found" });
  },

  create: (req, res) => {
    let body = "";

    req.on("data", (chunk) => (body += chunk.toString()));

    req.on("end", () => {
      try {
        const newProduct = JSON.parse(body);
        const id = products.length + 1;
        const product = { id, ...newProduct };
        products.push(product);
        sendJSON(res, 201, product);
      } catch (error) {
        sendJSON(res, 400, { error: "Invalid JSON format" });
      }
    });
  },
};
