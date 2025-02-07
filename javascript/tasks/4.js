// Find the largest number in an array
let arr = [1, 2, 3, 4, 5];
let largest = arr[0];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > largest) {
    largest = arr[i];
  }
}
console.log(largest);

// Find the smallest number in an array
let arr1 = [1, 2, 3, 4, 5];
let smallest = arr1[0];
for (let i = 0; i < arr1.length; i++) {
  if (arr1[i] < smallest) {
    smallest = arr1[i];
  }
}
console.log(smallest);

// Find the sum of all elements in an array
let arr2 = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < arr2.length; i++) {
  sum += arr2[i];
}
console.log(sum);


// Reverse an array without using .reverse()
let arr3 = [1, 2, 3, 4, 5];
let reversedArr = [];
for (let i = arr3.length - 1; i >= 0; i--) {
  reversedArr.push(arr3[i]);
}
console.log(reversedArr);


// Remove duplicates from an array
let arr4 = [1, 2, 2, 3, 4, 4, 5, 6, 7, 7, 8, 2, 2, 9]
let uniqueArr = [];
for (let i = 0; i < arr4.length; i++) {
  if (uniqueArr.indexOf(arr4[i]) === -1) {
    uniqueArr.push(arr4[i]);
  }
}
console.log(uniqueArr);

// Find the second largest number in an array
let arr5 = [1, 2, 3, 4, 5];
let secondLargest = arr5[0];
for (let i = 0; i < arr5.length; i++) {
  if (arr5[i] > secondLargest && arr5[i] < largest) {
    secondLargest = arr5[i];
  }
}
console.log(secondLargest);

// Sort an array in ascending order without using .sort()
let arr6 = [5, 2, 8, 1, 4];
for (let i = 0; i < arr6.length; i++) {
  for (let j = i + 1; j < arr6.length; j++) {
    if (arr6[i] > arr6[j]) {
      let temp = arr6[i];
      arr6[i] = arr6[j];
      arr6[j] = temp;
    }
  }
}
console.log(arr6);

// Find the index of a given element in an array
let arr7 = [1, 2, 3, 4, 5];
let element = 5;
let index = -1;
for (let i = 0; i < arr7.length; i++) {
  if (arr7[i] === element) {
    index = i;
    break;
  }
}
console.log(index);

// Merge two arrays and remove duplicates
let arr8 = [1, 2, 3, 4, 5];
let arr9 = [3, 4, 5, 6, 7];
let mergedArr = arr8.concat(arr9);
let uniqueArr1 = [];
for (let i = 0; i < mergedArr.length; i++) {
  if (uniqueArr1.indexOf(mergedArr[i]) === -1) {
    uniqueArr1.push(mergedArr[i]);
  }
}
console.log(uniqueArr1);

// Rotate an array to the right by one position
let arr10 = [1, 2, 3, 4, 5];
let lastElement = arr10.pop();
arr10.unshift(lastElement);
console.log(arr10);