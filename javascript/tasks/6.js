// Write a function to check if a number is prime
const checkPrime = (num) => {
  if (num === 1) {
    return false;
  } else if (num === 2) {
    return true;
  } else {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
};

//   console.log(checkPrime(10));

// Write a function that returns the Fibonacci sequence up to a given number
function fibonacci(num) {
  let sequence = [0, 1];
  for (let i = 2; i < num; i++) {
    sequence[i] = sequence[i - 1] + sequence[i - 2];
  }
  return sequence;
}
// console.log(fibonacci(10));

// Write a function to find the greatest common divisor (GCD) of two numbers
function GCD(a, b) {
  if (b === 0) {
    return a;
  } else {
    return GCD(b, a % b);
  }
}
console.log(GCD(12, 18));

// Write a function to check if a number is an Armstrong number

const Armstrong = (a) => {
  let sum = 0;
  let temp = a;
  // Get number of digits to calculate correct power
  let numDigits = String(a).length;

  while (temp > 0) {
    let digit = temp % 10;
    // Use number of digits as power instead of fixed 3
    sum += Math.pow(digit, numDigits);
    temp = Math.floor(temp / 10);
  }
  return sum === a;
};
console.log(Armstrong(1634));

// Implement a function to remove all falsy values from an array (e.g., false, 0, "", null, undefined, NaN)
function arr(array) {
  return array.filter(Boolean);
}
console.log(arr([1, 0, 2, 3, false, "", null, undefined, NaN, "Olloyor"]));

// Write a function to check if two numbers are coprime

const coprime = (a, b) => {
  return GCD(a, b) === 1;
};
console.log(coprime(15, 18));

// Generate a random number between a given range

function randomNumber(min, max) {
  return Math.floor(Math.random() * max);
}
// console.log(randomNumber(1, 100));

// Find the LCM (Least Common Multiple) of two numbers.
const LCM = (a, b) => {
  return (a * b) / GCD(a, b);
};
// console.log(LCM(15, 16));

// Calculate the sum of squares of the first N natural numbers
const sumSquares = (n) => {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += Math.pow(i, 2);
  }
  return sum;
};
// console.log(sumSquares(10));

// Implement a function to check if a number is a perfect number (sum of its divisors excluding itself equals the number)
const perfectNumber = (a) => {
  let sum = 0;
  for (let i = 1; i < a; i++) {
    if (a % i === 0) {
      sum += i;
    }
  }
  return sum === a;
};
console.log(perfectNumber(128));
