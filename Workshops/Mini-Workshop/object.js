// let tallestOnEachContinent = {
//   africa: 'Kilimanjaro',
//   europe: 'Mount Elbrus',
//   northAmerica: 'Denali', //note the key here contains a space so we have to enclose the string in brackets
//   'south america': 'Mount Aconcagua',
//   asia: 'Mount Everest',
//   antarctica: 'Vinson Massif',
//   australia: 'Mount Kosciuszko',
//   'australia oceania': 'Jaya Peak',
// };

// function returnMountain(continent) {
//   return tallestOnEachContinent[continent];
// }

// console.log(returnMountain('australia'));

// let mapLetters = {
//   a: 0,
//   b: 0,
//   c: 0,
// };

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

// let { africa, europe, asia } = tallestOnEachContinent;

// console.log(africa);

// let argumentObject = {
//   param2: true,
//   param1: 'value1',
// };

// function iUseDestructring({ param1, param2 }) {
//   console.log(param1);
// }

// iUseDestructring(argumentObject);

// let myArray = ['one', 'two', 'three']

// let myObject = {
//   myKey1: 'myValue1',
//   myKey2: 'myValue2',
//   myKey3: 'myValue3'
// }

// const newArray = Object.entries(myObject)



// const forLogging = newArray.forEach(function (entry, index) {
//   console.log(entry, index)
// })



// http://localhost:3000/animals/2



const animals = [
  {
    name: "Zebra",
    color: "Mixed"
},
{
    name: "Lion",
    color: "Gold"
},
{
    name: "Tiger",
    color: "Orange"
},
{
    name: "Bear",
    color: "Brown"
},
{
  name: "leopard",
  color: "Mixed"
},
]

// function myMappingFunction(animal) {
//   return {
//     name: animal.name.toUpperCase(),
//     color: animal.color.toUpperCase() 
//   }
// }
const animalsMapped  = animals.map((animal) => {
  return {
    name: animal.name.toUpperCase(),
    color: animal.color.toUpperCase()
  }
})

// console.log(animalsMapped)

function filterCallback (animal) {
  
  if (animal.name.charAt(0).toUpperCase()== "L") {
    return true
  }

}

const animalsFilter = animals.filter(filterCallback)

console.log(animalsFilter)





