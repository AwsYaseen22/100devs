// Who ate the cookie?

function cookie(x) {
  if (typeof x === "string") {
    return `Who ate the last cookie? It was Zach!`;
  } else if (typeof x === "number") {
    return `Who ate the last cookie? It was Monica!`;
  } else {
    return `Who ate the last cookie? It was the dog!`;
  }
}

// ##################################################

// Multiply the number

function multiply(number) {
  const power =
    number > 0
      ? Math.pow(5, String(number).length)
      : Math.pow(5, String(number).length - 1);
  return number * power;
}
// console.log(multiply(10));
// ##################################################

// Grasshopper - Order of operations

function orderOperations() {
  return (2 + 2) * (2 + 2) * 2;
}

// ##################################################

// Online RPG: player to qualifying stage?
function playerRankUp(points) {
  if (points >= 100) {
    return "Well done! You have advanced to the qualifying stage. Win 2 out of your next 3 games to rank up.";
  } else {
    return false;
  }
}

// ##################################################

// Take an Arrow to the knee, Functionally

var ArrowFunc = function (arr) {
  return arr.map((n) => String.fromCharCode(n)).join("");
};

// ##################################################

// Get number from string

function getNumberFromString(s) {
  return Number(s.replace(/\D/g, ""));
}

// ##################################################

// Sum of two lowest positive integers

function sumTwoSmallestNumbers(numbers) {
  const sorted = numbers.sort((a, b) => a - b);
  console.log(sorted);
  return sorted[0] + sorted[1];
}

// console.log(sumTwoSmallestNumbers([15, 28, 4, 2, 43]));

// ##################################################

// Growth of a Population

function nbYear(p0, percent, aug, p) {
  let result = 1;
  while (p0 < p) {
    p0 = Math.floor(p0 + p0 * (percent / 100) + aug);
    if (p0 >= p) {
      return result;
    }
    result++;
  }
}

// console.log(nbYear(1500, 5, 100, 5000));
// console.log(nbYear(1500000, 2.5, 10000, 2000000));
// console.log(nbYear(1000, 2, 50, 1214));

// ##################################################

// Is this a triangle?

function isTriangle(a, b, c) {
  return a + b > c && a + c > b && b + c > a;
}

// ##################################################

// Two to One

function longest(s1, s2) {
  const all = (s1 + s2).split("");
  let s = new Set(all);
  let arr = [...s];
  return arr.sort().join("");
}

// console.log(longest("aretheyhere", "yestheyarehere"));

// ##################################################

// Evil or Odious

function evil(n) {
  let bi = n.toString(2);
  if (bi.match(/1/g).length % 2 === 0) {
    return `It's Evil!`;
  } else {
    return `It's Odious!`;
  }
}
// console.log(evil(16));

// ##################################################

// Grasshopper - Create the rooms

// Add rooms here
var rooms = {
  room1: {
    name: {},
    description: {},
    completed: {},
  },
  room2: {
    name: {},
    description: {},
    completed: {},
  },
  room3: {
    name: {},
    description: {},
    completed: {},
  },
};

// ##################################################

// Training JS #11: loop statement --break,continue

function grabDoll(dolls) {
  var bag = [];
  for (let i = 0; i < dolls.length; i++) {
    if (dolls[i] === "Hello Kitty" || dolls[i] === "Barbie doll") {
      bag.push(dolls[i]);
    } else {
      continue;
    }
    if (bag.length === 3) {
      break;
    }
  }
  return bag;
}

// ##################################################

// CSV representation of array
// another solve : return array.join('\n');
function toCsvText(array) {
  return array.reduce((a, c) => String(a + "\n") + c);
}

// ##################################################

// Character Frequency

function charFreq(message) {
  return message.split("").reduce((a, c) => {
    if (c in a) {
      a[c] += 1;
    } else {
      a[c] = 1;
    }
    return a;
  }, {});
}
// console.log(charFreq("I like cats"));

// ##################################################

// Check same case

function sameCase(a, b) {
  if (/[a-z]/.test(a) && /[a-z]/.test(b)) {
    return 1;
  } else if (/[A-Z]/.test(a) && /[A-Z]/.test(b)) {
    return 1;
  } else if (/[a-z]/.test(a) && /[A-Z]/.test(b)) {
    return 0;
  } else if (/[A-Z]/.test(a) && /[a-z]/.test(b)) {
    return 0;
  } else if (/[^a-zA-Z]/.test(a) || /[^a-zA-Z]/.test(b)) {
    return -1;
  }
}

// console.log(sameCase("a", "B"));

// ##################################################

// Training JS #12: loop statement --for..in and for..of

function giveMeFive(obj) {
  let result = [];
  for (let w in obj) {
    if (w.length === 5) {
      result.push(w);
    }
    if (obj[w].length === 5) {
      result.push(obj[w]);
    }
  }
  return result;
}

// ##################################################

// Grasshopper - Bug Squashing

// very bad one

var health = 100;
var position = 0;
var coins = 0;

function main() {
  rollDice();
  move();
  combat();
  getCoins();
  buyHealth();
  printStatus();
}

// ##################################################
