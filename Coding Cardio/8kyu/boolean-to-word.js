// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.
// https://www.codewars.com/kata/53369039d7ab3ac506000467/train/javascript

let testBool = true;

// function boolToWord(bool) {}

boolToWord(testBool);

// function boolToWord(boolean) {
//   if (boolean === true) {
//     return 'Yes';
//   } else return 'No';
// }

const changeBoolean = (val) => {
  if (val) {
    return 'yes';
  } else if (val == false) {
    return 'no';
  } else {
    console.log('not a boolean');
  }
};

const boolToWord = (b) => (b ? 'Yes' : 'No');
