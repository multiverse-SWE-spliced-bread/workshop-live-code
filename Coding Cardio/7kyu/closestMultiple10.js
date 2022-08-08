/*
https://www.codewars.com/kata/58249d08b81f70a2fc0001a4/train/javascript
Given a number return the closest number to it that is divisible by 10.

Example input:

22
25
37
Expected output:

20
30
40 */

const closestMultiple10 = (n) => Math.round(n / 10) * 10;

const closestMultipleTen = (n) => (n % 10 < 5 ? n - (n % 10) : n - (n % 10) + 10);

console.log(closestMultiple10(14));
