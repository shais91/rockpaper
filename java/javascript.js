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
    return "Rock";
  } else if (mathrandom === 2) {
    return "paper";
  } else {
    return "Scissors";
  }
};
console.log(computerchoice());

let humanchoice = function getHumanChoice() {
  let humanPrompt = prompt("Enter 'rock' 'paper' or 'scissors'").toLowerCase();
  if (humanPrompt === "rock") {
    return "rock";
  }
  if (humanPrompt === "paper") {
    return "paper";
  }
  if (humanPrompt === "scissors") {
    return "scissors";
  } else {
    return "Please enter valid value for rock paper or scissors";
  }
};
console.log(humanchoice());

let humanScore = 0;
let computerScore = 0;

function playround(humanChoice, computerChoice) {}
const humanSelection = humanchoice;
const computerSelection = computerchoice;
