// Count the number of vowels in a string
let str = "Hello World, My name is Olloyor";
let vowels = "aeiouAEIOU";
let count = 0;
for (let i = 0; i < str.length; i++) {
  if (vowels.includes(str[i])) {
    count++;
  }
}
console.log(count);


// Reverse a string without using .reverse()
let str1 = "Hello World";
let reversedStr = "";
for (let i = str1.length - 1; i >= 0; i--) {
  reversedStr += str1[i];
}
console.log(reversedStr);

// Check if a string is a palindrome
let str2 = "racecar";
let isPalindrome = true;
for (let i = 0; i < str2.length / 2; i++) {
  if (str2[i] !== str2[str2.length - 1 - i]) {
    isPalindrome = false;
    break;
  }
}
console.log(isPalindrome);

// Count the occurrences of a specific character in a string
let str3 = "Hello World";
let char = "h";
let count1 = 0;
for (let i = 0; i < str3.length; i++) {
  if (str3[i] === char) {
    count1++;
  }
}
console.log(count1);

// Convert a string to title case (capitalize the first letter of each word)
let str4 = "hello world";
let titleCaseStr = "";
for (let i = 0; i < str4.length; i++) {
  if (i === 0 || str4[i - 1] === " ") {
    titleCaseStr += str4[i].toUpperCase();
  } else {
    titleCaseStr += str4[i];
  }
}
console.log(titleCaseStr);