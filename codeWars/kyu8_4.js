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
