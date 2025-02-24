import http from "http";
import { routes } from "../../npm/product.route.js";

const server = http.createServer(routes);

server.listen(1221, () => console.log("Server running on port 3000"));



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
