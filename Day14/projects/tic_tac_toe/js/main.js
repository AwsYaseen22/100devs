// tic_tac_toe
let p1 = "X";
let p2 = "O";
let currentPlayer = "p1";
let gameState = "on";
let winner = "";
let counter = 0;

document.querySelector("#restart").addEventListener("click", restart);

let gridList = document.querySelectorAll("li");

gridList.forEach((e) => e.addEventListener("click", play));
currentPlayer == "p1"
  ? (document.querySelector("#currPlayer").innerText = "Player 1 (X)")
  : (document.querySelector("#currPlayer").innerText = "Player 2 (O)");

function play(click) {
  counter++;
  let square = click.target;
  if (currentPlayer == "p1" && square.innerText === "") {
    square.innerText = p1;
    check();
    currentPlayer = "p2";
  } else if (currentPlayer == "p2" && square.innerText === "") {
    square.innerText = p2;
    check();
    currentPlayer = "p1";
  }
  currentPlayer == "p1"
    ? (document.querySelector("#currPlayer").innerText = "Player 1 (X)")
    : (document.querySelector("#currPlayer").innerText = "Player 2 (O)");
  if (winner !== "") {
    document.querySelector("#winner").innerText = `The Winner \n \n ${winner}`;
    document.querySelector("#winner").classList.remove("hidden");
    document.querySelector("#currPlayerTitle").classList.add("hidden");
    document.querySelector("#restart").classList.remove("hidden");
  }
}

function check() {
  for (let i = 0; i < 3; i++) {
    let row = i == 0 ? "A" : i == 1 ? "B" : "C";
    let rowVals = [];
    let colVals = [];
    for (let j = 0; j < 3; j++) {
      let col = j == 0 ? "A" : j == 1 ? "B" : "C";

      let id = "#" + row + String(j);
      let idCol = "#" + col + String(i);
      let curSquareCol = document.querySelector(idCol).innerText;
      let curSquare = document.querySelector(id).innerText;
      rowVals.push(curSquare);
      colVals.push(curSquareCol);
    }
    if (currentPlayer == "p1") {
      if (rowVals.every((n) => n == "X") || colVals.every((n) => n == "X")) {
        console.log("p1 wins");
        winner = "Player1";
        return;
      }
    } else if (
      rowVals.every((n) => n == "O") ||
      colVals.every((n) => n == "O")
    ) {
      console.log("p2 wins");
      winner = "Player2";
      return;
    }
    // console.log(rowVals);
  }
  // }
  if (counter == 9) {
    document.querySelector("#winner").innerText = "Its A DRAW";
    document.querySelector("#winner").classList.remove("hidden");
    document.querySelector("#currPlayerTitle").classList.add("hidden");

    document.querySelector("#restart").classList.remove("hidden");
  }
}

function restart() {
  currentPlayer = "p1";
  gameState = "on";
  winner = "";
  counter = 0;
  gridList.forEach((e) => (e.innerText = ""));
  document.querySelector("#winner").classList.add("hidden");
  document.querySelector("#currPlayerTitle").classList.remove("hidden");
  document.querySelector("#restart").classList.add("hidden");
  document.querySelector("#currPlayer").innerText = "Player 1";
}
