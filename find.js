// The find() method returns the value of the first element that passes a test.
// The find() method executes a function for each array element.
// The find() method returns undefined if no elements are found.
// The find() method does not execute the function for empty elements.
// The find() method does not change the original array.
// Syntax: array.find(function(currentValue, index, arr),thisValue)

const ages = [3, 10, 18, 20];
const output = ages.find((age) => age > 18);
console.log(output);

const persons = [
  {
    name: "John",
    age: 24,
  },
  {
    name: "Lisa",
    age: 22,
  },
  {
    name: "Ivan",
    age: 18,
  },
];

const result = persons.find(findLisa);
function findLisa(person) {
  return person.name === "Lisa";
}
console.log(result);
