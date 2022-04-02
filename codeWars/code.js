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

// console.log(otherAngle(30, 60));

// ##################################################

// Remove exclamation marks

function removeExclamationMarks(s) {
  return s
    .split("")
    .filter((x) => x !== "!")
    .join("");
}

// console.log(removeExclamationMarks("Hello World!"));

// ##################################################
// Beginner Series #4 Cockroach

function cockroachSpeed(s) {
  return Math.floor((s * 100000) / 3600);
}

// console.log(cockroachSpeed(1.08));

// ##################################################
//If you can't sleep, just count sheep!!

var countSheep = function (num) {
  let result = "";
  for (let i = 1; i <= num; i++) {
    result += `${i} sheep...`;
  }
  return result;
};
// console.log(countSheep(2));

// ##################################################
// Grasshopper - Grade book

// use switch with multi compare
function getGrade(s1, s2, s3) {
  let av = (s1 + s2 + s3) / 3;
  switch (true) {
    case av >= 90 && av <= 100:
      return "A";
    case av >= 80 && av <= 90:
      return "B";
    case av >= 70 && av <= 80:
      return "C";
    case av >= 60 && av <= 70:
      return "D";
    case av >= 0 && av <= 60:
      return "F";
  }
}

// console.log(getGrade(95, 90, 93));

// ##################################################
//Grasshopper - Messi Goals

var laLigaGoals = 43;
var championsLeagueGoals = 10;
var copaDelReyGoals = 5;

var totalGoals = laLigaGoals + championsLeagueGoals + copaDelReyGoals;

// ##################################################
// Rock Paper Scissors!

const rps = (p1, p2) => {
  if (p1 === p2) {
    return "Draw!";
  } else if (p1 === "rock") {
    return p2 === "scissors" ? "Player 1 won!" : "Player 2 won!";
  } else if (p1 === "paper") {
    return p2 === "rock" ? "Player 1 won!" : "Player 2 won!";
  } else if (p1 === "scissors") {
    return p2 === "paper" ? "Player 1 won!" : "Player 2 won!";
  }
};
// console.log(rps("scissors", "rock"));

// ##################################################
// L1: Set Alarm

function setAlarm(employed, vacation) {
  return employed && !vacation;
}
// console.log(setAlarm(false, false));

// ##################################################
// Twice as old

function twiceAsOld(dadYearsOld, sonYearsOld) {
  return Math.abs(dadYearsOld - sonYearsOld * 2);
}

// console.log(twiceAsOld(55, 30));

// ##################################################
// Grasshopper - Messi goals function

function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
}

// ##################################################
// Double Char

function doubleChar(str) {
  return str
    .split("")
    .map((s) => s + s)
    .join("");
}

// console.log(doubleChar("Aws"));

// ##################################################
// Will there be enough space?

function enough(cap, on, wait) {
  return cap - on - wait > 0 ? 0 : Math.abs(cap - on - wait);
}

// ##################################################
// The Feast of Many Beasts

function feast(beast, dish) {
  return beast[0] + beast[beast.length - 1] === dish[0] + dish[dish.length - 1];
}
// console.log(feast("great blue heron", "garlic naan"));
// ##################################################

// Expressions Matter
function expressionMatter(a, b, c) {
  // highest achievable result
  // use multiplication
  let multi = a * b * c;
  let multi1 = a * b + c;
  let multi2 = a + b * c;
  // use the addition
  let addition1 = (a + b) * c;
  let addition2 = a * (b + c);
  let addition3 = a + b + c;

  return Math.max(multi, multi1, multi2, addition1, addition2, addition3);
}

// console.log(expressionMatter(1, 2, 3));

// ##################################################
// Switch it Up!
function switchItUp(number) {
  switch (number) {
    case 0:
      return "Zero";
    case 1:
      return "One";
    case 2:
      return "Two";
    case 3:
      return "Three";
    case 4:
      return "Four";
    case 5:
      return "Five";
    case 6:
      return "Six";
    case 7:
      return "Seven";
    case 8:
      return "Eight";
    case 9:
      return "Nine";
  }
}

// ##################################################
// altERnaTIng cAsE <=> ALTerNAtiNG CaSe

String.prototype.toAlternatingCase = function () {
  // how to reach the text is by using the this keyword

  const result = this.split("").map((l) => {
    if (l.codePointAt() >= 65 && l.codePointAt() <= 90) {
      return l.toLowerCase();
    }
    if (l.codePointAt() >= 97 && l.codePointAt() <= 122) {
      return l.toUpperCase();
    } else {
      return l;
    }
  });
  return result.join("");
};

// console.log("hello World11".toAlternatingCase());

// ##################################################
// Function 2 - squaring an argument
function square(n) {
  return n ** 2;
}

