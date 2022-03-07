// *Variables*
// Declare a variable, assign it a value, and alert the value
let variable = 12;
alert(variable);

// Create a variable, divide it by 10, and console log the value
let num = 20;
num = num / 10;
console.log(num);

// *Functions*
// Create a function that multiplys 3 numbers and alerts the product
function multiplys3(n1, n2, n3) {
  alert(n1 * n2 * n3);
}
multiplys3(2, 3, 4);

// Create a function that takes in 4 numbers. Add the first two numbers and subtract the next two. Console log the result
function add2sub2(n1, n2, n3, n4) {
  let addition = n1 + n2;
  console.log(addition - n3 - n4);
}
add2sub2(2, 3, 4, 5);

// *Conditionals*
// Create a function that takes in 3 numbers. Starting with 100 add the first number, subtract the second, and divide the third. If the value is greater then 25, console log "WE HAVE A WINNNA"
function complex1(n1, n2, n3) {
  let result = (n1 + 100 - n2) / n3;
  if (result > 25) {
    console.log("WE HAVE A WINNNA");
  }
}
complex1(50, 2, 4);

// Create a function that takes in a day of the week. If it is a weekend alert, "weekend" and if not alert "week day". Handle capitilization and if the user does not enter a day of the week alert "Try again!"
function weekCheck(day) {
  day = day.toLowerCase();
  if (day === "saturday" || day === "sunday") {
    alert("weekend");
  } else if (
    day === "monday" ||
    day === "tuesday" ||
    day === "wednesday" ||
    day === "thursday" ||
    day === "friday"
  ) {
    alert("week day");
  } else {
    alert("Try again!");
  }
}
weekCheck("Sunday");

//*Loops*
//Create a function that takes in a number. Console log all values from 1 to that number or greater, but count by 3
function logNums(num) {
  for (let i = 1; i <= num; i += 3) {
    console.log(i);
  }
}
logNums(12);
