//elements
const buttonsPlayer = document.querySelectorAll("#playerSelection button");
const startButton = document.querySelector("#start");
const gamePlaySection = document.querySelectorAll(".game");

function removeChoose() {
  buttonsPlayer.forEach((button) => button.classList.remove("choosen"));
}

//events
buttonsPlayer.forEach((button) => {
  button.addEventListener("click", (e) => {
    removeChoose();
    e.target.classList.add("choosen");
  });
});

startButton.addEventListener("click", () => {
  startButton.classList.add("disabled");
  gamePlaySection.forEach((item) => {
    item.classList.remove("hide");
  });
});
