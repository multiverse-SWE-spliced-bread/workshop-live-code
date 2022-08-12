# Objects


An object is a built-in data type for storing a collection of key-value pairs. Data inside objects are unordered, and the values can be of any type including strings, integers, booleans, arrays, functions and even other objects.  
```JS
let a = 'string'
let b = 2
let c = true
let everest = { elevation: 8848, rank: 1} //an object with key-value pairs (key = elevation, value = 8848) enclosed by curly braces {})
```
---
Because objects are a list of key-values pairs, each entry is separated by a comma. As these collections get larger, we often have to format them over several lines.  This often appears as below, with the opening curly brace sharing a line with its identifier and the closing curly brace on its own line at the end of the entries.  The values can be any JS value or expression.  That means we can store not just primitive data types, but also arrays, objects and functions.

```JS
let everest = {
    elevation: 8848,
    firstAscent: '1953',
    firstSummitters: ['Tanzing Norgay', 'Sir Edmund Hillary']
}
```
---
## Accessing Values from an Object
### Dot Notation
To reference a key (called an object property) we can write the object identifier followed by a full stop and then the key we wish to access.  When using the dot notation, only keys that are valid JavaScript identifiers will work. (eg myVar is valid, 'my Var' is not.)

```JS
console.log(everest.elevation)        // 8848
console.log(everest.firstAscent)   // '1953'
console.log(everest.firstSummitters)   // ['Tanzing Norgay', 'Sir Edmund Hillary']
```

### Bracket Notation
We can also access the object properties in a similar way to accessing an index of an array - by using square brackets [].  It should be noted that object keys are stored as strings (so anything that can be coerced to a string is valid).

```JS
console.log(everest['elevation'])        // 8848
console.log(everest['firstAscent'])   // '1953'
console.log(everest['firstSummitters'])   // ['Tanzing Norgay', 'Sir Edmund Hillary']
```


## Creating an Object
There a few ways that objects can be initialized in JS. 

```JS
//They can be initilised from the Object constructor using the new keyword.  This is generally not recommended.
const newObj = new Object()
//The more common way is to use the object literal notation, which used a pair of curly braces. {}
let newObj2 = {}
```

Key-value pairs can be added at creation.  These are added in a comma-separated list with each key-pair using a colon to separate (eg key:pair)
```JS
let montBlanc = {
    elevation: 4807,
    firstAscent: 2022,
    firstSummitters: ['Jacques Balmat', 'Michel Paccard']
}
```

In the same way that we can read object properties with the dot notation or the square bracket notation, we can also reassign values too! 
```JS
montBlanc.firstAscent = 1786
montBlanc['elevation'] = 4809
```
### Using a constructor function
Objects can be returned from a constructor function. Note that JS now has Class syntax, which also return objects.

```JS
function Mountain(elevation, firstAscent, firstSummitters) {
    this.elevation = elevation;
    this.firstAscent = firstAscent;
    this.firstSummitters = firstSummitters
}

const denali = new Mountain(6190, 1905, ['Walter Harper', 'Harry Karstens', 'Hudson Stuck', 'Robert Tatum'])

```


# Tips and Tricks for Objects

## Using Square Bracket Notation with Variables
This allows us to access our object properties 'programmatically' using variables.

```JS
function getHighestPointForContinent(key) {
  let myObject = {
    africa: 'Kilimanjaro',
    europe: 'Mount Elbrus',
    'north america': 'Denali', //note the key here contains a space so we have to enclose the string in brackets
    'south america': 'Mount Aconcagua',
    asia: 'Mount Everest',
    antarctica: 'Vinson Massif',
    australia: 'Mount Kosciuszko',
    'australia oceania': 'Jaya Peak',
  };
  return myObject[key];
}

console.log(getHighestPointForContinent('north america')); // returns Denali
console.log(getHighestPointForContinent('mars')); // returns undefined

//Because referencing a property that does not exist will return an undefined, we could leverage this with an if statement later, if needed.

if (myObject.mars) {
    return //this block will only execute if the property has an assigned value
}
```

## Iterating over an Object's Properties
#### for...in loops 
The 'key' in this for loop is a user defined variable.
This method traverses all of the enumerable string properties of an object as well as its prototype chain.

```JS
let myObject = {
    myKey1: 'myValue1',
    myKey2: 'myValue2',
    myKey3: 'myValue3',
}

for (key in myObject) {
  console.log(key);  //this will log the current key in the loop
  console.log(myObject[key]);  // this uses square bracket notation to log the current value in the loop
}
```
####  Object.keys(myObject)
This is a static method on the native Object class that will return an array containing all of your keys. (It will not return properties in the prototype chain)

```JS
let keysArray = Object.keys(myObject)
console.log(keysArray) // ['myKey1', 'myKey2', 'myKey3' ]
```
####  Object.getOwnPropertyNames(myObject)
This method returns an array containing all the own string property names in the object myObject, regardless of if they are enumerable or not.

```JS
let keysArray = Object.getOwnPropertyNames(myObject)
console.log(keysArray) // ['myKey1', 'myKey2', 'myKey3' ]
```

#### Object.values
to finish
#### Object.entries 
to finish
#### Object.fromEntries (A freverse of Object Entries)


## Destructuring


