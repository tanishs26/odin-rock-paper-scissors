const outComes = {
  rock: { winsAgainst: "scissors", loseAgainst: "paper" },
  scissors: { winsAgainst: "paper", loseAgainst: "rock" },
  paper: { winsAgainst: "rock", loseAgainst: "scissors" },
};

let computerScore = 0;
let playerScore = 0;
let gameActive = true;
let userInput;

const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");
btn1.addEventListener("click", () => {
  userInput = "rock";
  oneRound();
});
btn2.addEventListener("click", () => {
  userInput = "paper";
  oneRound();
});
btn3.addEventListener("click", () => {
  userInput = "scissors";
  oneRound();
});

const div = document.createElement("div");
div.textContent = "";
div.classList.add("results");
document.body.appendChild(div);

const div2 = document.createElement("div");
div2.textContent = "";
div2.classList.add("winner");
document.body.appendChild(div2);

const checkGameEnd = () => {
  if (playerScore === 3) {
    div2.textContent = "Hurray!! You Won the Game";
    gameActive = false;
  } else if (computerScore === 3) {
    div2.textContent = "Ohhh!!! Computer Won the game";
    gameActive = false;
  }
};

const oneRound = () => {
  if (!gameActive) return;

  const computerChoice = Object.keys(outComes)[Math.floor(Math.random() * 3)];
  if (userInput) {
    const choice = userInput;
    const result = outComes[choice];

    if (result) {
      if (choice === computerChoice) {
        alert("It's a tie");
      } else if (computerChoice === result.winsAgainst) {
        alert(`You won! ${choice} beats ${computerChoice}`);
        playerScore += 1;
      } else if (computerChoice === result.loseAgainst) {
        alert(`You Lose! ${computerChoice} beats ${choice}`);
        computerScore += 1;
      }
    } else {
      alert("Invalid Format!");
    }
  } else {
    alert("Game Canceled!");
    return 0;
  }

  div.textContent = `Player: ${playerScore}, Computer: ${computerScore}`;
  checkGameEnd();
};
