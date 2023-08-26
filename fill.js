// The fill() method fills specified elements in an array with a value.
// The fill() method overwrites the original array.
// Start and end position can be specified. If not, all elements will be filled.
// Syntax: array.fill(value, start, end)

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.fill("Kiwi");
console.log(fruits);

const numbers = [1, 2, 3, 4, 5];
numbers.fill(0, 2, 4);
console.log(numbers);
