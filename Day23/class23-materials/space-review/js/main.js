//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
let nums = [1, 2, 3, 4, 5];
alert(nums.reduce((a, c) => a + c, 0));

//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared
function squared(arr) {
  return arr.map((n) => Math.pow(n, 2));
}
console.log(squared([2, 4, 6, 8]));

//Create a function that takes string
//Print the reverse of that string to the console
function reverse(str) {
  return str.split("").reverse().join("");
}
// console.log(reverse("Aws"));

//Create a function that takes in a string
//Alert if the string is a palindrome or not
function palindrome(str) {
  let reversed = reverse(str);
  return str === reversed;
}

console.log(palindrome("leonnoel"));
