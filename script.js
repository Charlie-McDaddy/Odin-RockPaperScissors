// The Odin Project -- Rock Paper Scissors Game

// 1. Your game is going to play against the computer, so begin with a function called computerPlay that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. We’ll use this function in the game to make the computer’s play. Tip: use the console to make sure this is returning the expected output before moving to the next step!
let compPlay;

function computerPlay() {
  let number = Math.floor(Math.random() * 3) + 1;
  switch (number) {
    case 1:
      compPlay = "rock";
      break;
    case 2:
      compPlay = "paper";
      break;
    case 3:
      compPlay = "scissors";
      break;
    default:
      break;
  }
  return compPlay;
}

// 2. Write a function that plays a single round of Rock Paper Scissors. The function should take two parameters - the playerSelection and computerSelection - and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"

const rock = document.querySelector("#card-1");
const paper = document.querySelector("#card-2");
const scissors = document.querySelector("#card-3");
const playerScore = document.querySelector(".player-score");
const computerScore = document.querySelector(".computer-score");
const currentRound = document.querySelector(".current-round");

let playerSelection;

rock.addEventListener("click", () => {
  playRound("rock", computerPlay());
});

paper.addEventListener("click", () => {
  playRound("paper", computerPlay());
});

scissors.addEventListener("click", () => {
  playRound("scissors", computerPlay());
});

let computerWins, playerWins, draw;
let playerCurrentScore = 1;
let computerCurrentScore = 1;

function playRound(playerSelection, computerSelection) {
  computerWins = `Computer choice: ${computerSelection} | Player choice: ${playerSelection} | Computer wins -- ${computerSelection} beats ${playerSelection}!`;
  playerWins = `Computer choice: ${computerSelection} | Player choice: ${playerSelection} | Player wins -- ${playerSelection} beats ${computerSelection}!`;
  draw = `Computer choice: ${computerSelection} | Player choice: ${playerSelection} | -- Draw!!`;

  while (playerCurrentScore <= 5 && computerCurrentScore <= 5) {
    if (playerSelection === "rock" && computerSelection === "scissors") {
      playerScore.innerHTML = playerCurrentScore++;
      return (currentRound.innerHTML = playerWins);
    } else if (
      playerSelection === "paper" &&
      computerSelection === "scissors"
    ) {
      computerScore.innerHTML = computerCurrentScore++;
      return (currentRound.innerHTML = computerWins);
    } else if (
      playerSelection === "scissors" &&
      computerSelection === "scissors"
    ) {
      return (currentRound.innerHTML = draw);
    } else if (playerSelection === "rock" && computerSelection === "paper") {
      computerScore.innerHTML = computerCurrentScore++;
      return (currentRound.innerHTML = computerWins);
    } else if (playerSelection === "rock" && computerSelection === "rock") {
      return (currentRound.innerHTML = draw);
    } else if (playerSelection === "paper" && computerSelection === "rock") {
      playerScore.innerHTML = playerCurrentScore++;
      return (currentRound.innerHTML = playerWins);
    } else if (playerSelection === "paper" && computerSelection === "paper") {
      return (currentRound.innerHTML = draw);
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
      computerScore.innerHTML = computerCurrentScore++;
      return (currentRound.innerHTML = computerWins);
    } else if (
      playerSelection === "scissors" &&
      computerSelection === "paper"
    ) {
      playerScore.innerHTML = playerCurrentScore++;
      return (currentRound.innerHTML = playerWins);
    }
  }
  if (playerScore.innerHTML == 5) {
    currentRound.innerHTML = "Game over - Player Wins!";
  } else {
    currentRound.innerHTML = "Game over - Computer Wins!";
  }
}

// 3. Write a NEW function called game(). Use the previous function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end.
