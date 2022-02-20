// the tasks of the function section of the book: javascript.info/function-basics

https: function showPrimes(n) {
  nextPrime: for (let i = 2; i < n; i++) {
    // console.log(`i is: ${i}`);
    // it will pass the 2 coz 2 not < 2 so it take 2 as the first prime
    for (let j = 2; j < i; j++) {
      console.log(`${i} % ${j} = `, i % j);
      if (i % j == 0) continue nextPrime;
    }
    // alert(i); // a prime
    console.log(i);
  }
}

// showPrimes(9);

// Is "else" required?
// importance: 4

// no its the same coz it just the return and by default if the code keep runing it gone to the second return without the need of the else statement

// Rewrite the function using '?' or '||'
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm("Did parents allow you?");
  }
}
function checkAgeWithQuestion(age) {
  return age > 18 ? true : confirm("Did parents allow you?");
}
function checkAgeWithOr(age) {
  return age > 18 || confirm("Did parents allow you?");
}

// Function min(a, b)
function min(a, b) {
  return a < b ? a : b;
}

// Function pow(x,n)
function pow(x, n) {
  let result = 1;
  for (n; n > 0; n--) {
    result *= x;
  }
  return result;
}

let x = prompt("the basic number: x?", "");
let n = prompt("the power numner: n?", "");
if (n < 1) {
  alert("the numbers must be positive numbers");
} else {
  alert(pow(x, n));
}
