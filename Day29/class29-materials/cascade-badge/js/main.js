//Arrays
//Your pokemon party order which is a list of pokemon has been leaked to Misty. Please create a function that reverses your list and prints it to the console.
let list = ["butter", "pika", "char"];
function reverseList(arr) {
  return arr.reverse();
}
console.log(reverseList(list));

//Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.

let a = [2, 4, 6, 8];
let b = [1, 2, 3, 4];
function compare(a, b) {
  squaredSm = a.reduce((acc, cur) => acc + cur ** 2, 0);
  cubesSm = b.reduce((acc, cur) => acc + cur ** 3, 0);
  return a > b;
}
console.log(compare(a, b));
//Return a new array consisting of elements which are multiple of their own index in input array (length > 1).
// Some cases:
// [22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]
// [68, -1, 1, -7, 10, 10] => [-1, 10]
let arr1 = [22, -6, 32, 82, 9, 25];
console.log(arr1.filter((n, i) => n % i === 0));

//Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.Return your answer as a number.
let arr2 = [22, -6, "32", 82, "9", 25];
console.log(arr2.reduce((acc, cur) => acc + Number(cur)));