// ##################################################
// Unfinished Loop - Bug Fixing #1

function createArray(number) {
  var newArray = [];

  for (var counter = 1; counter <= number; counter++) {
    newArray.push(counter);
  }

  return newArray;
}

// ##################################################
// Parse nice int from char problem

function getAge(inputString) {
  return Number(inputString[0]);
}

// ##################################################
// Keep up the hoop

function hoopCount(n) {
  return n >= 10
    ? "Great, now move on to tricks"
    : "Keep at it until you get it";
}

// ##################################################
// Is the string uppercase?

String.prototype.isUpperCase = function () {
  const letters = this.split("");
  for (l of letters) {
    if (l.codePointAt() >= 97 && l.codePointAt() <= 122) {
      return false;
    }
  }

  return true;
};

// console.log("AWS".isUpperCase());

// ##################################################
// Welcome!

const languages = {
  english: "Welcome",
  czech: "Vitejte",
  danish: "Velkomst",
  dutch: "Welkom",
  estonian: "Tere tulemast",
  finnish: "Tervetuloa",
  flemish: "Welgekomen",
  french: "Bienvenue",
  german: "Willkommen",
  irish: "Failte",
  italian: "Benvenuto",
  latvian: "Gaidits",
  lithuanian: "Laukiamas",
  polish: "Witamy",
  spanish: "Bienvenido",
  swedish: "Valkommen",
  welsh: "Croeso",
};

function greet(language) {
  return languages[language] ? languages[language] : languages["english"];
}

// console.log(greet("dutch"));

// ##################################################

// Removing Elements

function removeEveryOther(arr) {
  return arr.filter((e, i) => {
    if (i % 2 === 0) {
      return e;
    }
  });
}

// let arr = [1, 2, 3, 4, 5, 6];
// console.log(removeEveryOther(arr));

// ##################################################

// Simple Pig Latin (5 KYU)
// score before 314
// score after 323

function pigIt(str) {
  const arr = str.split(" ");
  return arr
    .map((e) => {
      if (e.codePointAt() >= 65 && e.codePointAt() <= 122) {
        let firstLetter = e[0];
        let word = `${e.substring(1)}${firstLetter}ay`;
        // console.log(word);
        return word;
      } else {
        return e;
      }
    })
    .join(" ");
}

// console.log(pigIt("Hello world !"));

// ##################################################
// Student's Final Grade

function finalGrade(exam, projects) {
  if (exam > 90 || projects > 10) {
    return 100;
  } else if (exam > 75 && projects >= 5) {
    return 90;
  } else if (exam > 50 && projects >= 2) {
    return 75;
  } else {
    return 0;
  }
}

// ##################################################

// Difference of Volumes of Cuboids

function findDifference(a, b) {
  return Math.abs(
    a.reduce((acc, c) => acc * c, 1) - b.reduce((acc, c) => acc * c, 1)
  );
}

// ##################################################

// Correct the mistakes of the character recognition software

function correct(string) {
  let arr = string.split("");
  return arr
    .map((l) => {
      if (l === "5") {
        return "S";
      } else if (l === "0") {
        return "O";
      } else if (l === "1") {
        return "I";
      } else {
        return l;
      }
    })
    .join("");
}

// console.log(correct("51NGAPORE"));

// ##################################################

// Sum The Strings
function sumStr(a, b) {
  return String(Number(a) + Number(b));
}

// ##################################################

// Is it even?

function testEven(n) {
  return n % 2 === 0;
}

// ##################################################

// Sort and Star
/*
twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"])
'b***i***t***c***o***i***n'
*/
function twoSort(s) {
  let firstWordArrayAfterSorted = s
    .sort((a, b) => {
      return a > b ? 1 : -1;
    })[0]
    .split("");
  return firstWordArrayAfterSorted
    .map((l, i) => {
      return i < firstWordArrayAfterSorted.length - 1 ? l + "***" : l;
    })
    .join("");
}
// console.log(
//   twoSort([
//     "turns",
//     "out",
//     "random",
//     "test",
//     "cases",
//     "are",
//     "easier",
//     "than",
//     "writing",
//     "out",
//     "basic",
//     "ones",
//   ])
// );

// ##################################################

// I love you, a little , a lot, passionately ... not at all
function howMuchILoveYou(nbPetals) {
  const phrases = [
    "I love you",
    "a little",
    "a lot",
    "passionately",
    "madly",
    "not at all",
  ];

  if (nbPetals <= 6) {
    return phrases[nbPetals - 1];
  } else {
    let index = nbPetals % 6;
    if (index === 0) {
      index = 6;
    }
    console.log(index);
    return phrases[index - 1];
  }
}

// console.log(howMuchILoveYou(6));

// ##################################################

// All Star Code Challenge #18

