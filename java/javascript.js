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
  return mathrandom;
};
console.log(computerchoice());
