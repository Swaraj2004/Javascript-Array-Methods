// The at() method returns an indexed element from an array.
// The at() method returns the same as [].
// Syntax: array.at(index)

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits.at(2);
console.log(fruit); // Apple

// Get the first element of fruits
fruit = fruits.at();
console.log(fruit); // Banana

// Get the last element of fruits
fruit = fruits.at(-1);
console.log(fruit); // Mango
