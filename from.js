// The Array.from() method returns an array from any object with a length property.
// The Array.from() method returns an array from any iterable object.
// Array.from() is a static property of the JavaScript Array object.
// You can only use it as Array.from().
// Using x.from(), where x is an array will return undefined.
// Syntax: Array.from(object, mapFunction, thisValue)

const result = Array.from("ABCDEFG");
console.log(result); // [ 'A', 'B', 'C', 'D', 'E', 'F', 'G' ]

const str = "12345678";
const output = Array.from(str, mapFn);
function mapFn(item) {
  return Number(item);
}
console.log(output); // [ 1, 2, 3, 4, 5, 6, 7, 8 ]

// Alternatively
const res = Array.from(str, Number);
console.log(res); // [ 1, 2, 3, 4, 5, 6, 7, 8 ]
