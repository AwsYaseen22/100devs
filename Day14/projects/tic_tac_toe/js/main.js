// tic_tac_toe
let p1Score = 0;
let p2Score = 0;
let currentPlayer = "p1";
let gameState = "on";
let winner = "";
let counter = 0;

document.querySelector("#restart").addEventListener("click", restart);
document.querySelector("#continue").addEventListener("click", anotherGame);
document.querySelector("#p1Score").innerText = p1Score;
document.querySelector("#p2Score").innerText = p2Score;

let gridList = document.querySelectorAll("li");

gridList.forEach(function (e) {
  e.addEventListener("click", play);
  e.style.cursor = "pointer";
});
currentPlayer == "p1"
  ? (document.querySelector("#currPlayer").innerText = "Player 1 (X)")
  : (document.querySelector("#currPlayer").innerText = "Player 2 (O)");

function play(click) {
  counter++;
  let square = click.target;
  if (currentPlayer == "p1" && square.innerText === "") {
    square.innerText = "X";
    check();
    currentPlayer = "p2";
  } else if (currentPlayer == "p2" && square.innerText === "") {
    square.innerText = "O";
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
    document.querySelector("#continue").classList.remove("hidden");
    document.querySelector("#p1Score").innerText = p1Score;
    document.querySelector("#p2Score").innerText = p2Score;
    gridList.forEach(function (e) {
      e.removeEventListener("click", play);
      e.style.cursor = "default";
    });
  }
}

function check() {
  for (let i = 0; i < 3; i++) {
    let row = i == 0 ? "A" : i == 1 ? "B" : "C";
    let rowVals = [];
    let rowIds = [];
    let colVals = [];
    let colIds = [];

    for (let j = 0; j < 3; j++) {
      let col = j == 0 ? "A" : j == 1 ? "B" : "C";

      let id = "#" + row + String(j);
      let idCol = "#" + col + String(i);
      rowIds.push(id);
      colIds.push(idCol);
      let curSquareCol = document.querySelector(idCol).innerText;
      let curSquare = document.querySelector(id).innerText;
      rowVals.push(curSquare);
      colVals.push(curSquareCol);
    }

    let dia1Ids = ["#A0", "#B1", "#C2"];
    let dia2Ids = ["#A2", "#B1", , "#C0"];
    let diagVals1 = [
      document.querySelector("#A0").innerText,
      document.querySelector("#B1").innerText,
      document.querySelector("#C2").innerText,
    ];
    let diagVals2 = [
      document.querySelector("#A2").innerText,
      document.querySelector("#B1").innerText,
      document.querySelector("#C0").innerText,
    ];

    if (currentPlayer == "p1") {
      if (rowVals.every((n) => n == "X")) {
        winner = "Player1";
        p1Score += 1;
        markWinLine(rowIds);
        return;
      } else if (colVals.every((n) => n == "X")) {
        winner = "Player1";
        p1Score += 1;

        markWinLine(colIds);
        return;
      } else if (diagVals1.every((n) => n == "X")) {
        winner = "Player1";
        p1Score += 1;

        markWinLine(dia1Ids);
        return;
      } else if (diagVals2.every((n) => n == "X")) {
        winner = "Player1";
        p1Score += 1;

        markWinLine(dia2Ids);
        return;
      }
    } else if (rowVals.every((n) => n == "O")) {
      winner = "Player2";
      p2Score += 1;

      markWinLine(rowIds);
      return;
    } else if (colVals.every((n) => n == "O")) {
      winner = "Player2";
      p2Score += 1;

      markWinLine(colIds);
      return;
    } else if (diagVals1.every((n) => n == "O")) {
      winner = "Player2";
      p2Score += 1;

      markWinLine(dia1Ids);
      return;
    } else if (diagVals2.every((n) => n == "O")) {
      winner = "Player2";
      p2Score += 1;

      markWinLine(dia2Ids);
      return;
    }
  }

  if (counter == 9) {
    drawStuff();
  }
}

function drawStuff() {
  document.querySelector("#winner").innerText = "Its A DRAW";
  document.querySelector("#winner").classList.remove("hidden");
  document.querySelector("#currPlayerTitle").classList.add("hidden");

  document.querySelector("#restart").classList.remove("hidden");
  document.querySelector("#continue").classList.remove("hidden");
  gridList.forEach(function (e) {
    e.removeEventListener("click", play);
    e.style.cursor = "default";
  });
}

function anotherGame() {
  currentPlayer = "p1";
  gameState = "on";
  winner = "";
  counter = 0;

  gridList.forEach(function (e) {
    e.innerText = "";
    e.classList.remove("winLine");
  });
  document.querySelector("#winner").classList.add("hidden");
  document.querySelector("#currPlayerTitle").classList.remove("hidden");
  document.querySelector("#restart").classList.add("hidden");
  document.querySelector("#continue").classList.add("hidden");
  document.querySelector("#currPlayer").innerText = "Player 1 (X)";
  gridList.forEach(function (e) {
    e.addEventListener("click", play);
    e.style.cursor = "pointer";
  });
}
function markWinLine(ids) {
  for (let id in ids) {
    document.querySelector(ids[id]).classList.add("winLine");
  }
}
function restart() {
  anotherGame();
  p1Score = 0;
  p2Score = 0;
  document.querySelector("#p1Score").innerText = p1Score;
  document.querySelector("#p2Score").innerText = p2Score;
}
