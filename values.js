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
