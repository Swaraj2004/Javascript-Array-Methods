// The toSorted() method is the copying version of the sort() method.
// It returns a new array with the elements sorted in ascending order.

const months = ["Mar", "Jan", "Feb", "Dec"];
const sortedMonths = months.toSorted();
console.log(sortedMonths); // [ 'Dec', 'Feb', 'Jan', 'Mar' ]
console.log(months); // [ 'Mar', 'Jan', 'Feb', 'Dec' ]

const values = [1, 10, 21, 2];
const sortedValues = values.toSorted((a, b) => a - b);
console.log(sortedValues); // [ 1, 2, 10, 21 ]
console.log(values); // [ 1, 10, 21, 2 ]

console.log(["a", "c", , "b"].toSorted()); // [ 'a', 'b', 'c', undefined ]
console.log([, undefined, "a", "b"].toSorted()); // [ "a", "b", undefined, undefined ]
