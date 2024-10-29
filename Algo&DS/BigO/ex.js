// 1. write a function that, given an array of integers, returns the sum of all the elements.
// sumArray([1,2,3,4,5]) => Output: 15

const sumArray = (array) => {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
};

console.log(sumArray([1, 2, 3, 4, 5]));
// O(n)

// 2. write a function that, given a number, returns whether the number is even or odd.

// const evenOrOdd = (number) => {
//   if (number % 2 == 0) {
//     return "number is even";
//   } else {
//     return "number is odd";
//   }
// };

// console.log(evenOrOdd(3));
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
//   let newArray = [];
//   let number = array[0];
//   for (let i = 0; i < array.length; i++) {
//     number = array[i];
//     newArray += number;
//   }
//   return newArray;
// };

// don't know
// console.log(printAllPairs([1, 2, 3]));

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
