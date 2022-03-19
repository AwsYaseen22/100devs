//Create a function that takes in an array of numbers. Return a new array containing every even number from the original array (do not use map or filter)
function evenArr(arr) {
  //   console.log(arr.filter((x) => x % 2 === 0));
  let evenA = [];
  arr.forEach((x) => {
    if (x % 2 === 0) {
      evenA.push(x);
    }
  });
  console.log(evenA);
}
evenArr([1, 2, 3, 4, 5, 6, 7, 8]);
