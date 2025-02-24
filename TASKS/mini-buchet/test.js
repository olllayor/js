let products = [
  {
    id: 1,
    name: "Product 1",
    categoryId: 1,
  },
  {
    id: 2,
    name: "Product 2",
    categoryId: 2,
  },
];
let newProduct = [
  {
    id: 3,
    name: "Product 3",
    categoryId: 2,
  },
];

const checkCategory = products.find(
  (p) => p.categoryId === newProduct.categoryId
);
console.log(checkCategory);

if (!checkCategory) {
  products.push(...newProduct);
  console.log(products);
} else {
  console.log("Category not found");
}
