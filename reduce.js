// The reduce() method executes a reducer function for array element.
// The reduce() method returns a single value: the function's accumulated result.
// The reduce() method does not execute the function for empty array elements.
// The reduce() method does not change the original array.
// At the first callback, there is no return value from the previous callback.
// Normally, array element 0 is used as initial value, and the iteration starts from array element 1.
// If an initial value is supplied, this is used, and the iteration starts from array element 0.
// Syntax: array.reduce(function(accumulator, currentValue, currentIndex, arr), initialValue)

// Round all the numbers and display the sum
const numbers = [15.5, 2.3, 1.1, 4.7];
const total = numbers.reduce(getSum, 0);
function getSum(total, num) {
  return total + Math.round(num);
}
console.log(`Total: ${total}`);

// Find max value from the array
const nums = [1, 4, 2, 6, 9, 7];
const max = nums.reduce(callback, -Infinity);
function callback(acc, value) {
  if (acc > value) return acc;
  else return value;
}
console.log(`Max: ${max}`);
