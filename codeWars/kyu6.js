// ##################################################

// Create Phone Number
function createPhoneNumber(numbers) {
  return `(${numbers.slice(0, 3).join("")}) ${numbers
    .slice(3, 6)
    .join("")}-${numbers.slice(6).join("")}`;
}
// console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));

// ##################################################

// Find the odd int

function findOdd(A) {
  let obj = {};
  A.reduce((a, c) => {
    if (c in obj) {
      a[c]++;
    } else {
      a[c] = 1;
    }
    return obj;
  }, obj);
  for (let o in obj) {
    if (obj[o] % 2 !== 0) {
      return Number(o);
    }
  }
}

console.log(findOdd([0, 1, 0, 1, 0]));
// ##################################################
