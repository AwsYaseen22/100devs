// Vowel Count

function getCount(str) {
  return str.match(/[aeiou]/gi) ? str.match(/[aeiou]/gi).length : 0;
}
// console.log(getCount("my pyx"));

// ##################################################

// Fundamentals: Return

function add(a, b) {
  return a + b;
}

function divide(a, b) {
  return a / b;
}

function multiply(a, b) {
  return a * b;
}

function mod(a, b) {
  return a % b;
}

function exponent(a, b) {
  return a ** b;
}

function subt(a, b) {
  return a - b;
}

// ##################################################

// Get the Middle Character

function getMiddle(s) {
  const leng = s.length;
  return leng % 2 === 0
    ? s.slice(leng / 2 - 1, leng / 2 + 1)
    : s.slice(leng / 2, leng / 2 + 1);
}
console.log(getMiddle("A"));
// ##################################################

// You're a square!
// was 859
var isSquare = function (n) {
  return Number.isInteger(Math.sqrt(n));
};

// ##################################################
