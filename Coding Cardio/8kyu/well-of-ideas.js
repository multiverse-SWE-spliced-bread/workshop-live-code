// In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!',
// if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.

//eg   ['good', 'good', 'good', 'bad', good]  would return the string 'I smell a series!' as there are more than 2 'good' values

//0 good  return 'Fail
//1 or 2 good return 'Publish'
// if more than 2 return 'I smell a series!'

let testArray1 = ['good', 'good', 'good', 'bad', 'good'];
let testArray2 = ['bad', 'bad'];
let testArray3 = ['bad', 'bad', 'good'];

function goodIdeas(arr) {
  let goodCount = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 'good') {
      goodCount++;
    }
  }
  if (goodCount === 0) return 'Fail!';
  if (goodCount > 2) return 'I smell a series!';
  return 'Publish!';
}

console.log(goodIdeas(testArray1));
console.log(goodIdeas(testArray2));
console.log(goodIdeas(testArray3));

// goodIdeas(testArray1);

//methods for arrays     .includes
function goodIdeas(arr) {
  let goodCount = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 'good') {
      goodCount++;
    }
  }
  if (goodCount === 0) return 'Fail!';
  if (goodCount > 2) return 'I smell a series!';
  return 'Publish!';
}

function checkArray(arr) {
  let goodCount = 0;
  let badCount = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 'good') {
      goodCount++;
    } else badCount++;
  }
  if (goodCount === 0) return 'Fail';
  if (goodCount === 1 || goodCount === 2) {
    return 'Publish';
  } else if (goodCount > 2) {
    return 'I smell a series';
  }
}

// console.log(checkArray(['good', 'good', 'good', 'good', 'bad', 'good']));
// console.log(goodCount);
// console.log(badCount);
