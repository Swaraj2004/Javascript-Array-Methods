// The isArray() method returns true if an object is an array, otherwise false.
// Array.isArray() is a static property of the JavaScript Array object.
// You can only use it as Array.isArray().
// Using x.isArray(), where x is an array will return undefined.

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let result = Array.isArray(fruits);
console.log(result); // true
let text = "W3Schools";
result = Array.isArray(text);
console.log(result); // false
