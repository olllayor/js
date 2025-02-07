// Print all numbers from 1 to 100
for (let i = 1; i <= 100; i++) {
  console.log(i);
}

// Print the multiplication table of a given number
let num = 5;
for (let i = 1; i <= 10; i++) {
  console.log(num + " x " + i + " = " + num * i);
}

// Calculate the factorial of a given number
let num1 = 6;
let factorial = 1;
for (let i = 1; i <= num1; i++) {
  factorial *= i;
}
console.log(factorial);

// Reverse a given number (e.g., 123 → 321)
let num2 = 123;
let reversedNum = 0;
while (num2 > 0) {
  reversedNum = reversedNum * 10 + num2 % 10;
  num2 = Math.floor(num2 / 10);
}
console.log(reversedNum);

// Count the number of digits in a given number
let num3 = 12345000;
let count = 0;
while (num3 > 0) {
  count++;
  num3 = Math.floor(num3 / 10);
}
console.log(count);