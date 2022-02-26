// *Variables*
// Create a variable and console log the value
let x = 10;
console.log(x);

// Create a variable, add 10 to it, and alert the value
let y = 0;
y += 10;
alert(y);

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function sub4(n1, n2, n3, n4) {
  let result = n1 - n2 - n3 - n4;
  alert(result);
}

sub4(9, 6, 4, 3);

// Create a function that divides one number by another and returns the remainder
function divideRemainder(n1, n2) {
  return n1 % n2;
}
divideRemainder(10, 3);

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function add2(n1, n2) {
  let result = n1 + n2;
  if (result > 50) {
    alert("Jumanji");
  }
}
add2(30, 50);

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function multi3(n1, n2, n3) {
  let result = n1 * n2 * n3;
  if (result % 3 === 0) {
    alert("ZEBRA");
  }
}
multi3(2, 3, 4);
