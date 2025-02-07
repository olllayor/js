// Write a program to check if a number is positive, negative, or zero
let num = 0;
if (num > 0) {
  console.log(num + " is positive");
} else if (num < 0) {
  console.log(num + " is negative");
} else {
  console.log(num + " is zero");
}

// Determine if a given year is a leap year
let year = 2021;
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  console.log(year + " is a leap year");
} else {
  console.log(year + " is not a leap year");
}

// Write a program to find the largest of three numbers
let num1 = 10;
let num2 = 20;
let num3 = 30;
if (num1 > num2 && num1 > num3) {
  console.log(num1 + " is the largest number");
} else if (num2 > num1 && num2 > num3) {
  console.log(num2 + " is the largest number");
} else {
  console.log(num3 + " is the largest number");
}

// Check if a given character is a vowel or consonant
let char = "b";
if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
  console.log(char + " is a vowel");
} else {
  console.log(char + " is a consonant");
}

// Determine whether a number is divisible by both 3 and 5
let num4 = 15;
if (num4 % 3 === 0 && num4 % 5 === 0) {
  console.log(num4 + " is divisible by both 3 and 5");
} else {
  console.log(num4 + " is not divisible by both 3 and 5");
}