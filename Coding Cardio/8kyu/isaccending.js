// First one is:
// You are given an array of numbers eg [1,2,3,4,5,6]
// Check that they are in ascending order.  If they are, return true.  Otherwise return false.

let testArray1 = [1, 2, 3, 4, 5, 6]; //returns true

let testArray2 = [1, 3, 2, 4, 6, 5]; // returns false

// const isAscending = (arr) => {};

function ascending(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i], arr[i - 1]);
    if (arr[i] < arr[i - 1]) {
      return false;
    }
  }
}

console.log(ascending(testArray1));
