// *Variables*
// Create a variable and console log the value
let v = 10;
console.log(v);

// Create a variable, add 10 to it, and alert the value
let h = 10;
h += 10;
alert(h);

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function sub4(n1, n2, n3, n4) {
  alert(n1 - n2 - n3 - n4);
}
sub4(9, 2, 3, 1);

// Create a function that divides one number by another and returns the remainder
function divides(n1, n2) {
  return n1 % n2;
}
console.log(divides(10, 5));

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function adds2(n1, n2) {
  let addition = n1 + n2;
  if (addition > 50) {
    alert("Jumanji");
  }
}
adds2(50, 10);

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function mult3(n1, n2, n3) {
  let mul = n1 * n2 * n3;
  if (mul % 3 === 0) {
    alert("Zebra");
  }
}
mult3(1, 3, 10);

//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in
function wordNums(word, nums) {
  for (let i = 0; i < nums; i++) {
    console.log(word);
  }
}
wordNums("Iraq", 10);
