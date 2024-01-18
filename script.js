import "./user-interface.js";

const options = ["rock", "paper", "scissors"];
const winnerHands = { rock: "scissors", scissors: "paper", paper: "rock" };

function getComputerChoice() {
  return options[Math.floor(Math.random() * options.length)];
}

function getGameWinner(player, computer) {
  if (player === computer) {
    return "Draw";
  } else if (
    winnerHands.hasOwnProperty(player) &&
    winnerHands[player] == computer
  ) {
    return "Player 1";
  } else {
    return "Computer";
  }
}

function game() {
  let playerPoints = 0;
  let computerPoints = 0;

  while (playerPoints < 3 && computerPoints < 3) {
    const playerSelection = "rock";
    const computerSelection = getComputerChoice();
    console.log(`P1 ${playerSelection} : COMP ${computerSelection} `);

    const gameWinner = getGameWinner(playerSelection, computerSelection);

    gameWinner === "Player 1"
      ? (playerPoints += 1)
      : gameWinner === "Computer"
      ? (computerPoints += 1)
      : null;
  }
  console.log(`P1: ${playerPoints}  - COMP: ${computerPoints}`);
  console.log(`Winner: ${playerPoints === 3 ? "Player 1" : "Computer"}`);
}

game();