function strCount(str, letter) {
  return str.split(letter).length - 1;
}

// console.log(strCount("Heolloo", "o"));

// ##################################################

// Regular Ball Super Ball

var Ball = function (ballType) {
  if (!ballType) {
    this.ballType = "regular";
  } else {
    this.ballType = ballType;
  }
};

// let ball1 = new Ball("");
// let ball2 = new Ball("super");

// console.log(ball1.ballType); //=> "regular"
// console.log(ball2.ballType); //=> "super"

// ##################################################
// Grasshopper - Check for factor

function checkForFactor(base, factor) {
  return base % factor === 0;
}

// console.log(checkForFactor(10, 2));

// ##################################################

// Grasshopper - Debug sayHello

function sayHello(name) {
  return `Hello ${name}`;
}

// ##################################################

// Squash the bugs

function findLongest(str) {
  var spl = str.split(" ");
  var longest = 0;

  for (var i = 0; i < spl.length; i++) {
    if (spl[i].length > longest) {
      longest = spl[i].length;
    }
  }
  return longest;
}

// ##################################################

// N-th Power

function index(array, n) {
  if (n > array.length - 1) {
    return -1;
  } else {
    return Math.pow(array[n], n);
  }
}

// index([1, 2, 3, 4], 2);

// ##################################################

// Well of Ideas - Easy Version

function well(x) {
  let goodCounter = x.reduce((a, c) => (c === "good" ? a + 1 : a + 0), 0);
  return goodCounter === 0
    ? "Fail!"
    : goodCounter > 2
    ? "I smell a series!"
    : "Publish!";
}

// console.log(well(["bad", "bad", "bad", "good"]));

// ##################################################

// Grasshopper - Terminal game move function

function move(position, roll) {
  return position + roll * 2;
}

// ##################################################

// How many lightsabers do you own?

function howManyLightsabersDoYouOwn(name) {
  return name === "Zach" ? 18 : 0;
}

// ##################################################

// Drink about

function peopleWithAgeDrink(old) {
  switch (true) {
    case old >= 21:
      return "drink whisky";
    case old >= 18 && old < 21:
      return "drink beer";
    case old >= 14 && old <= 18:
      return "drink coke";
    case old < 14:
      return "drink toddy";
  }
}

// ##################################################

// Filter out the geese

function gooseFilter(birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  // return an array containing all of the strings in the input array except those that match strings in geese
  return birds.filter((e) => !geese.includes(e));
}
// console.log(
//   gooseFilter([
//     "Mallard",
//     "Hook Bill",
//     "African",
//     "Crested",
//     "Pilgrim",
//     "Toulouse",
//     "Blue Swedish",
//   ])
// );
// ##################################################

// What's the real floor?

function getRealFloor(n) {
  return n > 13 ? n - 2 : n > 0 ? n - 1 : n;
}

// ##################################################

// Multiplication table for number

/*
1 * 5 = 5\n2 * 5 = 10\n3 * 5 = 15\n4 * 5 = 20\n5 * 5 = 25\n6 * 5 = 30\n7 * 5 = 35\n8 * 5 = 40\n9 * 5 = 45\n10 * 5 = 50
*/

function multiTable(number) {
  let result = "";
  for (let i = 1; i <= 10; i++) {
    if (i === 10) {
      result += `${i} * ${number} = ${i * number}`;
    } else {
      result += `${i} * ${number} = ${i * number}\n`;
    }
  }
  return result;
}

// console.log(multiTable(5));
// ##################################################

// Is it a palindrome?

function isPalindrome(x) {
  return x.toLowerCase().split("").reverse().join("") === x.toLowerCase();
}
// console.log(isPalindrome("Abbas"));

// ##################################################

// What is between?

function between(a, b) {
  let result = [];
  for (let i = a; i <= b; i++) {
    result.push(i);
  }
  return result;
}

// console.log(between(1, 4));

// ##################################################

// Cat years, Dog years

var humanYearsCatYearsDogYears = function (humanYears) {
  let catYears = 0;
  let dogYears = 0;
  if (humanYears === 1) {
    catYears = 15;
    dogYears = 15;
  } else if (humanYears === 2) {
    catYears = 15 + 9;
    dogYears = 15 + 9;
  } else {
    catYears = 15 + 9 + (humanYears - 2) * 4;
    dogYears = 15 + 9 + (humanYears - 2) * 5;
  }
  return [humanYears, catYears, dogYears];
};

// ##################################################

// Hello, Name or World!

function hello(name) {
  if (!name) {
    return "Hello, World!";
  }
  return `Hello, ${name.slice(0, 1).toUpperCase()}${name
    .slice(1)
    .toLowerCase()}!`;
}

// ##################################################

// Sum without highest and lowest number

