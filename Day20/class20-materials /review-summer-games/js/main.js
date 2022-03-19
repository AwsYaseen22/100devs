//Create a function that takes in an array of numbers. Multiply each number together and alert the product.
function multi(arr) {
  let result = arr.reduce((p, n) => p * n);
  console.log(result);
}

multi([1, 2, 3, 4]);
