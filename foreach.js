// The forEach() method calls a function for each element in an array.
// The forEach() method is not executed for empty elements.
// Syntax: array.forEach(function(currentValue, index, arr), thisValue)

const numbers = [1, 2, 3, 4, 5];
numbers.forEach(myFunction);

function myFunction(item, index, arr) {
  console.log(`a[${index}] = ${item}`);
}

// Get count of unique letters in array and add the count to object
const letters = ["a", "b", "c", "b", "c", "c"];
const count = {};
letters.forEach((item) => {
  if (count[item]) count[item]++;
  else count[item] = 1;
});
console.log(count);
