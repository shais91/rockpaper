//Rock paper scissors
//get a prompt to add rock paper or scissors
// generate a random response from JS
// compare human resposne with random response
// rock vs paper ===paper  Wins
// rock vs scissors ==rock Wins
// // scissors vs paper ==scissors Wins
// display win or loose message
// add reset button to restart the game

let computerchoice = function getComputerChoice() {
  let mathrandom = Math.floor(Math.random() * 3) + 1;
  if (mathrandom === 1) {
    return "rock";
  }
  if (mathrandom === 2) {
    return "paper";
  } else {
    return "scissors";
  }
};
console.log(computerchoice());

let humanchoice = function getHumanChoice() {
  let humanPrompt = prompt("Enter 'rock' 'paper' or 'scissors'").toLowerCase();
  if (
    humanPrompt === "rock" ||
    humanPrompt === "paper" ||
    humanPrompt === "scissors"
  ) {
    return humanPrompt;
  } else {
    return "Please enter valid value for rock paper or scissors";
  }
};
// console.log(humanchoice());

let humanScore = 0;
let computerScore = 0;

function playround(humanChoice, computerChoice) {
  if (humanChoice === "Please enter valid value for rock paper or scissors") {
    return "Please enter valid value for rock paper or scissors";
  }
  if (humanChoice === computerChoice) {
    return "Draw Try again";
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    humanScore++;
    return "You win";
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    computerScore++;
    return "Computer wins";
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    humanScore++;
    return "You win";
  } else if (humanChoice === "rock" && computerChoice === "paper") {
    computerScore++;
    return "Computer wins";
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    humanScore++;
    return "You win";
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    computerScore++;
    return "Computer wins";
  }
}
// console.log();
const humanSelection = humanchoice();
const computerSelection = computerchoice();
console.log(playround(humanSelection, computerSelection));
