// ##################################################

// Holiday VI - Shark Pontoon

function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin) {
  if (dolphin) {
    sharkSpeed = sharkSpeed / 2;
  }
  let yourTime = pontoonDistance / youSpeed;
  let sharkTime = sharkDistance / sharkSpeed;

  return yourTime < sharkTime ? "Alive!" : "Shark Bait!";
}
// console.log(shark(7, 8, 3, 4, true));
// ##################################################

// Return the day
function whatday(num) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return days[num - 1]
    ? days[num - 1]
    : "Wrong, please enter a number between 1 and 7";
}

// ##################################################

// Leonardo Dicaprio and Oscars

function leo(oscar) {
  if (oscar === 88) {
    return "Leo finally won the oscar! Leo is happy";
  } else if (oscar === 86) {
    return "Not even for Wolf of wallstreet?!";
  } else if (oscar < 88) {
    return "When will you give Leo an Oscar?";
  } else if (oscar > 88) {
    return "Leo got one already!";
  }
}

// ##################################################

// Are arrow functions odd?

function odds(values) {
  return values.filter((n) => n % 2 !== 0);
}

// ##################################################

//  Sum of Multiples

function sumMul(n, m) {
  if (m <= 0) {
    return "INVALID";
  }
  let arr = [];
  for (let i = n; i < m; i += n) {
    arr.push(i);
  }
  return arr.reduce((a, c) => a + c, 0);
}

// console.log(sumMul(4, -7));
// ##################################################

// simple calculator

function calculator(a, b, sign) {
  let op = {
    "+": () => a + b,
    "-": () => a - b,
    "*": () => a * b,
    "/": () => a / b,
  };
  if (typeof a !== "number" || typeof b !== "number" || !(sign in op)) {
    return "unknown value";
  } else {
    return op[sign]();
  }
}
// console.log(calculator(1, 2, "+"));

// ##################################################

// Remove the time

function shortenToDate(longDate) {
  return longDate.split(",")[0];
}

// ##################################################

// A Strange Trip to the Market

function isLockNessMonster(s) {
  return (
    s.indexOf("tree fiddy") > -1 ||
    s.indexOf("3.50") > -1 ||
    s.indexOf("three fifty") > -1
  );
}

// ##################################################

// Thinkful - Number Drills: Blue and red marbles

function guessBlue(blueStart, redStart, bluePulled, redPulled) {
  let blueRemains = blueStart - bluePulled;
  let redRemains = redStart - redPulled;
  return blueRemains / (blueRemains + redRemains);
}

// console.log(guessBlue(5, 7, 4, 3));

// ##################################################

// For UFC Fans (Total Beginners): Conor McGregor vs George Saint Pierre

var quote = function (fighter) {
  if (fighter.toLowerCase() === "george saint pierre") {
    return "I am not impressed by your performance.";
  } else if (fighter.toLowerCase() === "conor mcgregor") {
    return "I'd like to take this chance to apologize.. To absolutely NOBODY!";
  }
};

// ##################################################

// Exclamation marks series #4: Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string

function remove(string) {
  return (
    string
      .split("")
      .filter((c) => c !== "!")
      .join("") + "!"
  );
}
// console.log(remove("!!!!Hi!!!"));
// ##################################################

// Grasshopper - Combine strings

function combineNames(fName, lName) {
  return `${fName} ${lName}`;
}

// ##################################################

// Compare within margin

// Skipped, the solution unlocked
function closeCompare(a, b, margin) {
  // return Math.abs(a - b) <= margin ? 0 : a < b ? -1 : 1;
  if (!margin) {
    margin = 0;
  }
  let dif = Math.abs(a - b);
  if (dif <= margin) {
    return 0;
  } else if (a < b) {
    return -1;
  } else {
    return 1;
  }
}

// ##################################################

// No Loops 2 - You only need one

function check(a, x) {
  return a.includes(x);
}

// ##################################################

// Grader
function grader(score) {
  console.log(score);
  switch (true) {
    case score < 0.6 || score > 1:
      return "F";
    case score < 0.7:
      return "D";
    case score < 0.8:
      return "C";
    case score < 0.9:
      return "B";
    case score >= 0.9:
      return "A";
  }
}
// console.log(grader(0.65));
// ##################################################

