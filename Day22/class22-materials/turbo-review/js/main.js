// *Variables*
// Declare a variable and assign it to your fav drink as a string. Make sure there is no whitespace on either side of the string, and print the value to the console
let drink = " cofee ";
console.log(drink.trim());

//Declare a variable, assign it a string of multiple words, and check to see if one of the words is "apple".
let favFruits = "orange apple banana strawberry";
console.log(favFruits.search("apple") !== -1);
console.log(favFruits.indexOf("apple") !== -1);

// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
function rockPaperScissors() {
  let rand = Math.random();
  if (rand <= 0.33) {
    return "rock";
  } else if (rand >= 0.66) {
    return "paper";
  } else {
    return "scissors";
  }
}
console.log(rockPaperScissors());

// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function
function checkWinner(choice) {
  let bot = rockPaperScissors();
  console.log(`user: ${choice} ----- bot: ${bot}`);
  if (choice === bot) {
    return "draw";
  } else if (choice === "rock") {
    return bot === "paper" ? "bot wins" : "user wins";
  } else if (choice === "paper") {
    return bot === "scissors" ? "bot wins" : "user wins";
  } else if (choice === "scissors") {
    return bot === "rock" ? "bot wins" : "user wins";
  }
}
console.log(checkWinner("rock"));

//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.

function playXtimes(choices) {
  for (let i = 0; i < choices.length; i++) {
    console.log(checkWinner(choices[i]));
  }
}

playXtimes(["rock", "rock", "rock"]);
