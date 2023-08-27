const numbers = [1, 2, 3, 2, 1, 4, 5, 4, 6, 5];

// Method 1
const output = numbers.filter(
  (value, index, arr) => arr.indexOf(value) === index
);
console.log(output);

// Method 2
const result = Array.from(new Set(numbers));
console.log(result);
