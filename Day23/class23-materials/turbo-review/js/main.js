// *Variables*
// Declare a variable and assign it to a sentance as a string. Alert if the sentance is a question
let string = "How are you doing today?";
if (string.indexOf("?") !== -1) {
  alert(string);
}

//Declare a variable, assign it a string of multiple words, replace every "jr. dev" with "software engineer", and print it to the console
let strMulti = "he is a jr. dev";
console.log(strMulti.replaceAll("jr.", "software engineer"));

// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
function rockPaperScirssors() {
  let rand = Math.random();
  if (rand >= 0.66) {
    return "rock";
  } else if (rand <= 0.33) {
    return "paper";
  } else {
    return "scissors";
  }
}

// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function
function determine(choice) {
  let bot = rockPaperScirssors();
  console.log(choice, bot);
  if (choice === bot) {
    return "DRAW";
  }
  if (choice === "rock") {
    return bot === "paper" ? "bot wins" : "user wins";
  } else if (choice === "paper") {
    return bot === "scissors" ? "bot wins" : "user wins";
  } else if (choice === "scissors") {
    return bot === "rock" ? "bot wins" : "user wins";
  }
}

//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.
function play(arr) {
  return arr.map((c) => determine(c));
}
console.log(play(["rock", "rock"]));
