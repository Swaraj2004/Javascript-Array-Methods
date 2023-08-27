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

// The iterable returned from entries() is not reusable.
// When next().done = true or currentIndex > length,
// the for...of loop ends, and further iterating it has no effect.
for (let x of iterator) {
  console.log(x);
}
// undefined

for (const [i, el] of fruits.entries()) {
  console.log(i, el);
}
// Output:
// 0 Banana
// 1 Orange
// 2 Apple
// 3 Mango
