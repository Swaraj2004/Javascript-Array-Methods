// The values() method returns an Array Iterator object with the values of an array.
// The values() method does not change the original array.

const fruits = ["Banana", "Orange", "Apple", "Mango"];
const values = fruits.values();

for (let x of values) {
  console.log(x);
}
// Output:
// Banana
// Orange
// Apple
// Mango

// The iterable returned from values() is not reusable.
// When next().done = true or currentIndex > length,
// the for...of loop ends, and further iterating it has no effect.
for (let x of values) {
  console.log(x);
}
// undefined
