//elements
const buttonsPlayer = document.querySelectorAll("#playerSelection button");

buttonsPlayer.forEach((button) => {
  button.addEventListener("click", (e) => {
    console.log(e.target.className);
  });
});