// Training JS #8: Conditional statement--switch

function howManydays(month) {
  var days;
  switch (true) {
    case [1, 3, 5, 7, 8, 10, 12].includes(month):
      days = 31;
      break;
    case [4, 6, 9, 11].includes(month):
      days = 30;
      break;
    default:
      days = 28;
      break;
  }
  return days;
}

// ##################################################

// Parse float

function parseF(s) {
  return /^[\d.]*$/g.test(s) ? parseFloat(s) : null;
  // without regex
  // return isNaN(parseFloat(s)) ? null : parseFloat(s);
}
// console.log(parseF("234.85"));

// ##################################################

// Price of Mangoes

// 3 2
// n 2*n/3
function mango(quantity, price) {
  // console.log(quantity / 1.5);
  return quantity >= 3 ? Math.ceil(quantity / 1.5) * price : quantity * price;
}
// console.log(mango(31, 11));
// ##################################################

// String cleaning

function stringClean(s) {
  //g.test(s)
  return s.replace(/\d/g, "");
}

// console.log(stringClean("(E3at m2e2!!)"));
// ##################################################

// Training JS #6: Basic data types--Boolean and conditional statements if..else
// var a = 1,
//   b = 2,
//   c = 1;
function trueOrFalse(val) {
  if (val) return "true";
  else return "false";
}

// console.log(trueOrFalse(a === b));
// ##################################################

// Sum of differences in array

function sumOfDifferences(arr) {
  let result = 0;
  console.log(arr.sort((a, b) => b - a));
  arr
    .sort((a, b) => b - a)
    .map((n, i) => {
      if (!isNaN(arr[i + 1])) {
        console.log(n - arr[i + 1]);
        result += n - arr[i + 1];
      }
    });
  return result;
}
// from others solution
// its mind blowing that it solved by max-min thats it
//  return arr.length > 1 ? Math.max(...arr) - Math.min(...arr) : 0;

// console.log(sumOfDifferences([1, 2, 10, 34, 54]));
// console.log(
//   sumOfDifferences([
//     16, -8, -9, 2, 13, 1, -15, 13, -18, 5, 10, 10, 11, -3, -12, -9, 0, 9, -11,
//     6,
//   ])
// );

// ##################################################

// Classy Classes

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  get info() {
    return `${this.name}s age is ${this.age}`;
  }
}

// ##################################################

// Object Oriented Piracy

function Ship(draft, crew) {
  this.draft = draft;
  this.crew = crew;
}

Ship.prototype.isWorthIt = function () {
  let withoutCrew = this.draft - this.crew * 1.5;
  if (withoutCrew > 20) {
    return true;
  } else {
    return false;
  }
};

// ##################################################

// validate code with simple regex

function validateCode(code) {
  return /^[1|2|3]/.test(code);
}
// console.log(validateCode(43512348));

// ##################################################

// "this" is a problem

function NameMe(first, last) {
  this.firstName = first;
  this.lastName = last;
  this.name = this.firstName + " " + this.lastName;
}

// ##################################################

// Is there a vowel in there?

function isVow(a) {
  return a.map((n) =>
    "aeiou".indexOf(String.fromCharCode(n)) !== -1 ? String.fromCharCode(n) : n
  );
}

// ##################################################

// Training JS #10: loop statement --for

function pickIt(arr) {
  var odd = [],
    even = [];
  for (let i = 0; i < arr.length; i++) {
    arr[i] % 2 === 0 ? even.push(arr[i]) : odd.push(arr[i]);
  }

  return [odd, even];
}

// ##################################################

// get ascii value of character

function getASCII(c) {
  return c.charCodeAt();
}

// ##################################################

// Barking mad

function Dog(breed) {
  this.breed = breed;
}

var snoopy = new Dog("Beagle");

Dog.prototype.bark = function () {
  return "Woof";
};

var scoobydoo = new Dog("Great Dane");

// ##################################################

// Who is going to pay for the wall?

function whoIsPaying(name) {
  return name.length > 2 ? [name, name.slice(0, 2)] : [name];
}

// ##################################################

// Find Nearest square number

function nearestSq(n) {
  return Math.round(Math.sqrt(n)) ** 2;
}

// ##################################################

