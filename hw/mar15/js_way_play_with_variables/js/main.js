// Improved hello
// Write a program that asks the user for his first name and his last name. The program then displays them in one sentence.
let firstName = prompt("Enter your first name: ");
let lastName = prompt("Enter your last name: ");

alert(`${firstName} ${lastName}`);

// Final values
// Observe the following program and try to predict the final values of its variables.

let a = 2; // a = 2
a -= 1; // a = 1
a++; // a = 2
let b = 8; // b = 8
b += 2; // b = 10
const c = a + b * b; // c = 102
const d = a * b + b; // d = 30
const e = a * (b + b); // e = 40
const f = (a * b) / a; // f = 10
const g = (b / a) * a; // g = 10
console.log(a, b, c, d, e, f, g); // 2 10 102 30 40 10 10

/*
VAT calculation
Write a program that asks the user for a raw price. After that, it calculates the corresponding final price using a VAT rate of 20.6%.
*/
let rawPrice = Number(prompt("enter the raw price to add vat to it: "));
alert(`the price after VAT: ${rawPrice * 1.206}`);
alert(`the price after VAT: ${(rawPrice * 20.6) / 100 + rawPrice}`);

/*
From Celsius to Fahrenheit degrees
Write a program that asks for a temperature in Celsius degrees, then displays it in Fahrenheit degrees.
The conversion between scales is given by the formula: [°F] = [°C] x 9/5 + 32.
*/
let celDegree = Number(prompt("enter the Celesius degree: "));
let fahDegree = (celDegree * 9) / 5 + 32;
alert(`the degree in Fahrenheit: ${fahDegree}`);

/*
Variable swapping
Observe the following program.
*/
let number1 = 5;
let number2 = 3;

// TODO: type your code here (and nowhere else!)

const temp = number1; // the trick is using const that never changes and stored in another memory slot as i think?
number1 = number2;
number2 = temp;

console.log(number1); // Should show 3
console.log(number2); // Should show 5
// Add the necessary code to swap the values of variables number1 and number2.

/* T> This exercise has several valid solutions. You may use more than two variables to solve it.
 */
