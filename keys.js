// The keys() method returns an Array Iterator object with the keys of an array.
// The keys() method does not change the original array.

const fruits = ["Banana", "Orange", "Apple", "Mango"];
const keys = fruits.keys();

for (let x of keys) {
  console.log(x);
}
