// The concat() method concatenates (joins) two or more arrays.
// The concat() method returns a new array, containing the joined arrays.
// The concat() method does not change the existing arrays.
// Syntax: array1.concat(array2, array3, ..., arrayX)

const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin"];
const children = arr1.concat(arr2, arr3);
console.log(children);

const a1 = [1, 2, [3, 4]];
const a2 = [[5, 6], 7, 8];
const a3 = a1.concat(a2);
console.log(a3);

// Can also use it to push elments
const a4 = a1.concat(5, 6);
console.log(a4);
