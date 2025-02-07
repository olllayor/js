// Declare a variable and assign it a number, then print its square
let num = 5;
console.log(num * num);

// Swap two variables without using a third variable
let a = 5;
let b = 10;
[a, b] = [b, a];
console.log(a, b);

//Convert a temperature from Celsius to Fahrenheit
let celsius = 25;
let fahrenheit = (celsius * 9) / 5 + 32;
console.log(fahrenheit + ' F');


// Check if a given number is even or odd
let num1 = 7;
if (num1 % 2 === 0) {
  console.log(num1 + " is even");
} else {
  console.log(num1 + " is odd");
}

// Find the sum of the digits of a number
let num2 = 12345;
let sum = 0;
while (num2 > 0) {
  sum += num2 % 10;
  num2 = Math.floor(num2 / 10);
}
console.log(sum);
