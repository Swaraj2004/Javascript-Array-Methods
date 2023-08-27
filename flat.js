// The flat() method concatenates sub-array elements.
// The flat() method creates a new array
// Syntax: array.flat(depth)

const myArr = [
  [1, 2],
  [3, 4],
  [5, 6],
];
const newArr = myArr.flat();
console.log(newArr); // [ 1, 2, 3, 4, 5, 6 ]

const myArr2 = [1, 2, [3, [4, 5, 6], 7], 8];
const newArr2 = myArr2.flat(2);
console.log(newArr2); // [ 1, 2, 3, 4, 5, 6, 7, 8 ]
