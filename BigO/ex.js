// 1. write a function that, given an array of integers, returns the sum of all the elements.
// sumArray([1,2,3,4,5]) => Output: 15

// const sumArray = (array) => {
//   let sum = 0;
//   for (let i = 0; i < array.length; i++) {
//     sum += array[i];
//   }
//   return sum;
// };

// console.log(sumArray([1, 2, 3, 4, 5]));
// O(n)

// 2. write a function that, given a number, returns whether the number is even or odd.

// const evenOrOdd = (number) => {
//   if (number % 2 == 0) {
//     return "number is even";
//   } else {
//     return "number is odd";
//   }
// };

// console.log(evenOrOdd(2));
// O(1)

// 3. write a function that, given an array of numbers, finds the maximum element in the array

// const maxElementofArray = (array) => {
//   let num = array[0];
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] > num) {
//       num = array[i];
//     }
//   }
//   return num;
// };

// console.log(maxElementofArray([1, 2, 3, 4, 5]));
// O(n)

// 4. write a function that gets 2 numbers, and returns the smaller one

// const smallerNumber = (num1, num2) => {
//   if (num1 > num2) {
//     return num2;
//   } else {
//     return num1;
//   }
// };

// console.log(smallerNumber(2, 56));
// O(1)

// 5. write a function that, given an array of numbers, prints all pairs of numbers from the array

// const printAllPairs = (array) => {
//   for (let i = 0; i < array.length; i++) {
//     for (let j = 0; j < array.length; j++) {
//       console.log(array[i], array[j]);
//     }
//   }
// };

// console.log(printAllPairs([1, 2, 3, 4]));
//O(n^2)

// 6. write a function that, given a string, counts the number of vowels (a, e, i, o, u) in the string

// const countVowels = (string) => {
//   let array = [...string];
//   let sum = 0;
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] == "a") {
//       sum += 1;
//     } else if (array[i] == "e") {
//       sum += 1;
//     } else if (array[i] == "i") {
//       sum += 1;
//     } else if (array[i] == "o") {
//       sum += 1;
//     } else if (array[i] == "u") {
//       sum += 1;
//     }
//   }
//   return sum;
// };

// console.log(countVowels("it is cold outside"));
//O(n)

// 7. write a function that checks if two arrays contain the same elements (order doesn't matter)

// const matchArrayElements = (array1, array2) => {
//   for (let i = 0; i < array1.length; i++) {
//     for (let j = 0; j < array2.length; j++) {
//       if (array1[i] == array2[j]) {
//         return true;
//       }
//     }
//   }
//   return false;
// };

// console.log(matchArrayElements([1, 2, 3], [6, 2, 5]));
//O(n^2)

// 8. sorted array

// function binarySearch(arr, target) {
//   let left = 0, right = arr.length - 1;
//   while (left <= right) {
//       let mid = Math.floor((left + right) / 2);
//       if (arr[mid] === target) return mid;
//       else if (arr[mid] < target) left = mid + 1;
//       else right = mid - 1;
//   }
//   return -1;
// }

// O(log n) -> binary search
