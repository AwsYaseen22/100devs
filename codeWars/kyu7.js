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
// console.log(getMiddle("A"));
// ##################################################

// You're a square!
// was 859
var isSquare = function (n) {
  return Number.isInteger(Math.sqrt(n));
};

// ##################################################

// Jaden Casing Strings

String.prototype.toJadenCase = function () {
  return this.split(" ")
    .map((w) => {
      let first = w.slice(0, 1).toUpperCase();
      return first + w.substring(1);
    })
    .join(" ");
};

// let str = "How can mirrors be real if our eyes aren't real";
// console.log(str.toJadenCase());

// ##################################################

// Shortest Word

function findShort(s) {
  let arr = [];
  s.split(" ").forEach((w) => arr.push(w.length));
  return Math.min(...arr);
}
// console.log(findShort("bitcoin take over the world maybe who knows perhaps"));

// ##################################################

// Exes and Ohs

function XO(str) {
  let x = str.toLowerCase().split("x").length - 1;
  let o = str.toLowerCase().split("o").length - 1;
  return x === o;
}
// console.log(XO("xxOo"));

// ##################################################

// Isograms

function isIsogram(str) {
  let s1 = str.toLowerCase().length;
  let s2 = new Set(str.toLowerCase()).size;
  console.log(s1, s2);
  return s1 === s2;
}
// console.log(isIsogram("Dermatoglyphics"));
// console.log(isIsogram("isogram"));
// console.log(isIsogram("aba"));
// console.log(isIsogram("moOse"));
// console.log(isIsogram("isIsogram"));
// console.log(isIsogram(""));

// ##################################################

// Complementary DNA

function DNAStrand(dna) {
  const dnaFull = {
    A: "T",
    T: "A",
    G: "C",
    C: "G",
  };
  return dna
    .split("")
    .map((l) => dnaFull[l])
    .join("");
}
// console.log(DNAStrand("AAAA"));
// ##################################################

// Beginner Series #3 Sum of Numbers

function getSum(a, b) {
  const max = Math.max(a, b);
  const min = Math.min(a, b);
  let result = 0;
  for (let i = min; i <= max; i++) {
    result += i;
  }
  return result;
}

// ##################################################