function sumArray(array) {
  if (!array || array.length <= 1) {
    return 0;
  }
  // use the three dots magic
  let indexOfMax = array.indexOf(Math.max(...array));
  array.splice(indexOfMax, 1);
  let indexOfMin = array.indexOf(Math.min(...array));
  array.splice(indexOfMin, 1);
  return array.reduce((a, c) => a + c, 0);
}

// console.log(sumArray([3, 5]));

// ##################################################

// Sum Mixed Array

function sumMix(x) {
  return x.reduce((a, c) => a + Number(c), 0);
}

// ##################################################

// Function 3 - multiplying two numbers

function multiply(n1, n2) {
  return n1 * n2;
}

// ##################################################

// Find the first non-consecutive number

function firstNonConsecutive(arr) {
  if (!arr || arr.length <= 1) {
    return 0;
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i + 1] !== undefined) {
      if (arr[i] + 1 !== arr[i + 1]) {
        return arr[i + 1];
      }
    }
  }
  return 0;
}

// console.log(firstNonConsecutive([1, 2, 3, 4, 6, 7, 8]));
// console.log(firstNonConsecutive([-4, -2, -1, 0, 1, 2, 3, 4, 5]));
// console.log(firstNonConsecutive([-5, -4, -3, -2, 0, 1, 2, 4]));
// console.log(firstNonConsecutive([0]));

// ##################################################

// Thinkful - Logic Drills: Traffic light

function updateLight(current) {
  switch (current) {
    case "green":
      return "yellow";
    case "yellow":
      return "red";
    case "red":
      return "green";
  }
}

// ##################################################

// Reverse List Order

function reverseList(list) {
  return list.reverse();
}

// ##################################################

// Holiday VIII - Duty Free

function dutyFree(normPrice, discount, hol) {
  return Math.floor(hol / (normPrice * (discount / 100)));
}

// console.log(dutyFree(17, 10, 500));

// ##################################################

// Filling an array (part 1)

const arr = (N) => {
  let arr = [];
  for (let i = 0; i < N; i++) {
    arr.push(i);
  }
  return arr;
};
// console.log(arr(5));

// ##################################################

// Exclusive "or" (xor) Logical Operator

function xor(a, b) {
  return a !== b;
}

// console.log(xor(false, true));

// ##################################################

// Vowel remover

function shortcut(string) {
  let vowels = ["a", "e", "i", "o", "u"];
  return string
    .split("")
    .filter((l) => vowels.indexOf(l) === -1)
    .join("");
}
// console.log(shortcut("aws"));

// ##################################################

// get character from ASCII Value

function getChar(c) {
  return String.fromCharCode(c);
}

console.log(getChar(20));

// ##################################################

// Capitalization and Mutability

function capitalizeWord(word) {
  return word.replace(word[0], word[0].toUpperCase());
}

// console.log(capitalizeWord("word"));

// ##################################################

// The Wide-Mouthed frog!

function mouthSize(animal) {
  return animal.toLowerCase() === "alligator" ? "small" : "wide";
}

// ##################################################

// Training JS #1: create your first JS function and print "Helloworld!"

function helloWorld() {
  var str = "Hello World!";
  console.log(str);
}

// ##################################################

// The 'if' function

function _if(bool, func1, func2) {
  return bool ? func1() : func2();
}

// ##################################################

// A wolf in sheep's clothing

function warnTheSheep(queue) {
  let wolfIndex = queue.length - 1 - queue.indexOf("wolf");
  // Oi! Sheep number 2! You are about to be eaten by a wolf!
  return wolfIndex === 0
    ? "Pls go away and stop eating my sheep"
    : `Oi! Sheep number ${wolfIndex}! You are about to be eaten by a wolf!`;
}

// console.log(warnTheSheep(["sheep", "sheep", "wolf"]));
// ##################################################

// Palindrome Strings

function isPalindrome(line) {
  return String(line).split("").reverse().join("") === String(line);
}

// console.log(isPalindrome("anna"));

// ##################################################

// Remove duplicates from list

function distinct(a) {
  return a.reduce((a, c) => {
    if (a.indexOf(c) === -1) {
      a.push(c);
    }
    return a;
  }, []);
}

// console.log(distinct([1, 2, 3, 3]));

// ##################################################

// Grasshopper - Function syntax debugging

function main(verb, noun) {
  return verb + noun;
}

// ##################################################

// Grasshopper - Basic Function Fixer

function addFive(num) {
  var total = num + 5;
  return total;
}

// ##################################################

// Enumerable Magic #25 - Take the First N Elements

function take(arr, n) {
  return arr.slice(0, n);
}

// ##################################################

// Alan Partridge II - Apple Turnover

function apple(x) {
  return Number(x) ** 2 > 1000
    ? "It's hotter than the sun!!"
    : "Help yourself to a honeycomb Yorkie for the glovebox.";
}

