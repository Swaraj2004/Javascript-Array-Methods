// The filter() method creates a new array filled with elements that pass a test provided by a function.
// The filter() method does not execute the function for empty elements.
// The filter() method does not change the original array.
// Syntax: array.filter(function(currentValue, index, arr), thisValue)

//Return an array of all values in ages[] that are 18 or over
const ages = [32, 33, 16, 40];
const result = ages.filter((age) => age >= 18);
console.log(result);

// Filter unique values from array
const numbers = [1, 2, 3, 2, 1, 4, 5, 4, 6, 5];
const output = numbers.filter(
  (value, index, arr) => arr.indexOf(value) === index
);
console.log(output);
