function fillInNumbers(n) {
  return Array(n)
    .fill(0)
    .map((_, index) => index + 1);
}
console.log(fillInNumbers(10));
