// The every() method executes a function for each array element.
// The every() method returns true if the function returns true for all elements.
// The every() method returns false if the function returns false for one element.
// The every() method does not execute the function for empty elements.
// The every() method does not change the original array.
// Syntax: array.every(function(currentValue, index, arr), thisValue)

const ages = [32, 33, 16, 40];
const output = ages.every((age) => age > 18);
console.log(output);

// Check if all answers are the same
const survey = [
  { name: "Steve", answer: "Yes" },
  { name: "Jessica", answer: "Yes" },
  { name: "Peter", answer: "Yes" },
  { name: "Elaine", answer: "No" },
];
let result = survey.every(isSameAnswer);
function isSameAnswer(el, index, arr) {
  if (index === 0) {
    return true;
  } else {
    return el.answer === arr[index - 1].answer;
  }
}
console.log(result);