// 8kyu interpreters: HQ9+

function HQ9(code) {
  switch (code) {
    case "H":
      return "Hello World!";
    case "Q":
      return "Q";
    case "9":
      return "99 bottles of beer on the wall, 99 bottles of beer.\nTake one down and pass it around, 98 bottles of beer on the wall.\n98 bottles of beer on the wall, 98 bottles of beer.\nTake one down and pass it around, 97 bottles of beer on the wall.\n97 bottles of beer on the wall, 97 bottles of beer.\nTake one down and pass it around, 96 bottles of beer on the wall.\n96 bottles of beer on the wall, 96 bottles of beer.\nTake one down and pass it around, 95 bottles of beer on the wall.\n95 bottles of beer on the wall, 95 bottles of beer.\nTake one down and pass it around, 94 bottles of beer on the wall.\n94 bottles of beer on the wall, 94 bottles of beer.\nTake one down and pass it around, 93 bottles of beer on the wall.\n93 bottles of beer on the wall, 93 bottles of beer.\nTake one down and pass it around, 92 bottles of beer on the wall.\n92 bottles of beer on the wall, 92 bottles of beer.\nTake one down and pass it around, 91 bottles of beer on the wall.\n91 bottles of beer on the wall, 91 bottles of beer.\nTake one down and pass it around, 90 bottles of beer on the wall.\n90 bottles of beer on the wall, 90 bottles of beer.\nTake one down and pass it around, 89 bottles of beer on the wall.\n89 bottles of beer on the wall, 89 bottles of beer.\nTake one down and pass it around, 88 bottles of beer on the wall.\n88 bottles of beer on the wall, 88 bottles of beer.\nTake one down and pass it around, 87 bottles of beer on the wall.\n87 bottles of beer on the wall, 87 bottles of beer.\nTake one down and pass it around, 86 bottles of beer on the wall.\n86 bottles of beer on the wall, 86 bottles of beer.\nTake one down and pass it around, 85 bottles of beer on the wall.\n85 bottles of beer on the wall, 85 bottles of beer.\nTake one down and pass it around, 84 bottles of beer on the wall.\n84 bottles of beer on the wall, 84 bottles of beer.\nTake one down and pass it around, 83 bottles of beer on the wall.\n83 bottles of beer on the wall, 83 bottles of beer.\nTake one down and pass it around, 82 bottles of beer on the wall.\n82 bottles of beer on the wall, 82 bottles of beer.\nTake one down and pass it around, 81 bottles of beer on the wall.\n81 bottles of beer on the wall, 81 bottles of beer.\nTake one down and pass it around, 80 bottles of beer on the wall.\n80 bottles of beer on the wall, 80 bottles of beer.\nTake one down and pass it around, 79 bottles of beer on the wall.\n79 bottles of beer on the wall, 79 bottles of beer.\nTake one down and pass it around, 78 bottles of beer on the wall.\n78 bottles of beer on the wall, 78 bottles of beer.\nTake one down and pass it around, 77 bottles of beer on the wall.\n77 bottles of beer on the wall, 77 bottles of beer.\nTake one down and pass it around, 76 bottles of beer on the wall.\n76 bottles of beer on the wall, 76 bottles of beer.\nTake one down and pass it around, 75 bottles of beer on the wall.\n75 bottles of beer on the wall, 75 bottles of beer.\nTake one down and pass it around, 74 bottles of beer on the wall.\n74 bottles of beer on the wall, 74 bottles of beer.\nTake one down and pass it around, 73 bottles of beer on the wall.\n73 bottles of beer on the wall, 73 bottles of beer.\nTake one down and pass it around, 72 bottles of beer on the wall.\n72 bottles of beer on the wall, 72 bottles of beer.\nTake one down and pass it around, 71 bottles of beer on the wall.\n71 bottles of beer on the wall, 71 bottles of beer.\nTake one down and pass it around, 70 bottles of beer on the wall.\n70 bottles of beer on the wall, 70 bottles of beer.\nTake one down and pass it around, 69 bottles of beer on the wall.\n69 bottles of beer on the wall, 69 bottles of beer.\nTake one down and pass it around, 68 bottles of beer on the wall.\n68 bottles of beer on the wall, 68 bottles of beer.\nTake one down and pass it around, 67 bottles of beer on the wall.\n67 bottles of beer on the wall, 67 bottles of beer.\nTake one down and pass it around, 66 bottles of beer on the wall.\n66 bottles of beer on the wall, 66 bottles of beer.\nTake one down and pass it around, 65 bottles of beer on the wall.\n65 bottles of beer on the wall, 65 bottles of beer.\nTake one down and pass it around, 64 bottles of beer on the wall.\n64 bottles of beer on the wall, 64 bottles of beer.\nTake one down and pass it around, 63 bottles of beer on the wall.\n63 bottles of beer on the wall, 63 bottles of beer.\nTake one down and pass it around, 62 bottles of beer on the wall.\n62 bottles of beer on the wall, 62 bottles of beer.\nTake one down and pass it around, 61 bottles of beer on the wall.\n61 bottles of beer on the wall, 61 bottles of beer.\nTake one down and pass it around, 60 bottles of beer on the wall.\n60 bottles of beer on the wall, 60 bottles of beer.\nTake one down and pass it around, 59 bottles of beer on the wall.\n59 bottles of beer on the wall, 59 bottles of beer.\nTake one down and pass it around, 58 bottles of beer on the wall.\n58 bottles of beer on the wall, 58 bottles of beer.\nTake one down and pass it around, 57 bottles of beer on the wall.\n57 bottles of beer on the wall, 57 bottles of beer.\nTake one down and pass it around, 56 bottles of beer on the wall.\n56 bottles of beer on the wall, 56 bottles of beer.\nTake one down and pass it around, 55 bottles of beer on the wall.\n55 bottles of beer on the wall, 55 bottles of beer.\nTake one down and pass it around, 54 bottles of beer on the wall.\n54 bottles of beer on the wall, 54 bottles of beer.\nTake one down and pass it around, 53 bottles of beer on the wall.\n53 bottles of beer on the wall, 53 bottles of beer.\nTake one down and pass it around, 52 bottles of beer on the wall.\n52 bottles of beer on the wall, 52 bottles of beer.\nTake one down and pass it around, 51 bottles of beer on the wall.\n51 bottles of beer on the wall, 51 bottles of beer.\nTake one down and pass it around, 50 bottles of beer on the wall.\n50 bottles of beer on the wall, 50 bottles of beer.\nTake one down and pass it around, 49 bottles of beer on the wall.\n49 bottles of beer on the wall, 49 bottles of beer.\nTake one down and pass it around, 48 bottles of beer on the wall.\n48 bottles of beer on the wall, 48 bottles of beer.\nTake one down and pass it around, 47 bottles of beer on the wall.\n47 bottles of beer on the wall, 47 bottles of beer.\nTake one down and pass it around, 46 bottles of beer on the wall.\n46 bottles of beer on the wall, 46 bottles of beer.\nTake one down and pass it around, 45 bottles of beer on the wall.\n45 bottles of beer on the wall, 45 bottles of beer.\nTake one down and pass it around, 44 bottles of beer on the wall.\n44 bottles of beer on the wall, 44 bottles of beer.\nTake one down and pass it around, 43 bottles of beer on the wall.\n43 bottles of beer on the wall, 43 bottles of beer.\nTake one down and pass it around, 42 bottles of beer on the wall.\n42 bottles of beer on the wall, 42 bottles of beer.\nTake one down and pass it around, 41 bottles of beer on the wall.\n41 bottles of beer on the wall, 41 bottles of beer.\nTake one down and pass it around, 40 bottles of beer on the wall.\n40 bottles of beer on the wall, 40 bottles of beer.\nTake one down and pass it around, 39 bottles of beer on the wall.\n39 bottles of beer on the wall, 39 bottles of beer.\nTake one down and pass it around, 38 bottles of beer on the wall.\n38 bottles of beer on the wall, 38 bottles of beer.\nTake one down and pass it around, 37 bottles of beer on the wall.\n37 bottles of beer on the wall, 37 bottles of beer.\nTake one down and pass it around, 36 bottles of beer on the wall.\n36 bottles of beer on the wall, 36 bottles of beer.\nTake one down and pass it around, 35 bottles of beer on the wall.\n35 bottles of beer on the wall, 35 bottles of beer.\nTake one down and pass it around, 34 bottles of beer on the wall.\n34 bottles of beer on the wall, 34 bottles of beer.\nTake one down and pass it around, 33 bottles of beer on the wall.\n33 bottles of beer on the wall, 33 bottles of beer.\nTake one down and pass it around, 32 bottles of beer on the wall.\n32 bottles of beer on the wall, 32 bottles of beer.\nTake one down and pass it around, 31 bottles of beer on the wall.\n31 bottles of beer on the wall, 31 bottles of beer.\nTake one down and pass it around, 30 bottles of beer on the wall.\n30 bottles of beer on the wall, 30 bottles of beer.\nTake one down and pass it around, 29 bottles of beer on the wall.\n29 bottles of beer on the wall, 29 bottles of beer.\nTake one down and pass it around, 28 bottles of beer on the wall.\n28 bottles of beer on the wall, 28 bottles of beer.\nTake one down and pass it around, 27 bottles of beer on the wall.\n27 bottles of beer on the wall, 27 bottles of beer.\nTake one down and pass it around, 26 bottles of beer on the wall.\n26 bottles of beer on the wall, 26 bottles of beer.\nTake one down and pass it around, 25 bottles of beer on the wall.\n25 bottles of beer on the wall, 25 bottles of beer.\nTake one down and pass it around, 24 bottles of beer on the wall.\n24 bottles of beer on the wall, 24 bottles of beer.\nTake one down and pass it around, 23 bottles of beer on the wall.\n23 bottles of beer on the wall, 23 bottles of beer.\nTake one down and pass it around, 22 bottles of beer on the wall.\n22 bottles of beer on the wall, 22 bottles of beer.\nTake one down and pass it around, 21 bottles of beer on the wall.\n21 bottles of beer on the wall, 21 bottles of beer.\nTake one down and pass it around, 20 bottles of beer on the wall.\n20 bottles of beer on the wall, 20 bottles of beer.\nTake one down and pass it around, 19 bottles of beer on the wall.\n19 bottles of beer on the wall, 19 bottles of beer.\nTake one down and pass it around, 18 bottles of beer on the wall.\n18 bottles of beer on the wall, 18 bottles of beer.\nTake one down and pass it around, 17 bottles of beer on the wall.\n17 bottles of beer on the wall, 17 bottles of beer.\nTake one down and pass it around, 16 bottles of beer on the wall.\n16 bottles of beer on the wall, 16 bottles of beer.\nTake one down and pass it around, 15 bottles of beer on the wall.\n15 bottles of beer on the wall, 15 bottles of beer.\nTake one down and pass it around, 14 bottles of beer on the wall.\n14 bottles of beer on the wall, 14 bottles of beer.\nTake one down and pass it around, 13 bottles of beer on the wall.\n13 bottles of beer on the wall, 13 bottles of beer.\nTake one down and pass it around, 12 bottles of beer on the wall.\n12 bottles of beer on the wall, 12 bottles of beer.\nTake one down and pass it around, 11 bottles of beer on the wall.\n11 bottles of beer on the wall, 11 bottles of beer.\nTake one down and pass it around, 10 bottles of beer on the wall.\n10 bottles of beer on the wall, 10 bottles of beer.\nTake one down and pass it around, 9 bottles of beer on the wall.\n9 bottles of beer on the wall, 9 bottles of beer.\nTake one down and pass it around, 8 bottles of beer on the wall.\n8 bottles of beer on the wall, 8 bottles of beer.\nTake one down and pass it around, 7 bottles of beer on the wall.\n7 bottles of beer on the wall, 7 bottles of beer.\nTake one down and pass it around, 6 bottles of beer on the wall.\n6 bottles of beer on the wall, 6 bottles of beer.\nTake one down and pass it around, 5 bottles of beer on the wall.\n5 bottles of beer on the wall, 5 bottles of beer.\nTake one down and pass it around, 4 bottles of beer on the wall.\n4 bottles of beer on the wall, 4 bottles of beer.\nTake one down and pass it around, 3 bottles of beer on the wall.\n3 bottles of beer on the wall, 3 bottles of beer.\nTake one down and pass it around, 2 bottles of beer on the wall.\n2 bottles of beer on the wall, 2 bottles of beer.\nTake one down and pass it around, 1 bottle of beer on the wall.\n1 bottle of beer on the wall, 1 bottle of beer.\nTake one down and pass it around, no more bottles of beer on the wall.\nNo more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.";
    default:
      break;
  }
}

