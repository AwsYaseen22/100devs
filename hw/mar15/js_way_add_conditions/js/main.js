// /*
// Following day
// Write a program that accepts a day name from the user, then shows the name of the following day. Incorrect inputs must be taken into account.
// */
// // with if statement

// let day = prompt("enter a day name: ").toLowerCase();
// if (day === "saturday") {
//   console.log("Sunday");
// } else if (day === "sunday") {
//   console.log("Monday");
// } else if (day === "monday") {
//   console.log("Tuesday");
// } else if (day === "tuesday") {
//   console.log("Wednesday");
// } else if (day === "wednesday") {
//   console.log("Thursday");
// } else if (day === "thursday") {
//   console.log("Friday");
// } else if (day === "friday") {
//   console.log("Saturday");
// } else {
//   console.log("Incorrect input, try again");
// }

// // with switch case

// switch (day) {
//   case "saturday":
//     console.log("Sunday");
//     break;
//   case "sunday":
//     console.log("Monday");
//     break;
//   case "monday":
//     console.log("Tuesday");
//     break;
//   case "tuesday":
//     console.log("Wednesday");
//     break;
//   case "wednesday":
//     console.log("Thursday");
//     break;
//   case "thursday":
//     console.log("Friday");
//     break;
//   case "friday":
//     console.log("Saturday");
//     break;
//   default:
//     console.log("Incorrect input, try again");
// }

// /*
// Number comparison
// Write a program that accepts two numbers, then compares their values and displays an appropriate message in all cases.
// */
// // with if statement

// let num1 = Number(prompt("enter first number: "));
// let num2 = Number(prompt("enter second number: "));
// if (num1 > num2) {
//   console.log("the first number is greater the second one!");
// } else if (num1 < num2) {
//   console.log("the first number is less than the second one!");
// } else {
//   console.log("the first number is equal the second one!");
// }
// // with switch
// switch (true) {
//   case num1 > num2:
//     console.log("the first number is greater the second one!");
//     break;
//   case num1 < num2:
//     console.log("the first number is less than the second one!");
//     break;
//   default:
//     console.log("the first number is equal the second one!");
//     break;
// }

// /*
// Final values
// Take a look at the following program.
// */

// let nb1 = Number(prompt("Enter nb1:"));
// let nb2 = Number(prompt("Enter nb2:"));
// let nb3 = Number(prompt("Enter nb3:"));

// if (nb1 > nb2) {
//   nb1 = nb3 * 2;
// } else {
//   nb1++;
//   if (nb2 > nb3) {
//     nb1 += nb3 * 3;
//   } else {
//     nb1 = 0;
//     nb3 = nb3 * 2 + nb2;
//   }
// }
// console.log(nb1, nb2, nb3);

// /*
// Before executing it, try to guess the final values of variables nb1, nb2 and nb3 depending on their initial values. Complete the following table.
// */
// /*
// Initial values	    nb1 final value	    nb2 final value	    nb3 final value
// nb1=nb2=nb3=4			  0                   4                   12
// nb1=4,nb2=3,nb3=2		4                   3                   2
// nb1=2,nb2=4,nb3=0		3                   4                   0
// */

// /*
// Number of days in a month
// Write a program that accepts a month number (between 1 and 12), then shows the number of days of that month. Leap years are excluded. Incorrect inputs must be taken into account.
// */

// let month = Number(prompt("enter month number: "));
// // 1,3,5,7,8,10,12 ==> 31 days
// // 4,6,9,11 ==> 30 days
// // 2 ==> 28 days
// if (
//   month === 1 ||
//   month === 3 ||
//   month === 5 ||
//   month === 7 ||
//   month === 8 ||
//   month === 10 ||
//   month === 12
// ) {
//   console.log("num of days: 31");
// } else if (month === 4 || month === 6 || month === 9 || month === 11) {
//   console.log("num of days: 30");
// } else if (month === 2) {
//   console.log("num of days: 28");
// } else {
//   console.log("please enter a valid month number!");
// }
// // with switch
// switch (month) {
//   case 1:
//   case 3:
//   case 5:
//   case 7:
//   case 8:
//   case 10:
//   case 12:
//     console.log("num of days: 31");
//     break;
//   case 4:
//   case 6:
//   case 9:
//   case 11:
//     console.log("num of days: 30");
//     break;
//   case 2:
//     console.log("num of days: 28");
//     break;
//   default:
//     console.log("please enter a valid month number!");
//     break;
// }

/*
Following second
Write a program that asks for a time under the form of three information (hours, minutes, seconds). The program calculates and shows the time one second after. Incorrect inputs must be taken into account.

This is not as simple as it seems... Look at the following results to see for yourself:

14h17m59s => 14h18m0s
6h59m59s => 7h0m0s
23h59m59s => 0h0m0s (midnight)

6h60m59s => Error
25h0m0s => Error
23a59a59s => Error
23 59 59  => Error
*/

let time = prompt("enter the time in the format like: 14h17m59s");

let h = Number(time.split("h")[0]);
let m = Number(time.split("m")[0].split("h")[1]);
let s = Number(time.split("s")[0].split("m")[1]);
// console.log(h, m, s);
// check if the user input letters other than s, m, h
// that will create a NaN value when spleting
sTest = isNaN(parseInt(s));
mTest = isNaN(parseInt(m));
hTest = isNaN(parseInt(h));
// console.log(hTest, mTest, sTest);
if (h >= 24 || h < 0 || hTest) {
  console.log("please enter a valid time like the pattern requested");
} else if (m >= 60 || m < 0 || mTest) {
  console.log("please enter a valid time like the pattern requested");
} else if (s >= 60 || s < 0 || sTest) {
  console.log("please enter a valid time like the pattern requested");
} else {
  let sAfter = s + 1;
  if (sAfter < 60) {
    console.log(`${h}h${m}m${sAfter}s`);
  } else if (sAfter >= 60) {
    sAfter = sAfter % 60;
    let mAfter = m + 1;
    if (mAfter < 60) {
      console.log(`${h}h${mAfter}m${sAfter}s`);
    } else if (mAfter >= 60) {
      mAfter = mAfter % 60;
      let hAfter = h + 1;
      if (hAfter < 24) {
        console.log(`${hAfter}h${mAfter}m${sAfter}s`);
      } else if (hAfter >= 24) {
        hAfter = hAfter % 24;
        console.log(`${hAfter}h${mAfter}m${sAfter}s`);
      }
    }
  }
}
