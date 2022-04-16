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

console.log(longest("aretheyhere", "yestheyarehere"));
// ##################################################