// ##################################################

// BASIC: Making Six Toast.

function sixToast(num) {
  return num > 6 ? num - 6 : 6 - num;
}

// ##################################################

// NBA full 48 minutes average

function pointsPer48(ppg, mpg) {
  if (ppg === 0 || mpg === 0) {
    return 0;
  }
  return Number(((ppg * 48) / mpg).toFixed(1));
}
// console.log(pointsPer48(12, 20));
// ##################################################

// Define a card suit
let deck = [
  "2♣",
  "3♣",
  "4♣",
  "5♣",
  "6♣",
  "7♣",
  "8♣",
  "9♣",
  "10♣",
  "J♣",
  "Q♣",
  "K♣",
  "A♣",
  "2♦",
  "3♦",
  "4♦",
  "5♦",
  "6♦",
  "7♦",
  "8♦",
  "9♦",
  "10♦",
  "J♦",
  "Q♦",
  "K♦",
  "A♦",
  "2♥",
  "3♥",
  "4♥",
  "5♥",
  "6♥",
  "7♥",
  "8♥",
  "9♥",
  "10♥",
  "J♥",
  "Q♥",
  "K♥",
  "A♥",
  "2♠",
  "3♠",
  "4♠",
  "5♠",
  "6♠",
  "7♠",
  "8♠",
  "9♠",
  "10♠",
  "J♠",
  "Q♠",
  "K♠",
  "A♠",
];
function defineSuit(card) {
  switch (card[card.length - 1]) {
    case "♣":
      return "clubs";
    case "♦":
      return "diamonds";
    case "♥":
      return "hearts";
    case "♠":
      return "spades";
  }
}

