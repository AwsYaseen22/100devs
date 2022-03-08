// /*
// Carousel
// Write a program that launches a carousel for 10 turns, showing the turn number each time.

// When it's done, improve it so that the number of turns is given by the user.
// */
// // basic
// for (let i = 1; i <= 10; i++) {
//   console.log(`(for basic) turn no. ${i}`);
// }
// let i = 1;
// while (i <= 10) {
//   console.log(`(while basic) turn no. ${i}`);
//   i++;
// }
// // take the number from the user
// let userNumber = Number(prompt("Please enter a number of turns: "));
// for (let i = 1; i <= userNumber; i++) {
//   console.log(`(for prompt) turn no. ${i}`);
// }
// let j = 1;
// while (j <= userNumber) {
//   console.log(`(while prompt)turn no. ${j}`);
//   j++;
// }

// /*
// Parity
// Check the following program that shows even numbers (divisible by 2) between 1 and 10.

// for (let i = 1; i <= 10; i++) {
//   if (i % 2 === 0) {
//     console.log(`${i} is even`);
//   }
// }
// This program uses the modulo operator %, which calculates the remainder after division of one number by another. It's often used to assess number parity.

// console.log(10 % 2); // 0 because 10 = 5 * 2 + 0
// console.log(11 % 2); // 1 because 11 = 5 * 2 + 1
// console.log(18 % 3); // 0 because 18 = 3 * 6 + 0
// console.log(19 % 3); // 1 because 19 = 3 * 6 + 1
// console.log(20 % 3); // 2 because 20 = 3 * 6 + 2
// Improve the program so that it also shows odd numbers. Improve it again to replace the initial number 1 by a number given by the user.

// This program must show exactly 10 numbers including the first one, not 11 numbers!
// */
// // basic for
// for (let i = 1; i <= 10; i++) {
//   if (i % 2 === 0) {
//     console.log(`${i} is even`);
//   } else {
//     console.log(`${i} is odd`);
//   }
// }
// // basic while
// let whileI = 1;
// while (whileI <= 10) {
//   if (whileI % 2 === 0) {
//     console.log(`${whileI} is even`);
//   } else {
//     console.log(`${whileI} is odd`);
//   }
//   whileI++;
// }
// // initial by the user
// let userNum = Number(prompt("Please enter itital value: "));
// let maxNum = userNum + 9;
// for (let i = userNum; i <= maxNum; i++) {
//   if (i % 2 === 0) {
//     console.log(`${i} is even`);
//   } else {
//     console.log(`${i} is odd`);
//   }
// }
// let whileI2 = userNum;
// while (whileI2 <= maxNum) {
//   if (whileI2 % 2 === 0) {
//     console.log(`${whileI2} is even`);
//   } else {
//     console.log(`${whileI2} is odd`);
//   }
//   whileI2++;
// }

// /*
//  Input validation
// Write a program that continues to ask the user for a number until the entered number is less than or equal to 100.

// When you are done with the above, improve the program so that the terminating number is between 50 and 100.
//  */
// // basic
// let userNum1 = Number(prompt("Please guess a number: "));
// while (userNum1 > 100) {
//   userNum1 = Number(prompt("Please guess a number: "));
// }
// console.log("You guess it!");
// // improved
// let userNum2 = Number(prompt("Please guess a number: "));
// while (userNum2 < 50 || userNum2 > 100) {
//   userNum2 = Number(prompt("Please guess a number: "));
// }
// console.log("You guess it!");

// /*
// Multiplication table
// Write a program that asks the user for a number, then shows the multiplication table for this number.

// When you are done, improve the program so it only accepts numbers between 2 and 9 (use the previous exercise as a blueprint).
// */

// let userMultiNum = Number(
//   prompt(
//     "Please enter a number between 2 and 9 to generate its multiplication table"
//   )
// );
// // improved
// while (userMultiNum < 2 || userMultiNum > 9) {
//   userMultiNum = Number(
//     prompt(
//       "Please enter a number between 2 and 9 to generate its multiplication table"
//     )
//   );
// }
// for (let i = 1; i <= 10; i++) {
//   console.log(`${userMultiNum} * ${i} = ${userMultiNum * i}`);
// }

// /*
// Neither yes nor no
// Write a program that plays "neither yes, nor no" with the user. Specifically, the programs asks the user to enter text until either "yes" or "no" is typed, which ends the game.
// */
// let userInputNeither = prompt("Please type something!").toLowerCase();
// while (userInputNeither != "yes" && userInputNeither != "no") {
//   console.log(userInputNeither);
//   userInputNeither = prompt("Please type something else!").toLowerCase();
// }
// console.log(`you loose the game as you say: ${userInputNeither}!`);

/*
FizzBuzz
Write a program that shows all numbers between 1 and 100 with the following exceptions:

It shows "Fizz" instead if the number is divisible by 3.

It shows "Buzz" instead if the number is divisible by 5 and not by 3.

When it's done, improve it so that the program shows "FizzBuzz" instead for numbers divisible both by 3 and by 5.

This exercise has many, many solutions. It's a job interview classic that a significant number of candidates fail. Try your best!
*/

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 == 0) {
    console.log(`${i} FizzBuzz`);
  } else if (i % 3 === 0) {
    console.log(`${i} Fizz`);
  } else if (i % 5 == 0) {
    console.log(`${i} Buzz`);
  }
}
