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
    launchConfetti();

    
  } else if (computerScore === 3) {
    div2.textContent = "Ohhh!!! Computer Won the game";
    gameActive = false;
    launchConfetti();

  }
};

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    button.classList.toggle("clicked");

    setTimeout(() => {
      button.classList.remove("clicked");
    }, 200);
  });
});

let res = document.querySelector(".rs");
res.textContent = "";
const oneRound = () => {
  if (!gameActive) return;
  const computerChoice = Object.keys(outComes)[Math.floor(Math.random() * 3)];
  if (userInput) {
    const choice = userInput;
    const result = outComes[choice];

    if (result) {
      if (choice === computerChoice) {
        res.textContent = `It's a tie`;
      } else if (computerChoice === result.winsAgainst) {
        res.textContent = `You won! ${choice} beats ${computerChoice}`;
        playerScore += 1;
      } else if (computerChoice === result.loseAgainst) {
        res.textContent = `You Lose! ${computerChoice} beats ${choice}`;
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
 div.setAttribute("style","margin:30px");
  checkGameEnd();
};
function launchConfetti() {
    confetti({
        particleCount: 200,
        spread: 80,
        origin: { y: 0.6 }
    });
}
