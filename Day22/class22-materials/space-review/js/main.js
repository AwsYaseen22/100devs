//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
let numsArr = [2, 3, 4, 5];
let sum = numsArr.reduce((a, c) => a + c, 0);
console.log(sum);

//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared
function doubleArr(arr) {
  return arr.map((n) => n * n);
}
console.log(doubleArr(numsArr));

//Create a function that takes string
//Print the reverse of that string to the console

function reverseStr(str) {
  return str.split("").reverse().join("");
}

console.log(reverseStr("Aws"));

//Create a function that takes in a string
//Alert if the string is a palindrome or not
function palindrome(str) {
  return reverseStr(str) === str;
}

console.log(palindrome("Aws"));
console.log(palindrome("leonnoel"));