// console.log(apple("4"));

// ##################################################

// Convert to Binary

function toBinary(n) {
  let result = "";
  let quotient = n;
  let remainder = 0;

  while (quotient > 0) {
    remainder = quotient % 2;
    result = remainder + result;
    quotient = Math.floor(quotient / 2);
  }
  return result;
}

// console.log(toBinary(2));

// ##################################################

// Gravity Flip

const flip = (d, a) => {
  return a.sort((a, b) => (d === "R" ? a - b : b - a));
};

// console.log(flip("L", [3, 2, 1, 2]));

// ##################################################

// Lario and Muigi Pipe Problem

function pipeFix(numbers) {
  let max = Math.max(...numbers);
  let min = Math.min(...numbers);
  let result = [];
  for (min; min <= max; min++) {
    result.push(min);
  }
  return result;
}
// console.log(pipeFix([-1, 4]));

// ##################################################

// Find the Remainder

function remainder(n, m) {
  return Math.max(n, m) % Math.min(n, m);
}

// ##################################################

// Hex to Decimal

function hexToDec(hexString) {
  return parseInt(hexString, 16);
}

// ##################################################

// Swap Values

function swapValues() {
  var args = Array.prototype.slice.call(arguments);
  var temp = args[0];
  args[0] = args[1];
  args[1] = temp;
}
// swapValues([1, 2], [3, 4]);

// ##################################################

// Plural
function plural(n) {
  return n > 0 && n === 1 ? false : true;
}
// console.log(plural(0));
// ##################################################

// Surface Area and Volume of a Box

function getSize(width, height, depth) {
  let result = [];
  result.push(2 * (depth * width + depth * height + width * height));
  result.push(width * height * depth);
  return result;
}
// console.log(getSize(4, 2, 6));

// ##################################################

// No zeros for heros

function noBoringZeros(n) {
  if (n === 0) {
    return 0;
  }
  let strN = String(n);

  for (let i = strN.length - 1; i >= 0; i--) {
    if (strN[i] === "0") {
      strN = strN.slice(0, i);
    } else {
      return Number(strN);
    }
  }
}

// console.log(noBoringZeros(0));

// ##################################################

// Simple validation of a username with regex

function validateUsr(username) {
  res = /^[a-z0-9_]{4,16}$/;
  console.log(res.test(username));
  console.log(username.match(res));
  return res.test(username);
}
// console.log(validateUsr("asd43_34asd43_34"));
// ##################################################

// Training JS #7: if..else and ternary operator

function saleHotdogs(n) {
  if (n < 5) {
    return n * 100;
  } else if (n >= 5 && n < 10) {
    return n * 95;
  } else {
    return n * 90;
  }
}

// ##################################################

// Find Multiples of a Number

function findMultiples(integer, limit) {
  // BRAVE
  //  return Array(Math.floor(limit / int))
  //    .fill(1)
  //    .map((x, i) => int * (i + 1));
  let arr = [];
  let numsLength = Math.floor(limit / integer);
  for (let i = 1; i <= numsLength; i++) {
    arr.push(integer * i);
  }
  return arr;
}
// console.log(findMultiples(4, 27));

// ##################################################

// L1: Bartender, drinks!

function getDrinkByProfession(param) {
  // correcting the param string
  let result = param
    .toLowerCase()
    .split(" ")
    .reduce((acc, word) => {
      return acc + word.replace(word[0], word[0].toUpperCase()) + " ";
    }, "")
    .trim();
  const obj = {
    Jabroni: "Patron Tequila",
    "School Counselor": "Anything with Alcohol",
    Programmer: "Hipster Craft Beer",
    "Bike Gang Member": "Moonshine",
    Politician: "Your tax dollars",
    Rapper: "Cristal",
  };
  return obj[result] ? obj[result] : "Beer";
}
// console.log(getDrinkByProfession("school counselor"));

// ##################################################

// Exclamation marks series #1: Remove an exclamation mark from the end of string

function remove(string) {
  // with regex
  // return string.replace(/!$/, '')
  if (string[string.length - 1] === "!") {
    string = string.slice(0, string.length - 1);
  }
  return string;
}
// console.log(remove("aaa!"));

// ##################################################

// Exclamation marks series #11: Replace all vowel to exclamation mark in the sentence
// aeiouAEIOU

function replace(s) {
  // with regex
  // return s.replace(/[aeiouAEIOU]/g, "!");
  // without regex
  let vowels = "aeiouAEIOU";
  return s
    .split("")
    .map((s) => (vowels.includes(s) ? "!" : s))
    .join("");
}
// console.log(replace("aeiou"));

// ##################################################

// Grasshopper - Variable Assignment Debug

var a = "dev";
var b = "Lab";

var name = a + b;

