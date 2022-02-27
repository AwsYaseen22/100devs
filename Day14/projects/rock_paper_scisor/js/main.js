// rock -- paper -- scissors

let userOptions = document.querySelector("#userOptions").children;
let computerOptions = document.querySelector("#computerOptions").children;

let userArray = Array.from(userOptions);
let computerArray = Array.from(computerOptions);

userArray.forEach((e) => e.addEventListener("click", userSelect));

document.querySelector("#restart").addEventListener("click", restart);

function restart() {
  userArray.forEach(function (e) {
    e.classList.remove("hidden");
    e.classList.remove("selected");
  });
  computerArray.forEach(function (e) {
    e.classList.remove("hidden");
    e.classList.remove("selected");
  });
  document.querySelector("#restart").classList.add("hidden");
  document.querySelector(".result").classList.add("hidden");
  document.querySelector("#result").innerText = "";
  document.querySelector(".user").classList.remove("winner");
  document.querySelector(".computer").classList.remove("winner");
  document.querySelector(".center").classList.remove("winner");
  document.querySelector(".welcome").classList.remove("hidden");
}

function userSelect(click) {
  console.log("user: " + click.target.innerText);
  click.target.classList.add("selected");
  let randomNum = Math.floor(Math.random() * 3);
  computerArray[randomNum].classList.add("selected");
  console.log("computer: " + computerArray[randomNum].innerText);

  for (let i = 0; i < 3; i++) {
    if (userArray[i].id !== click.target.id) {
      userArray[i].classList.remove("selected");
      userArray[i].classList.add("hidden");
    }
    if (randomNum !== i) {
      computerArray[i].classList.remove("selected");
      computerArray[i].classList.add("hidden");
    }
  }
  let winner = theWinner(
    click.target.innerText,
    computerArray[randomNum].innerText
  );
  document.querySelector("#result").innerText = winner;
  document.querySelector(".result").classList.remove("hidden");
  document.querySelector("#restart").classList.remove("hidden");
  document.querySelector(".welcome").classList.add("hidden");
}

function theWinner(user, computer) {
  if (user === computer) {
    document.querySelector(".center").classList.add("winner");
    return "Draw";
  }
  let compareResult = compare(user, computer);
  if (user === compareResult) {
    document.querySelector(".user").classList.add("winner");
    return "User Wins";
  } else {
    document.querySelector(".computer").classList.add("winner");
    return "Computer Wins";
  }
}

function compare(option1, option2) {
  // rock - rock => draw
  // paper - paper => draw
  // scissors - scissors => draw
  //   if (option1 == option2) {
  //     return "Draw";
  //   }

  // rock
  if (option1 === "Rock") {
    // rock - paper => paper
    if (option2 == "Paper") {
      return "Paper";
      // rock - scissors => rock
    } else if (option2 == "Scissors") {
      return "Rock";
    }
  }

  // paper
  if (option1 === "Paper") {
    // paper - rock => paper
    if (option2 == "Rock") {
      return "Paper";
      // paper - scissors => scissors
    } else if (option2 == "Scissors") {
      return "Scissors";
    }
  }

  // scissors
  if (option1 === "Scissors") {
    // scissors - rock => rock
    if (option2 == "Rock") {
      return "Rock";
      // scissors - paper => scissors
    } else if (option2 == "Paper") {
      return "Scissors";
    }
  }
}
