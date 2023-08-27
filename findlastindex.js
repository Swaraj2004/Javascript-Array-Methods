// The findLastIndex() method executes a function for each array element.
// The findLastIndex() method returns the index (position) of the last element that passes a test.
// The findLastIndex() method returns -1 if no match is found.
// The findLastIndex() method does not execute the function for empty array elements.
// The findLastIndex() method does not change the original array.
// Syntax: array.findLastIndex(function(currentValue, index, arr), thisValue)

const ages = [3, 18, 20, 10, 22];
const output = ages.findLastIndex((age) => age > 18);
console.log(output); // 4