// console.log(defineSuit("10♥"));

// ##################################################

// Find out whether the shape is a cube

var cubeChecker = function (volume, side) {
  if (volume <= 0 || side <= 0) {
    return false;
  }
  return side ** 3 === volume ? true : false;
};

// ##################################################

// Geometry Basics: Distance between points in 2D

function distanceBetweenPoints(a, b) {
  let first = Math.pow(b["x"] - a["x"], 2);
  let second = Math.pow(b["y"] - a["y"], 2);
  return Math.sqrt(first + second);
}
// console.log(distanceBetweenPoints({ x: 1, y: 6 }, { x: 4, y: 2 }));
// ##################################################

// Switch/Case - Bug Fixing #6

function evalObject(value) {
  var result = 0;
  switch (value.operation) {
    case "+":
      result = value.a + value.b;
      break;
    case "-":
      result = value.a - value.b;
      break;
    case "/":
      result = value.a / value.b;
      break;
    case "*":
      result = value.a * value.b;
      break;
    case "%":
      result = value.a % value.b;
      break;
    case "^":
      result = Math.pow(value.a, value.b);
      break;
  }
  return result;
}

// ##################################################

// Duck Duck Goose

function duckDuckGoose(players, goose) {
  let index;
  if (goose % players.length === 0) {
    index = players.length - 1;
  } else {
    index = (goose % players.length) - 1;
  }

  console.log(players.length, goose);
  console.log(index);
  return players[index].name;
}