// ##################################################

// 5 without numbers !!

function unusualFive() {
  return "unusual".indexOf("a");
}

// console.log(unusualFive());

// ##################################################

// Super Duper Easy

function problem(x) {
  if (typeof x === "string") {
    return "Error";
  }
  return x * 50 + 6;
}

// ##################################################

// Pre-FizzBuzz Workout #1

function preFizz(n) {
  let result = [];
  for (let i = 1; i <= n; i++) {
    result.push(i);
  }
  return result;
}
// console.log(preFizz(5));

// ##################################################

// Printing Array elements with Comma delimiters

function printArray(array) {
  return array.join(",");
}
// console.log(printArray([1, 2, 3, 4, 6]));
// ##################################################

// Grasshopper - Terminal game combat function

function combat(health, damage) {
  return health - damage < 0 ? 0 : health - damage;
}

// ##################################################

// Merge two sorted arrays into one

function mergeArrays(arr1, arr2) {
  return arr1
    .concat(arr2)
    .reduce((a, c) => {
      if (a.indexOf(c) === -1) {
        a.push(c);
      }
      return a;
    }, [])
    .sort((a, b) => a - b);
}

// console.log(mergeArrays([1, 2, 4], [3, 5, 6, 7, 8]));
// ##################################################

// To square(root) or not to square(root)
// another approach to chech if number integer (1.2%1 === 0)false (2%1===0)true
function squareOrSquareRoot(array) {
  return array.map((n) =>
    Math.sqrt(n) === Math.floor(Math.sqrt(n)) ? Math.sqrt(n) : Math.pow(n, 2)
  );
}
// console.log(squareOrSquareRoot([4, 3, 9, 7, 2, 1]));

// ##################################################

// Remove First and Last Character Part Two

function array(arr) {
  if (arr.length <= 4) {
    return null;
  }
  let result = arr.split(",").slice(1, -1).join(" ").trim();
  return result.length > 0 ? result : null;
}
// console.log(array("1,2,3,4,5"));

// ##################################################

// Kata Example Twist

// add the value "codewars" to the websites array 1,000 times
var websites = [...Array.from({ length: 1000 }, (_) => "codewars")];
// console.log(websites);

// ##################################################

// Name Shuffler

function nameShuffler(str) {
  return `${str.slice(str.indexOf(" "))} ${str.slice(
    0,
    str.indexOf(" ")
  )}`.trim();
}
// console.log(nameShuffler("Aws Yasen"));
// ##################################################

// Basic Training: Add item to an Array

// websites.push("codewars");

// ##################################################

// Reversing Words in a String

function reverse(string) {
  return string.split(" ").reverse().join(" ");
}

// ##################################################

// Smallest unused ID

function nextId(ids) {
  let sorted = ids.sort((a, b) => a - b);
  if (sorted[0] > 0) {
    return 0;
  }
  console.log(sorted);
  let result = sorted[sorted.length - 1] + 1;
  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i + 1] && sorted[i + 1] - sorted[i] > 1) {
      result = sorted[i] + 1;
      console.log(sorted[i + 1], sorted[i], result);
      return result;
    }
  }
  return result;
}
// console.log(nextId([0, 1, 3, 3, 4, 5]));
// ##################################################

// Sleigh Authentication

function Sleigh() {}

Sleigh.prototype.authenticate = function (name, password) {
  return name === "Santa Claus" && password === "Ho Ho Ho!";
};

// ##################################################

// Color Ghost

var Ghost = function () {
  let rand = Math.floor(Math.random() * 4);
  const colors = ["white", "yellow", "purple", "red"];
  this.color = colors[rand];
};

// ##################################################

// USD => CNY

function usdcny(usd) {
  let chi = usd * 6.75;
  return `${chi.toFixed(2)} Chinese Yuan`;
}

// ##################################################

// Determine offspring sex based on genes XX and XY chromosomes

function chromosomeCheck(sperm) {
  return sperm.indexOf("Y") === -1
    ? "Congratulations! You're going to have a son."
    : "Congratulations! You're going to have a daughter.";
}

// ##################################################

// Mr. Freeze

// Object.freeze(MrFreeze);

// ##################################################

// How old will I be in 2099?

function calculateAge() {
  let y1 = arguments[0];
  let y2 = arguments[1];
  result = y2 > y1 ? y2 - y1 : y1 - y2;
  if (y2 > y1) {
    return `You are ${result} year${result > 1 ? "s" : ""} old.`;
  } else if (y1 > y2) {
    return `You will be born in ${result} year${result > 1 ? "s" : ""}.`;
  } else {
    return "You were born this very year!";
  }
  // let result = y2 > y1 ? y2 - y1 : 2;
}
// console.log(calculateAge(2016, 2012));
// ##################################################

