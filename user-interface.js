import { game, playerPoints, computerPoints, resetPoints } from "./script.js";

// constants
const options = ["rock", "paper", "scissors"];

//elements
const buttonsPlayer = document.querySelectorAll("#playerSelection button");
const startButton = document.querySelector("#start");
const gamePlaySection = document.querySelectorAll(".game");
const playGameButton = document.querySelector("#playGame");
const scoreSection = document.querySelector("#score");
const playerScoreSpan = document.querySelector("#playerPoints");
const computerScoreSpan = document.querySelector("#computerPoints");

//functions
function removeChoose() {
  buttonsPlayer.forEach((button) => button.classList.remove("choosen"));
}
function getPlayerSelection() {
  let playerSelection = "";
  buttonsPlayer.forEach((button) => {
    if (button.className.includes("choosen") === true) {
      playerSelection = button.className.split(" ")[0];
    }
  });
  return playerSelection;
}

function getComputerSelection() {
  return options[Math.floor(Math.random() * options.length)];
}

export function updateScore(playerScore, computerScore) {
  playerScoreSpan.textContent = playerScore;
  computerScoreSpan.textContent = computerScore;
}

export function showGameResult(result) {
  switch (result) {
    case "player":
      window.alert(`Player 1 won this hand!`);
      break;
    case "computer":
      window.alert(`Computer won this hand!`);
      break;
    case "draw":
      window.alert(`We have a draw!`);
      break;
    default:
      window.alert(`Something wrong happened with the program...`);
  }
}

export function resetMatch() {
  resetPoints(playerPoints);
  resetPoints(computerPoints);
  resetMatchInterface();
}

function resetMatchInterface() {
  gamePlaySection.forEach((item) => {
    item.classList.add("hide");
  });
  playGameButton.classList.add("hide");
  scoreSection.classList.add("hide");
  updateScore(0, 0);
  console.log(startButton.className);
  startButton.classList.remove("hide");
}

//events
buttonsPlayer.forEach((button) => {
  button.addEventListener("click", (e) => {
    removeChoose();
    e.target.classList.add("choosen");
    playGameButton.classList.remove("disabled");
  });
});

startButton.addEventListener("click", (e) => {
  playGameButton.classList.remove("hide");
  scoreSection.classList.remove("hide");

  gamePlaySection.forEach((item) => {
    item.classList.remove("hide");
  });
  startButton.classList.add("hide");
});

playGameButton.addEventListener("click", (e) => {
  const playerSelection = getPlayerSelection();
  const computerSelection = getComputerSelection();
  console.log(playerSelection, computerSelection);
  game(playerSelection, computerSelection);
  removeChoose();
  e.target.classList.add("disabled");
});
