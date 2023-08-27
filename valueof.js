// The valueOf() method returns the array itself.
// The valueOf() method does not change the original array.
// fruits.valueOf() returns the same as fruits.

const fruits = ["Banana", "Orange", "Apple", "Mango"];
const myArray = fruits.valueOf();
console.log(myArray); // [ 'Banana', 'Orange', 'Apple', 'Mango' ]

// fruits.valueOf() returns the same as fruits
const myArr = fruits;
console.log(myArr); // [ 'Banana', 'Orange', 'Apple', 'Mango' ]