// Training JS #5: Basic data types--Object

function animal(obj) {
  return `This ${obj.color} ${obj.name} has ${obj.legs} legs.`;
}

// ##################################################

// Enumerable Magic #3 - Does My List Include This?

function include(arr, item) {
  return arr.indexOf(item) !== -1;
}
// console.log(include([1, 2, 3], 3));

// ##################################################

// Formatting decimal places #0

function twoDecimalPlaces(n) {
  return +n.toFixed(2);
}

// ##################################################

// Bin to Decimal

function binToDec(bin) {
  return parseInt(bin, 2);
}

// ##################################################

// Grasshopper - Array Mean

var findAverage = function (nums) {
  return nums.reduce((a, c) => a + c, 0) / nums.length;
};

// ##################################################

// Thinkful - Number Drills: Pixelart planning

function isDivisible(wallLength, pixelSize) {
  return wallLength % pixelSize == 0 ? true : false;
}

// ##################################################

// Add Length

function addLength(str) {
  return str.split(" ").map((w) => `${w} ${w.length}`);
}
// console.log(addLength("hello world"));

// ##################################################

// Welcome to the City

function sayHello(name, city, state) {
  return `Hello, ${name.join(" ")}! Welcome to ${city}, ${state}!`;
}
// Hello, John Smith! Welcome to Phoenix, Arizona!

// ##################################################

// Multiple of index

function multipleOfIndex(array) {
  return array.filter((n, i) => n % i === 0);
}

// console.log(multipleOfIndex([22, -6, 32, 82, 9, 25]));
// ##################################################

// Exclamation marks series #2: Remove all exclamation marks from the end of sentence

function remove(string) {
  while (string[string.length - 1] == "!") {
    string = string.slice(0, -1);
    console.log(string);
  }
  return string;
}
// console.log(remove("hello! how are you !!!"));

// ##################################################

// Regexp Basics - is it a digit?
// One digit only
String.prototype.digit = function () {
  if (this.length === 0) {
    return false;
  }
  let reg = /^\d{1}$/g;
  return reg.test(this);
};

// console.log("14".digit());
// ##################################################

// Find the position!

function position(letter) {
  return letter.charCodeAt(0) - 96;
}

// console.log(position("a"));
// ##################################################

// Take the Derivative

function derive(coefficient, exponent) {
  return `${coefficient * exponent}x^${
    exponent !== 1 ? exponent - 1 : exponent
  }`;
}

// ##################################################

// Is it a number?

function isDigit(s) {
  if (/[a-z]/g.test(s)) {
    return false;
  }
  let s2 = s.replace(/[\s-]/g, "");
  console.log(s2);
  if (parseFloat(s2) && s2.indexOf(".") !== -1) {
    return true;
  } else if (String(parseInt(s2)).length === 1) {
    return true;
  } else {
    return false;
  }
}

// console.log(isDigit("-0"));

// ##################################################

// Exclamation marks series #6: Remove n exclamation marks in the sentence from left to right

function remove(s, n) {
  if (n <= 0) {
    return s;
  }
  s = s.replace("!", "");
  return remove(s, n - 1);
}
// console.log(remove("!hi!!!!!!!", 1));

// ##################################################

// Do you speak "English"?

function spEng(sentence) {
  return sentence.toLowerCase().indexOf("english") !== -1;
}

// ##################################################

// Regex count lowercase letters

function lowercaseCount(str) {
  let count = 0;
  str.split("").forEach((s) => {
    if (/[a-z]/.test(s)) {
      count++;
    }
  });
  return count;
}

// console.log(lowercaseCount("AwsYaseen"));

// ##################################################

// Tip Calculator

function calculateTip(amount, rating) {
  switch (rating.toLowerCase()) {
    case "terrible":
      return Math.ceil(amount * 0);
    case "poor":
      return Math.ceil(amount * 0.05);
    case "good":
      return Math.ceil(amount * 0.1);
    case "great":
      return Math.ceil(amount * 0.15);
    case "excellent":
      return Math.ceil(amount * 0.2);
    default:
      return "Rating not recognised";
      break;
  }
}

// ##################################################

// repeatIt

var repeatIt = function (str, n) {
  if (typeof str !== "string") {
    return "Not a string";
  }
  let result = "";
  for (let i = 0; i < n; i++) {
    result += str;
  }
  return result;
};

// ##################################################

// Pillars
function pillars(num_pill, dist, width) {
  if (num_pill < 2) {
    return 0;
  }
  return (num_pill - 1) * (dist * 100 + width) - width;
}

// console.log(pillars(1, 10, 10));
// console.log(pillars(2, 20, 25));
// console.log(pillars(11, 15, 30));
// ##################################################

// Classic Hello World

