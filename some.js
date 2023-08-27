// The some() method checks if any array elements pass a test (provided as a callback function).
// The some() method executes the callback function once for each array element.
// The some() method returns true (and stops) if the function returns true for one of the array elements.
// The some() method returns false if the function returns false for all of the array elements.
// The some() method does not execute the function for empty array elements.
// The some() method does not change the original array.
// Syntaxx: array.some(function(value, index, arr), this)

const ages = [3, 10, 18, 20];
const output = ages.some((age) => age > 18);
console.log(output); // true

// Check if some answers are the different
const survey = [
  { name: "Steve", answer: "Yes" },
  { name: "Jessica", answer: "Yes" },
  { name: "Peter", answer: "Yes" },
  { name: "Elaine", answer: "No" },
];
let result = survey.some(isSameAnswer);
function isSameAnswer(el, index, arr) {
  if (index === 0) {
    return false;
  } else {
    return el.answer !== arr[index - 1].answer;
  }
}
console.log(result); // true
