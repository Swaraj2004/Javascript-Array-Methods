// map() creates a new array from calling a function for every array element.
// map() does not execute the function for empty elements.
// map() does not change the original array.
// Syntax: array.map(function(currentValue, index, arr), thisValue)

// Square root of all elements in array
const numbers = [4, 9, 16, 25];
const newArr = numbers.map(Math.sqrt);
console.log(newArr);

// Return array of fullnames
const persons = [
  { firstname: "Malcom", lastname: "Reynolds" },
  { firstname: "Kaylee", lastname: "Frye" },
  { firstname: "Jayne", lastname: "Cobb" },
];

output = persons.map((item) => item.firstname + " " + item.lastname);
console.log(output);
