// If you can't sleep, just count sheep!!

// Task:
// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

// Found here: https://www.codewars.com/kata/5b077ebdaf15be5c7f000077/train/javascript
// Can run your function against tests:  Remember that it expects your function to be called countSheep

// 3   returns  "1 sheep...2 sheep...3 sheep..."

// 5 returns  "1 sheep...2 sheep...3 sheep...4 sheep...5 sheep..."

function countSheep(n) {
  let newString = '';
  for (let i = 1; i <= n; i++) {
    newString += `${i} sheep...`;
  }
  return newString;
}

console.log(countSheep(5));