// Print "Hello World!" to the screen
// did not pass the test
class Solution {
  constructor(param1, param2) {
    this.param1 = param1;
    this.param2 = param2;
  }
  main() {
    console.log("Hello Wolrd!\n");
  }
}
let s = new Solution();
// s.main("hello", "world");
// ##################################################

// How many stairs will Suzuki climb in 20 years?
var sunday = [
    6737, 7244, 5776, 9826, 7057, 9247, 5842, 5484, 6543, 5153, 6832, 8274,
    7148, 6152, 5940, 8040, 9174, 7555, 7682, 5252, 8793, 8837, 7320, 8478,
    6063, 5751, 9716, 5085, 7315, 7859, 6628, 5425, 6331, 7097, 6249, 8381,
    5936, 8496, 6934, 8347, 7036, 6421, 6510, 5821, 8602, 5312, 7836, 8032,
    9871, 5990, 6309, 7825,
  ],
  monday = [
    9175, 7883, 7596, 8635, 9274, 9675, 5603, 6863, 6442, 9500, 7468, 9719,
    6648, 8180, 7944, 5190, 6209, 7175, 5984, 9737, 5548, 6803, 9254, 5932,
    7360, 9221, 5702, 5252, 7041, 7287, 5185, 9139, 7187, 8855, 9310, 9105,
    9769, 9679, 7842, 7466, 7321, 6785, 8770, 8108, 7985, 5186, 9021, 9098,
    6099, 5828, 7217, 9387,
  ],
  tuesday = [
    8646, 6945, 6364, 9563, 5627, 5068, 9157, 9439, 5681, 8674, 6379, 8292,
    7552, 5370, 7579, 9851, 8520, 5881, 7138, 7890, 6016, 5630, 5985, 9758,
    8415, 7313, 7761, 9853, 7937, 9268, 7888, 6589, 9366, 9867, 5093, 6684,
    8793, 8116, 8493, 5265, 5815, 7191, 9515, 7825, 9508, 6878, 7180, 8756,
    5717, 7555, 9447, 7703,
  ],
  wednesday = [
    6353, 9605, 5464, 9752, 9915, 7446, 9419, 6520, 7438, 6512, 7102, 5047,
    6601, 8303, 9118, 5093, 8463, 7116, 7378, 9738, 9998, 7125, 6445, 6031,
    8710, 5182, 9142, 9415, 9710, 7342, 9425, 7927, 9030, 7742, 8394, 9652,
    5783, 7698, 9492, 6973, 6531, 7698, 8994, 8058, 6406, 5738, 7500, 8357,
    7378, 9598, 5405, 9493,
  ],
  thursday = [
    6149, 6439, 9899, 5897, 8589, 7627, 6348, 9625, 9490, 5502, 5723, 8197,
    9866, 6609, 6308, 7163, 9726, 7222, 7549, 6203, 5876, 8836, 6442, 6752,
    8695, 8402, 9638, 9925, 5508, 8636, 5226, 9941, 8936, 5047, 6445, 8063,
    6083, 7383, 7548, 5066, 7107, 6911, 9302, 5202, 7487, 5593, 8620, 8858,
    5360, 6638, 8012, 8701,
  ],
  friday = [
    5000, 5642, 9143, 7731, 8477, 8000, 7411, 8813, 8288, 5637, 6244, 6589,
    6362, 6200, 6781, 8371, 7082, 5348, 8842, 9513, 5896, 6628, 8164, 8473,
    5663, 9501, 9177, 8384, 8229, 8781, 9160, 6955, 9407, 7443, 8934, 8072,
    8942, 6859, 5617, 5078, 8910, 6732, 9848, 8951, 9407, 6699, 9842, 7455,
    8720, 5725, 6960, 5127,
  ],
  saturday = [
    5448, 8041, 6573, 8104, 6208, 5912, 7927, 8909, 7000, 5059, 6412, 6354,
    8943, 5460, 9979, 5379, 8501, 6831, 7022, 7575, 5828, 5354, 5115, 9625,
    7795, 7003, 5524, 9870, 6591, 8616, 5163, 6656, 8150, 8826, 6875, 5242,
    9585, 9649, 9838, 7150, 6567, 8524, 7613, 7809, 5562, 7799, 7179, 5184,
    7960, 9455, 5633, 9085,
  ];

let all = [sunday, monday, tuesday, wednesday, thursday, friday, saturday];
// console.log(all.flat());
// console.log(all.flat().reduce((a, c) => a + c, 0) * 20);

function stairsIn20(s) {
  let sAll = [];
  s.forEach((a) => a.forEach((a1) => sAll.push(a1)));
  console.log(sAll);
  return sAll.reduce((a, c) => a + c, 0) * 20;
}

// console.log(stairsIn20(all));
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
console.log(calculator(1, 2, "+"));

// ##################################################
