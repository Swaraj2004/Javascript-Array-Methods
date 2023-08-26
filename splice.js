// The splice() method adds and/or removes array elements.
// The splice() method overwrites the original array.
// Syntax: array.splice(index, howmany, item1, ....., itemX)

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi"); // add
console.log(fruits);
fruits.splice(2, 2); // remove
console.log(fruits);
fruits.splice(2, 1, "Lemon", "Kiwi"); // add 2 remove 1
console.log(fruits);
