const computerchoice = function getComputerChoice() {
  const mathrandom = Math.floor(Math.random() * 3) + 1;
  if (mathrandom === 1) {
    return "rock";
  }
  if (mathrandom === 2) {
    return "paper";
  } else {
    return "scissors";
  }
};
console.log("Game Starts \n" + "Computer Choice: " + computerchoice());

let humanChoice = function (choice) {
  console.log("Human choice : " + choice);
  return choice;
};

let buttonRock = document.querySelector("#rockButton");
buttonRock.addEventListener("click", () => {
  humanChoice("rock");
});
let buttonScissor = document.querySelector("#scissorsButton");
buttonScissor.addEventListener("click", () => {
  humanChoice("scissors");
});

let buttonPaper = document.querySelector("#paperButton");
buttonPaper.addEventListener("click", () => {
  humanChoice("paper");
});

// let humanScore = 0;
// let computerScore = 0;
// let oneRound = function playround(humanChoice, computerChoice) {
//   if (humanChoice === null) {
//     return "Please enter valid value for rock paper or scissors";
//   }
//   if (humanChoice === computerChoice) {
//     return "Its a draw try again!";
//   }
//   if (
//     (humanChoice === "rock" && computerChoice === "scissors") ||
//     (humanChoice === "scissors" && computerChoice === "paper") ||
//     (humanChoice === "paper" && computerChoice === "rock")
//   ) {
//     humanScore++;
//     return "You win";
//   } else {
//     computerScore++;
//     return "computer wins";
//   }
// };

// function playGame() {
//   humanScore = 0;
//   computerScore = 0;
//   console.log("Game starting");
//   for (let i = 0; i < 5; i++) {
//     const humanSelection = humanchoice();
//     const computerSelection = computerchoice();
//     if (humanSelection !== null) {
//       console.log(`Round ${i + 1}:`);
//       console.log(`Human: ${humanSelection}, Computer:${computerSelection}`);
//       console.log(playround(humanSelection, computerSelection));
//       console.log(`Score : Human:${humanScore}, Computer:${computerScore}`);
//     } else {
//       console.log("Invalid entry");
//       i--;
//     }
//   }}

// if (humanScore > computerScore) {
//   console.log("congrats you won the game");
// } else if (computerScore > humanScore) {
//   console.log("computer wins the game");
// } else {
//   console.log("game is a draw");
// }

// // playGame();
// let continuegame = prompt(
//   "Do you want to try again 'yes' or 'no'"
// ).toLowerCase();
// continuegame === "yes"
//   ? playGame()
//   : console.log("thanks for playing, Have a good day");
