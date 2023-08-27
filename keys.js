// The keys() method returns an Array Iterator object with the keys of an array.
// The keys() method does not change the original array.

const fruits = ["Banana", "Orange", "Apple", "Mango"];
const keys = fruits.keys();

for (let x of keys) {
  console.log(x);
}
// Output:
// 0
// 1
// 2
// 3

// The iterable returned from keys() is not reusable.
// When next().done = true or currentIndex > length,
// the for...of loop ends, and further iterating it has no effect.
for (let x of keys) {
  console.log(x);
}
// undefined
