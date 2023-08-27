// The splice() method adds and/or removes array elements.
// The splice() method overwrites the original array.
// Syntax: array.splice(index, howmany, item1, ....., itemX)

const fruits = ["Banana", "Orange", "Apple", "Mango"];
// add fruits
fruits.splice(2, 0, "Lemon", "Kiwi");
console.log(fruits); // [ 'Banana', 'Orange', 'Lemon', 'Kiwi', 'Apple', 'Mango' ]
// remove fruits
fruits.splice(2, 2);
console.log(fruits); // [ 'Banana', 'Orange', 'Apple', 'Mango' ]
// add 2 remove 1 fruits
fruits.splice(2, 1, "Lemon", "Kiwi");
console.log(fruits); // [ 'Banana', 'Orange', 'Lemon', 'Kiwi', 'Mango' ]