// let arr2 = [
//   { name: "a" },
//   { name: "b" },
//   { name: "c" },
//   { name: "d" },
//   { name: "c" },
//   { name: "e" },
//   { name: "f" },
//   { name: "g" },
//   { name: "h" },
//   { name: "z" },
// ];

// let ind = 2;

// console.log(duckDuckGoose(arr2, ind));
// ##################################################

// Fix your code before the garden dies!

function rainAmount(mm) {
  if (mm < 40) {
    return "You need to give your plant " + (40 - mm) + "mm of water";
  } else {
    return "Your plant has had more than enough water for today!";
  }
}

// ##################################################

// Find the Integral

function integrate(coefficient, exponent) {
  exponent += 1;
  return `${coefficient / exponent}x^${exponent}`;
}

// ##################################################

// Template Strings

var TempleStrings = function (obj, feature) {
  return `${obj} are ${feature}`;
};

// ##################################################

// Fix the Bugs (Syntax) - My First Kata

function myFirstKata(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    return false;
  } else {
    return (a % b) + (b % a);
  }
}

// ##################################################

// Enumerable Magic #1 - True for All?

// function all(arr, fun) {
//   return arr.every(fun);
// }

// ##################################################

// ASCII Total

function uniTotal(string) {
  return string.split("").reduce((a, c) => a + c.charCodeAt(), 0);
}

