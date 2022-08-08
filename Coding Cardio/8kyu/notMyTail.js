// Some new animals have arrived at the zoo. The zoo keeper is concerned that perhaps the animals do not have the right tails.
// To help her, you must correct the broken function to make sure that the second argument (tail), is the same as the last letter of the first argument (body)
// - otherwise the tail wouldn't fit!
// If the tail is right return true, else return false.
// The arguments will always be non empty strings, and normal letters.

function myTail(str1, str2) {
  //   str2.length;

  console.log(str1.slice(str1.length - str2.length) === str2);
}

myTail('banana', 'ana');

myTail('ana', 'banana');
