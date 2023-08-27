// The findIndex() method executes a function for each array element.
// The findIndex() method returns the index (position) of the first element that passes a test.
// The findIndex() method returns -1 if no match is found.
// The findIndex() method does not execute the function for empty array elements.
// The findIndex() method does not change the original array.
// Syntax: array.findIndex(function(currentValue, index, arr), thisValue)

const ages = [3, 10, 18, 20];
const output = ages.findIndex((age) => age > 18);
console.log(output); // 3
