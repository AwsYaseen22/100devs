// while loop
let num = 1;
while (num <= 5) {
  console.log(num);
  num++;
}

// for loop
for (i = 1; i <= 5; i++) {
  console.log(i);
}

// tasks

// Carousel
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

let turns = prompt("How many turn you need?", 10);
for (let i = 1; i <= turns; i++) {
  console.log(i);
}

// Parity
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(`${i} is even`);
  } else {
    console.log(`${i} is odd`);
  }
}

let nums = prompt("choose how many numbers to test", 10);
for (let i = 1; i <= nums; i++) {
  if (i % 2 === 0) {
    console.log(`${i} is even`);
  } else {
    console.log(`${i} is odd`);
  }
}

// Input validation
// num < 100 to terminate
let num = prompt("please enter a number", 200);
while (num > 100) {
  num = prompt("please enter a number", 200);
}

// between 50 and 100 to terminate
let num = prompt("please enter a number", 200);
while (num < 50 || num > 100) {
  num = prompt("please enter a number", 200);
}

// Multiplication table
// normal
let num = prompt(
  "please select a number to give you the multiplication table",
  2
);
for (let i = 1; i <= 10; i++) {
  console.log(`${num} x ${i} = ${num * i}`);
}
// improvement accept 2-9
let num = prompt(
  "please select a number between 2 and 9 to give you the multiplication table",
  2
);
while (num < 2 || num > 9) {
  num = prompt(
    "please select a number between 2 and 9 to give you the multiplication table",
    2
  );
}
for (let i = 1; i <= 10; i++) {
  console.log(`${num} x ${i} = ${num * i}`);
}

// Neither yes nor no
let answer = prompt("Please type yes or no", "something else!");
while (answer !== "yes" && answer !== "no") {
  answer = prompt("Please type yes or no", "something else!");
}

// FizzBuzz
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0) {
    console.log(`${i} Fizz`);
  } else if (i % 5 === 0 && i % 3 !== 0) {
    console.log(`${i} Buzz`);
  }
}

// improved
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 == 0) {
    console.log(`${i} FizzBuzz`);
  } else if (i % 3 === 0) {
    console.log(`${i} Fizz`);
  } else if (i % 5 === 0) {
    console.log(`${i} Buzz`);
  }
}
