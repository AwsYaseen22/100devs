//create a function that adds two numbers and alerts the sum
function add2(n1, n2) {
  let result = n1 + n2;
  alert(result);
}
add2(1, 4);

//create a function that multiplys three numbers and console logs the product
function multi3(n1, n2, n3) {
  let result = n1 * n2 * n3;
  console.log(result);
}
multi3(2, 3, 4);

//create a function that divides two numbers and returns the ???
function divides2(n1, n2) {
  if (n2 === 0) {
    console.log("error");
    return;
  }
  let result = n1 / n2;
  return result;
}

divides2(10, 5);
