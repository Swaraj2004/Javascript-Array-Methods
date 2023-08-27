// The Array.from() method returns an array from any object with a length property.
// The Array.from() method returns an array from any iterable object.
// Array.from() is a static property of the JavaScript Array object.
// You can only use it as Array.from().
// Using x.from(), where x is an array will return undefined.
// Syntax: Array.from(object, mapFunction, thisValue)

const result = Array.from("ABCDEFG");
console.log(result);

const str = "12345678";
const output = Array.from(str, mapFn);
function mapFn(item) {
  return Number(item);
}
console.log(output);

// Alternatively
const res = Array.from(str, Number);
console.log(res);
