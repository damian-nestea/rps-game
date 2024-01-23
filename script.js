import "./user-interface.js";
import { showResult, updateScore } from "./user-interface.js";

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

    if (gameWinner === "Player 1") {
      playerPoints += 1;
      showGameResult("player");
    } else if (gameWinner === "Computer") {
      computerPoints += 1;
      showGameResult("computer");
    } else {
      showGameResult("draw");
    }
  }
  updateScore(playerPoints, computerPoints);
}
