"use strict";

const randomNumber = (topNumber) => {
  return Math.trunc(Math.random() * topNumber) + 1;
};

let secretNumber = randomNumber(20);
let score = 20;
let highScore = 0;

const displayMessage = (message) => {
  document.querySelector(".message").textContent = message;
};

const changeBackgroundColor = (color) => {
  document.querySelector("body").style.backgroundColor = color;
};
document.querySelector(".check").addEventListener("click", () => {
  const guess = Number(document.querySelector(".guess").value);

  // No input
  if (!guess) {
    // document.querySelector(".message").textContent = "No number!";
    displayMessage("No number!");

    // Player wins
  } else if (guess === secretNumber) {
    displayMessage("Correct Number!");

    document.querySelector(".number").textContent = secretNumber;

    // document.querySelector("body").style.backgroundColor = "#60b347";
    changeBackgroundColor("#60b347");

    document.querySelector(".number").style.width = "30rem";

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
    // guess is different
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "Too high!" : "Too low!");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("You lost the game!");
      score = 0;
      document.querySelector(".score").textContent = score;
    }
  }
});

document.querySelector(".again").addEventListener("click", () => {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;

  document.querySelector(".number").textContent = "?";
  displayMessage("Start guessing...");
  document.querySelector(".guess").value = "";
  document.querySelector(".score").textContent = score;
  changeBackgroundColor("#222");
  document.querySelector(".number").style.width = "15rem";
});
