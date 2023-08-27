// The copyWithin() method copies array elements to another position in the array.
// The copyWithin() method overwrites the existing values.
// The copyWithin() method does not add items to the array.
// Syntax: array.copyWithin(target, start, end)

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.copyWithin(2, 0);
console.log(fruits); // [ 'Banana', 'Orange', 'Banana', 'Orange' ]

const newFruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
newFruits.copyWithin(2, 0, 2);
console.log(newFruits); // [ 'Banana', 'Orange', 'Banana', 'Orange', 'Kiwi' ]
