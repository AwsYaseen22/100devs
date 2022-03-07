//---Easy
//create a function that subtracts two numbers and alerts the difference
function subtractTwo(num1, num2) {
  alert(num1 - num2);
}
subtractTwo(10, 2);

//create a function that divides three numbers and console logs the quotient
function divideThree(n1, n2, n3) {
  console.log(n1 / n2 / n3);
}
divideThree(20, 2, 5);

//create a function that multiplys three numbers and returns the product
function multiplyThree(n1, n2, n3) {
  return n1 * n2 * n3;
}
multiplyThree(2, 3, 4);

//---Medium
//create a function that takes in three numbers. Add the first two numbers and return the remainder of dividing the sum of the first two numbers by the third number
function complex1(n1, n2, n3) {
  let addition = n1 + n2;
  return addition % n3;
}
complex1(2, 3, 2);

//---Hard
//create a function that takes in 4 numbers. Multiply the first two numbers. If the product is greater than 100 add the sum of the last two numbers and console log the value. If the product is less that 100, subtract the difference of the last two numbers and console log the value. If the product is 100, multiply the first three numbers together and alert the remainder of dividing the fourth number
function complex2(n1, n2, n3, n4) {
  let mult2 = n1 * n2;
  if (mult2 > 100) {
    mult2 += n3 + n4;
    console.log(mult2);
  } else if (mult2 < 100) {
    mult2 -= n3 - n4;
    console.log(mult2);
  } else if (mult2 === 100) {
    let mult3 = n1 * n2 * n3;
    alert(mult3 % n4);
  }
}

complex2(10, 10, 1, 2);
