// The Array.of() static method creates a new Array instance from
// a variable number of arguments, regardless of number or type of the arguments.

console.log(Array.of(1, 2, 3)); // [1, 2, 3]
console.log(Array.of(undefined)); // [undefined]

// The difference between Array.of() and the Array() constructor is in the
// handling of single arguments: Array.of(7) creates an array with a single
// element, 7, whereas Array(7) creates an empty array with a length property of 7.
// (That implies an array of 7 empty slots, not slots with actual undefined values.)

console.log(Array.of(7)); // [7]
console.log(Array(7)); // [ <7 empty items> ]
