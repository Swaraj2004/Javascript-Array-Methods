// The flatMap() method maps all array elements and creates a new flat array.
// flatMap() creates a new array from calling a function for every array element.
// flatMap() does not execute the function for empty elements.
// flatMap() does not change the original array.
// Syntax: array.flatMap(function(currentValue, index, arr), thisValue)

const myArr = [1, 2, 3, 4, 5, 6];
const newArr = myArr.flatMap((x) => [x * 2]);
console.log(newArr);

// map vs flatMap
const arr1 = ["it's Sunny in", "", "California"];
console.log(arr1.map((x) => x.split(" ")));
// [["it's","Sunny","in"],[""],["California"]]
console.log(arr1.flatMap((x) => x.split(" ")));
// ["it's","Sunny","in", "", "California"]
