import "./user-interface.js";
import { updateScore } from "./user-interface.js";

const winnerHands = { rock: "scissors", scissors: "paper", paper: "rock" };
let playerPoints = 0;
let computerPoints = 0;

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

export function game(player, computer) {
  if (playerPoints < 3 && computerPoints < 3) {
    const gameWinner = getGameWinner(player, computer);

    gameWinner === "Player 1"
      ? (playerPoints += 1)
      : gameWinner === "Computer"
      ? (computerPoints += 1)
      : null;
  }
  updateScore(playerPoints, computerPoints);
}
