// The reduceRight() method executes a reducer function for each array element.
// The reduceRight() method works from right to left.
// The reduceRight() method returns a single value: the function's accumulated result.
// The reduceRight() method does not execute the function for empty elements.
// At the first callback, there is no return value from the previous callback.
// Normally, the last array element is used as initial value, and the iteration starts from the element before.
// If an initial value is supplied, this is used, and the iteration starts from last element.
// Syntax: array.reduceRight(function(total, currentValue, currentIndex, arr), initialValue)

// Subtract the numbers in the array, starting from the end
const numbers = [175, 50, 25];
const result = numbers.reduceRight((total, num) => total - num);
console.log(result); // "-200"

// reduce vs reduceRight
const a = ["1", "2", "3", "4", "5"];
const left = a.reduce((prev, cur) => prev + cur);
const right = a.reduceRight((prev, cur) => prev + cur);
console.log(left); // "12345"
console.log(right); // "54321"
