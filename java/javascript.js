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

let appendHumanScore = document.querySelector("#humanScore");
let appendComputerScore = document.querySelector("#computerScore");
let humanscore = 0;
let computerscore = 0;

let humanChoice = function (choice) {
  const computerSelect = computerchoice();

  console.log("Game Starts \n" + "Computer Choice: " + computerSelect);

  if (choice === null) {
    return "please select proper button";
  } else if (choice === computerSelect) {
    console.log("Its a draw");
    humanscore += 1;
    computerscore += 1;
  } else if (
    (choice === "rock" && computerSelect === "scissors") ||
    (choice === "scissors" && computerSelect === "paper") ||
    (choice === "paper" && computerSelect === "rock")
  ) {
    console.log("human wins");
    humanscore += 1;
  } else {
    console.log("computer wins");
    computerscore += 1;
  }
  appendComputerScore.textContent = computerscore;
  appendHumanScore.textContent = humanscore;
};

// let humanScore = 0;
// let computerScore = 0;
// let oneRound = function playround(human1, computer2) {
//   if (human1 === null) {
//     return "Please enter valid value for rock paper or scissors";
//   }
//   if (human1 === computer2) {
//     return "Its a draw try again!";
//   }
//   if (
//     (human1 === "rock" && computer2 === "scissors") ||
//     (human1 === "scissors" && computer2 === "paper") ||
//     (human1 === "paper" && computer2 === "rock")
//   ) {
//     humanScore++;
//     console.log(humanScore);
//     return "You win";
//   } else {
//     computerScore++;
//     console.log(computerScore);
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
//   }
// }

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
