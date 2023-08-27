// The entries() method returns an Array Iterator object with key/value pairs:
// [0, "Banana"]
// [1, "Orange"]
// The entries() method does not change the original array.

const fruits = ["Banana", "Orange", "Apple", "Mango"];
const iterator = fruits.entries();

for (let x of iterator) {
  console.log(x);
}
// Output:
// [ 0, 'Banana' ]
// [ 1, 'Orange' ]
// [ 2, 'Apple' ]
// [ 3, 'Mango' ]

for (const [i, el] of fruits.entries()) {
  console.log(i, el);
}
// Output:
// 0 Banana
// 1 Orange
// 2 Apple
// 3 Mango
