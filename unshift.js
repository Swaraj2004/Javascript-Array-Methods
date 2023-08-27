// The unshift() method adds new elements to the beginning of an array.
// The unshift() method overwrites the original array.
// The unshift() method returns the new length.

const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.unshift("Lemon", "Pineapple")); // 6
console.log(fruits); // [ 'Lemon', 'Pineapple', 'Banana', 'Orange', 'Apple', 'Mango' ]
