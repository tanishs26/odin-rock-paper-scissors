const oneRound = () => {
    const outComes = {
      rock: { winsAgainst: "scissors", loseAgainst: "paper" },
      scissors: { winsAgainst: "paper", loseAgainst: "rock" },
      paper: { winsAgainst: "rock", loseAgainst: "scissors" },
    };
    const computerChoice = Object.keys(outComes)[Math.floor(Math.random() * 3)];
    const userInput = prompt("Rock, Paper or Scissors?");
    if (userInput) {
      const choice = userInput.toLowerCase();
      const result = outComes[choice];
      console.log(result);
      if (result) {
        if (choice === computerChoice) {
          alert("It's a tie");
        } else if (computerChoice === result.winsAgainst) {
          alert(`You won! ${choice} beats ${computerChoice}`);
        } else if (computerChoice === result.loseAgainst) {
          alert(`You Lose! ${computerChoice} beats ${choice}`);
        }
      } else {
        alert("Invalid Format!");
      }
    } else {
      alert("Game Canceled!");
      return;
    }
  }; 
  
  for (let i = 0; i < 5; i++) {
    oneRound();
  }
  