// ##################################################

// Type of sum

function typeOfSum(a, b) {
  return typeof (a + b);
}

// ##################################################

// Find the Slope

function slope(points) {
  let sl = (points[3] - points[1]) / (points[2] - points[0]);
  return points[2] - points[0] === 0 ? "undefined" : String(Math.floor(sl));
}

// console.log(slope([12, -18, -15, -18]));

// ##################################################

// Count words

function countWords(str) {
  return str.split(/\s/g).filter((e) => /[a-zA-Z0-9]/.test(e)).length;
}
// console.log(countWords("Dear   Victoria, I love  to press   space button."));
// console.log(countWords("d$f#E"));
// console.log(countWords("﻿Hello﻿World "));
// ##################################################

// Name on billboard

function billboard(name, price = 30) {
  let p = price ? price : 30;
  return name.split("").reduce((a, c) => a + p, 0);
}

// ##################################################

// Ensure question

function ensureQuestion(s) {
  return s[s.length - 1] === "?" ? s : s + "?";
}
// console.log(ensureQuestion(""));
// ##################################################

// Classy Extentions

// class Cat extends Animal {
//   speak() {
//     return this.name + " meows.";
//   }
// }

// ##################################################

// Man in the west

function checkTheBucket(bucket) {
  return bucket.some((s) => s === "gold");
}

// ##################################################

// Chuck Norris VII - True or False? (Beginner)

function ifChuckSaysSo() {
  return !true;
}

// ##################################################

// Wilson primes

function amIWilson(p) {
  let multi = 1;
  for (let i = p - 1; i > 0; i--) {
    multi *= i;
  }
  return Number.isInteger((multi + 1) / (p * p));
}
// console.log(amIWilson(5));

// ##################################################

// Square Every Digit

function squareDigits(num) {
  return Number(
    String(num)
      .split("")
      .reduce((a, c) => {
        return a + String(Number(c) ** 2);
      }, "")
  );
}
// console.log(squareDigits(3212));

// ##################################################

// Highest and Lowest

function highAndLow(numbers) {
  let arr = numbers.split(" ");
  return `${Math.max(...arr)} ${Math.min(...arr)}`;
}

// ##################################################

// Disemvowel Trolls

function disemvowel(str) {
  return str.replace(/[aeouiAEOUI]/g, "");
}
// console.log(disemvowel("awsawsuioe"));
// ##################################################

// Logical calculator
// not solved yed
function logicalCalc(array, op) {
  // comp = op==='AND'? '&&' : op==='OR'? '||' : '!=';
  // array.reduce((a,c)=> )
  // if (op === "AND") {
  //   return !array.includes(false);
  // } else if (op === "OR") {
  //   return array.includes(true);
  // } else if (op === "XOR") {
  //   for()
  //   if (array.every((b) => b === array[0])) {
  //     return false;
  //   } else {
  //     return true;
  //   }
  // }
}

// console.log(logicalCalc([true, true, true, false], "AND"));

// console.log(logicalCalc([true, true, true, false], "AND"), false); //false);
// console.log(logicalCalc([true, true, true, false], "OR"), true); //true);
// console.log(logicalCalc([true, true, true, false], "XOR"), true); //true);
// console.log(logicalCalc([true, true, false, false], "AND"), false); //false);
// console.log(logicalCalc([true, true, false, false], "OR"), true); //true);
// console.log(logicalCalc([true, true, false, false], "XOR"), false); //false);
// console.log(logicalCalc([true, false, false, false], "AND"), false); //false);
// console.log(logicalCalc([true, false, false, false], "OR"), true); //true);
// console.log(logicalCalc([true, false, false, false], "XOR"), true); //true);
// console.log(logicalCalc([true, true], "AND"), true); //true);
// console.log(logicalCalc([true, true], "OR"), true); //true);
// console.log(logicalCalc([true, true], "XOR"), false); //false);
// console.log(logicalCalc([false, false], "AND"), false); //false);
// console.log(logicalCalc([false, false], "OR"), false); //false);
// console.log(logicalCalc([false, false], "XOR"), false); //false);
// console.log(logicalCalc([false], "AND"), false); //false);
// console.log(logicalCalc([false], "OR"), false); //false);
// console.log(logicalCalc([false], "XOR"), false); //false);
// console.log(logicalCalc([true], "AND"), true); //true);
// console.log(logicalCalc([true], "OR"), true); //true);
// console.log(logicalCalc([true], "XOR"), true); //true);

