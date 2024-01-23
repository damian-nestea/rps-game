import "./user-interface.js";
import { showGameResult, updateScore, resetMatch } from "./user-interface.js";

const winnerHands = { rock: "scissors", scissors: "paper", paper: "rock" };
export let playerPoints = 0;
export let computerPoints = 0;

export function resetPoints(variable) {
  variable = 0;
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
  if (playerPoints === 3) {
    window.alert("Você ganhou!");
    resetMatch();
  } else if (computerPoints === 3) {
    window.alert("Você perdeu...");
    resetMatch();
  }
}
