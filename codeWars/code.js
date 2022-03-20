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
// console.log(fakeBin("45385593107843568"));

// ##################################################

// Is he gonna survive?
function hero(bullets, dragons) {
  return dragons * 2 <= bullets;
}

// console.log(hero(10, 6));

// ##################################################

// Calculate BMI

function bmi(weight, height) {
  let bmiIndex = weight / Math.pow(height, 2);
  if (bmiIndex <= 18.5) {
    return "Underweight";
  } else if (bmiIndex <= 25) {
    return "Normal";
  } else if (bmiIndex <= 30) {
    return "Overweight";
  } else if (bmiIndex > 30) {
    return "Obese";
  }
}

// console.log(bmi(80, 1.8));

// ##################################################
// Calculate average

function find_average(array) {
  let sum = 0;
  if (array.length === 0) {
    return sum;
  }
  array.forEach((n) => (sum += n));
  return sum / array.length;
}
// console.log(find_average([1, 2, 3]));

// ##################################################
// Reversed sequence

const reverseSeq = (n) => {
  let arr = [];
  for (let i = 1; i <= n; i++) {
    arr.unshift(i);
  }
  return arr;
};
// console.log(reverseSeq(0));

// ##################################################

// Beginner Series #1 School Paperwork
function paperwork(n, m) {
  if (n <= 0 || m <= 0) {
    return 0;
  }
  return n * m;
}
// console.log(paperwork(5, 5));

// ##################################################

// DNA to RNA Conversion
function DNAtoRNA(dna) {
  let rna = dna.split("").map((s) => {
    return s === "T" ? (s = "U") : s;
  });
  return rna.join("");
}
// console.log(DNAtoRNA("GCAT"));

// ##################################################

// You only need one - Beginner

function check(a, x) {
  return a.includes(x);
}
// console.log(check([66, 101], 661));

// ##################################################

// Sum Arrays

function sum(numbers) {
  "use strict";
  return numbers.reduce((a, s) => a + s, 0);
}
// console.log(sum([]));

// ##################################################
// Are You Playing Banjo?

function areYouPlayingBanjo(name) {
  return name[0].toLowerCase() === "r"
    ? name + " plays banjo"
    : name + " does not play banjo";
}
// console.log(areYouPlayingBanjo("Adam"));

// ##################################################

// Opposites Attract

function lovefunc(flower1, flower2) {
  let f1 = flower1 % 2 === 0;
  let f2 = flower2 % 2 === 0;
  return f1 !== f2;
}
// console.log(lovefunc(2, 4));

// ##################################################

// Find Maximum and Minimum Values of a List

var min = function (list) {
  let minimum = list[0];
  list.forEach((n) => {
    if (n < minimum) {
      minimum = n;
    }
  });
  return minimum;
};

var max = function (list) {
  let maximum = list[0];
  list.forEach((n) => {
    if (n > maximum) {
      maximum = n;
    }
  });
  return maximum;
};

// console.log(min([-52, 56, 30, 29, -54, 0, -110]));
// console.log(max([5]));

// ##################################################

// Array plus array

function arrayPlusArray(arr1, arr2) {
  return arr1.concat(arr2).reduce((a, c) => a + c, 0); //something went wrong
}

// ##################################################

// Will you make it?

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  return mpg * fuelLeft >= distanceToPump;
};

// console.log(zeroFuel(51, 25, 2));

// ##################################################

// Count the Monkeys!

function monkeyCount(n) {
  let arr = [];
  for (let i = 1; i <= n; i++) {
    arr.push(i);
  }
  return arr;
}
// console.log(monkeyCount(5));

// ##################################################

// Simple multiplication

function simpleMultiplication(number) {
  return number % 2 === 0 ? number * 8 : number * 9;
}
// console.log(simpleMultiplication(5));

// ##################################################

// Beginner - Reduce but Grow

function grow(x) {
  return x.reduce((a, c) => a * c, 1);
}
// console.log(grow([2, 2, 2, 2, 2, 2]));

// ##################################################

// Transportation on vacation

function rentalCarCost(d) {
  let total = d * 40;
  if (d >= 7) {
    return total - 50;
  } else if (d >= 3) {
    return total - 20;
  } else {
    return total;
  }
}

// console.log(rentalCarCost(10));

// ##################################################

// Total amount of points
function points(games) {
  let result = 0;
  games.forEach((game) => {
    let scores = game.split(":");
    if (scores[0] > scores[1]) {
      result += 3;
    } else if (scores[0] === scores[1]) {
      result += 1;
    }
  });
  return result;
}

// console.log(
//   points(["1:0", "2:0", "3:0", "4:0", "2:1", "3:1", "4:1", "3:2", "4:2", "4:3"])
//   );

// ##################################################

// Sentence Smash

function smash(words) {
  return words.join(" ");
}

// console.log(smash(['hello', 'world']));

// ##################################################

// How good are you really?

function betterThanAverage(classPoints, yourPoints) {
  let avarage =
    classPoints.concat(yourPoints).reduce((a, c) => a + c, 0) /
    (classPoints.length + 1);

  return yourPoints > avarage ? true : false;
}

// console.log(betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 69));

// ##################################################

// Area or Perimeter

const areaOrPerimeter = function (l, w) {
  return l === w ? l * w : 2 * l + 2 * w;
};
// console.log(areaOrPerimeter(6, 10));

// ##################################################

// Count by X

function countBy(x, n) {
  let z = [];
  for (let i = 1; i <= n; i++) {
    z.push(i * x);
  }
  return z;
}

// console.log(countBy(1, 10));

// ##################################################

// Grasshopper - Personalized Message

function greet(name, owner) {
  return name === owner ? "Hello boss" : "Hello guest";
}

// console.log(greet("Greg", "Daniel"));

// ##################################################

// Quarter of the year

const quarterOf = (month) => {
  // 1,2,3      1
  // 4,5,6      2
  // 7,8,9      3
  // 10,11,12   4
  return Math.ceil((4 * month) / 12);
};
// console.log(quarterOf(4));

// ##################################################

// Get Planet Name By ID

function getPlanetName(id) {
  var name;
  switch (id) {
    case 1:
      name = "Mercury";
      break;
    case 2:
      name = "Venus";
      break;
    case 3:
      name = "Earth";
      break;
    case 4:
      name = "Mars";
      break;
    case 5:
      name = "Jupiter";
      break;
    case 6:
      name = "Saturn";
      break;
    case 7:
      name = "Uranus";
      break;
    case 8:
      name = "Neptune";
      break;
  }

  return name;
}

// ##################################################

// Can we divide it?
function isDivideBy(number, a, b) {
  return number % a === 0 && number % b === 0;
}

// console.log(isDivideBy(-12, 2, -6));

// ##################################################

// Convert a string to an array

function stringToArray(string) {
  return string.split(" ");
}

// console.log(stringToArray("Robin Singh"));

// ##################################################

//Third Angle of a Triangle

function otherAngle(a, b) {
  return 180 - (a + b);
}

console.log(otherAngle(30, 60));

// ##################################################

// Remove exclamation marks

function removeExclamationMarks(s) {
  let arr = s.split("");
  return arr.filter((x) => x !== "!").join("");
}

console.log(removeExclamationMarks("Hello World!"));