// ##################################################

// Training JS #9: loop statement --while and do..while

function padIt(str, n) {
  while (n > 0) {
    n % 2 === 0 ? (str = str + "*") : (str = "*" + str);
    n--;
  }
  return str;
}
// console.log(padIt("a", 5));

// ##################################################

// Implement Array.prototype.filter()

Array.prototype.filter = function (func) {
  let filtered = [];
  for (let i = 0; i < this.length; i++) {
    if (func(this[i])) {
      filtered.push(this[i]);
    }
  }
  return filtered;
};

// ##################################################

// Finish Guess the Number Game

class Guesser {
  constructor(number, lives) {
    this.number = number;
    this.lives = lives;
  }

  guess(n) {
    if (this.lives === 0) {
      throw "already dead";
    }
    if (n === this.number) {
      return true;
    } else if (n !== this.number) {
      this.lives--;
      return false;
    }
  }
}

// let guesser = new Guesser(3, 3);
// console.log(guesser.guess(3));
// console.log(guesser.guess(3));
// console.log(guesser.guess(3));

// ##################################################

// Descending Order

function descendingOrder(n) {
  return Number(
    String(n)
      .split("")
      .sort((a, b) => b - a)
      .join("")
  );
}

// ##################################################

// List Filtering

function filter_list(l) {
  return l.filter((c) => typeof c === "number");
}

// ##################################################

// Mumbling
function accum(s) {
  const arr = s.toLowerCase().split("");
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    let d = i === arr.length - 1 ? "" : "-";
    str = str + arr[i].toUpperCase() + arr[i].repeat(i) + d;
  }
  return str;
}
// console.log(accum("Aws"));
// ##################################################

// UEFA EURO 2016

function uefaEuro2016(teams, scores) {
  let phrase = "";
  if (scores[0] > scores[1]) {
    phrase = `${teams[0]} won!`;
  } else if (scores[1] > scores[0]) {
    phrase = `${teams[1]} won!`;
  } else {
    phrase = `teams played draw.`;
  }
  return `At match ${teams[0]} - ${teams[1]}, ${phrase}`;
}

// console.log(uefaEuro2016(["Germany", "Ukraine"], [0, 2]));

// ##################################################

// Fuel Calculator
/*
2=> 5c
4=> 10c
6=> 15
8=> 20
10=> 25c max
liters > 10 {(price -25)*liters}
else
9/2 = 4*5=20
price-20
liters/5
*/
function fuelPrice(litres, pricePerLitre) {
  let result;
  if (litres >= 10) {
    result = ((pricePerLitre - 0.25) * litres).toFixed(2);
  } else {
    result = (
      (pricePerLitre - (Math.floor(litres / 2) * 5) / 100) *
      litres
    ).toFixed(2);
  }
  return Number(result);
}
// console.log(fuelPrice(5, 1.23));
// console.log(fuelPrice(8, 2.5));
// console.log(fuelPrice(5, 5.6));

// ##################################################

// Polish alphabet

function correctPolishLetters(string) {
  let obj = {
    ą: "a",
    ć: "c",
    ę: "e",
    ł: "l",
    ń: "n",
    ó: "o",
    ś: "s",
    ź: "z",
    ż: "z",
  };
  let result = "";
  string.split("").forEach((l) => {
    if (obj.hasOwnProperty(l)) {
      result += obj[l];
    } else {
      result += l;
    }
  });
  return result;
}

console.log(correctPolishLetters("Jędrzej Błądziński"));

// ##################################################
