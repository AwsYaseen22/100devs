/*
Looping a triangle
Write a loop that makes seven calls to console.log to output the following triangle:

#
##
###
####
#####
######
#######
*/

let line = "#";
for (let i = 0; i < 7; i++) {
  console.log(line);
  line += "#";
}

// #######################################################################

/* FizzBuzz
Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.

When you have that working, modify your program to print "FizzBuzz" for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).

(This is actually an interview question that has been claimed to weed out a significant percentage of programmer candidates. So if you solved it, your labor market value just went up.) */

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

// #######################################################################

/*Chessboard
Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.

Passing this string to console.log should show something like this:

 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # #
When you have a program that generates this pattern, define a binding size = 8 and change the program so that it works for any size, outputting a grid of the given width and height.*/

// set the size of the board
let size = 8;
let chessBoard = "";
// loope twice as the board is the same for the width and height
for (let i = 0; i < size; i++) {
  for (let j = 0; j < size; j++) {
    // check the line number start with 0 so check by if it is odd or even
    if (i % 2 == 0) {
      // if it is the first field (0) then put space else put #
      if (j % 2 == 0) {
        chessBoard += " ";
      } else {
        chessBoard += "#";
      }
    } else {
      if (j % 2 == 0) {
        chessBoard += "#";
      } else {
        chessBoard += " ";
      }
    }
  }
  chessBoard += "\n";
  //   console.log(chessBoard);
}
console.log(chessBoard);

// second solution with one loop
let size2 = 64;
let chessBoard2 = "";
let startWithSpace = true;
for (let i = 1; i < size2; i++) {
  if (startWithSpace) {
    if (i % 2 !== 0) {
      chessBoard2 += " ";
    } else {
      chessBoard2 += "#";
    }
  } else {
    if (i % 2 == 0) {
      chessBoard2 += " ";
    } else {
      chessBoard2 += "#";
    }
  }
  if (i % 8 == 0) {
    chessBoard2 += "\n";
    startWithSpace = !startWithSpace;
  }
}
console.log(chessBoard2);
