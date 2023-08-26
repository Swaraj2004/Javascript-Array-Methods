// The slice() method returns selected elements in an array, as a new array.
// The slice() method selects from a given start, up to a (not inclusive) given end.
// The slice() method does not change the original array.
// Syntax: array.slice(start, end)

const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1, 3);
const myBest = fruits.slice(-3, -1);
const all = fruits.slice();
console.log(citrus);
console.log(myBest);
console.log(all);
