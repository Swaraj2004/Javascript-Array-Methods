// The with() method is the copying version of using
// the bracket notation to change the value of a given index.
// It returns a new array with the element at the
// given index replaced with the given value.

const arr = [1, 2, 3, 4, 5];
console.log(arr.with(2, 6)); // [1, 2, 6, 4, 5]
console.log(arr); // [1, 2, 3, 4, 5]
