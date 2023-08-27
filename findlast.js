// The findLast() method returns the value of the last element that passes a test.
// The findLast() method executes a function for each array element.
// The findLast() method returns undefined if no elements are found.
// The findLast() method does not execute the function for empty elements.
// The findLast() method does not change the original array.
// Syntax: array.findLast(function(currentValue, index, arr),thisValue)

const inventory = [
  { name: "apples", quantity: 2 },
  { name: "bananas", quantity: 0 },
  { name: "fish", quantity: 1 },
  { name: "cherries", quantity: 5 },
];

function isNotEnough(item) {
  return item.quantity < 2;
}
const result = inventory.findLast(isNotEnough);
console.log(result); // { name: "fish", quantity: 1 }
