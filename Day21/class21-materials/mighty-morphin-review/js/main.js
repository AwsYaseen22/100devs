// *Variables*
// Declare a variable, reassign it to your fav holiday, make sure it is in all caps, and print the value to the console
let v1;
v1 = "EID ALfitr";
console.log(v1.toUpperCase());

//Declare a variable, assign it a string, alert the last three characters in the string (Use your google-fu and the MDN)
let v2;
v2 = "100Devs";
alert(v2.slice(-3));

// *Functions*
// Create a function that takes in 5 numbers. Subtract all five from 100. Alert the absolute value of the difference. Call the function.
function fiveNums(n1, n2, n3, n4, n5) {
  let subFrom100 = 100 - n1 - n2 - n3 - n4 - n5;
  alert(Math.abs(subFrom100));
}
fiveNums(1, 2, 3, 4, 5);

// Create a function that takes in 3 numbers. Console log lowest and highest values. Call the function.
function bigAndSmall(n1, n2, n3) {
  console.log(Math.max(n1, n2, n3));
  console.log(Math.min(n1, n2, n3));
}

bigAndSmall(3, 6, 4);

// *Conditionals*
//Create a function that returns heads or tails randomly and as fairly as possible. Call the function.
function headsOrTails() {
  let rand = Math.floor(Math.random() * 2);
  return rand === 0 ? "heads" : "tails";
}

console.log(headsOrTails());

//*Loops*
//Create a function that takes in a number. Console log the result of heads or tails using the previous function x times where x is the number passed into the function. Call the function.
function callHeadsOrTails(x) {
  for (let i = 1; i <= x; i++) {
    console.log(headsOrTails());
  }
}

callHeadsOrTails(10);
