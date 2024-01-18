//elements
const buttonsPlayer = document.querySelectorAll("#playerSelection button");
const startButton = document.querySelector("#start");
const gamePlaySection = document.querySelectorAll(".game");
let p1Selection = "";

//events
buttonsPlayer.forEach((button) => {
  button.addEventListener("click", (e) => {
    p1Selection = e.target.className;
    console.log(p1Selection);
  });
});

startButton.addEventListener("click", () => {
  console.log("entrou aqui");
  startButton.classList.add("disabled");
  gamePlaySection.forEach((item) => {
    item.classList.remove("hide");
  });
});
