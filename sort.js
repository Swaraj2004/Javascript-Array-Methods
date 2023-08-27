// The sort() sorts the elements of an array.
// The sort() overwrites the original array.
// The sort() sorts the elements as strings in alphabetical and ascending order.

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
console.log(fruits); // [ 'Apple', 'Banana', 'Mango', 'Orange' ]

// Sorting alphabetically works well for strings ("Apple" comes before "Banana").
// But, sorting numbers can produce incorrect results.
// "25" is bigger than "100", because "2" is bigger than "1".

const points = [40, 100, 1, 5, 25, 10];
// Sort in ascending order
points.sort((a, b) => a - b);
console.log(points); // [ 1, 5, 10, 25, 40, 100 ]
// Sort in descending order
points.sort((a, b) => b - a);
console.log(points); // [ 100, 40, 25, 10, 5, 1 ]
