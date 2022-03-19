// Count of positives / sum of negatives
function countPositivesSumNegatives(input) {
  if (!Array.isArray(input) || input.length === 0) {
    return [];
  }
  let count = 0;
  let sum = 0;
  let arr = [];
  input.forEach((n) => {
    if (n > 0) {
      count++;
    } else if (n < 0) {
      sum += n;
    }
  });
  arr.push(count, sum);
  return arr;
}
// console.log(countPositivesSumNegatives());

// ##################################################

// MakeUpperCase
function makeUpperCase(str) {
  return str
    .split("")
    .map((s) => s.toUpperCase())
    .join("");
}
// console.log(makeUpperCase("aws"));

// ##################################################
// Fake Binary
function fakeBin(x) {
  return x
    .split("")
    .map((s) => {
      return Number(s) < 5 ? "0" : "1";
    })
    .join("");
}
console.log(fakeBin("45385593107843568"));
