//Arrays

//Create and array of tv shows. Loop through and print each show to the console
const tvshowArr = ["show1", "show2", "show3"];
tvshowArr.forEach((show) => console.log(show));

//Create and array of numbers
//Return a new array of numbers that includes every even number from the previous Arrays
const nums = [1, 2, 3, 4, 5];
let evenNums = nums.filter((n) => n % 2 === 0);
console.log(evenNums);

//Create a function that takes in an array of numbers
//Alert the sum of the second lowest and the second highest number
function alertTheSums(arr) {
  let sortedArr = arr.sort((a, b) => a - b);
  //   sortedArr.splice(0, 1);
  //   sortedArr.splice(sortedArr.length - 1, 1);
  //   console.log(sortedArr);
  return sortedArr[1] + sortedArr[sortedArr.length - 2];
}

console.log(alertTheSums([10, 5, 1, 2, 3, 4, 5]));
