let tallestOnEachContinent = {
  africa: 'Kilimanjaro',
  europe: 'Mount Elbrus',
  northAmerica: 'Denali', //note the key here contains a space so we have to enclose the string in brackets
  'south america': 'Mount Aconcagua',
  asia: 'Mount Everest',
  antarctica: 'Vinson Massif',
  australia: 'Mount Kosciuszko',
  'australia oceania': 'Jaya Peak',
};

// function returnMountain(continent) {
//   return tallestOnEachContinent[continent];
// }

// console.log(returnMountain('australia'));

let mapLetters = {
  a: 0,
  b: 0,
  c: 0,
};

// let string = 'abaabbbccaa';

// function countLetters(str) {
//   for (let i = 0; i < str.length; i++) {
//     // console.log(mapLetters);
//     // console.log(str[i]);

//     // mapLetters[str[i]]++
//     mapLetters['a']++;

//     // console.log(mapLetters);

//     mapLetters['a'];
//   }
// }

// countLetters(string);
// console.log(mapLetters);

let { africa, europe, asia } = tallestOnEachContinent;

// console.log(africa);

let argumentObject = {
  param2: true,
  param1: 'value1',
};

function iUseDestructring({ param1, param2 }) {
  console.log(param1);
}

iUseDestructring(argumentObject);
