// Task: Given an array of integers, return a new array with each value doubled.
// For example:
// [1, 2, 3] --> [2, 4, 6]

// Found here: https://www.codewars.com/kata/57f781872e3d8ca2a000007e/train/javascript
// Can run your function against tests:  Remember that it expects your function to be called maps

const testArray1 = [2, 3, 5];

const testArray2 = [1, 0, -5];

function arrayDoubler(arr) {}

// function doubleArry(arr) {
//   const resultArry = [];
//   for (let i = 0; i < arr.length; i++) {
//     resultArry.push(arr[i] * 2);
//   }
//   return resultArry;
// }

// console.log(doubleArry([2, 3, 5]));

// function arrayDoubler(array) {
//     let sum = [];
//     for (i = 0; i < array.length; i++) {
//       sum.push(array[i] + array[i]);
//       console.log(sum);
//     }
//     return sum;
//   }

const testArray = [2, 3, 5];

function doubler(arr) {
  let newArrr = [];

  for (let i = 0; i < arr.length; i++) {
    newArrr.push(arr[i] * 2);
  }
  return newArrr;
}

console.log(doubler(testArray));
