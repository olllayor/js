import { fileURLToPath } from "url";
import path from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(__dirname);
console.log(__filename);


var x = path.join(__dirname, "Refsnes", "demo_path.js");

// console.log(x);
