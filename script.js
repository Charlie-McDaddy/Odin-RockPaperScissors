// The Odin Project -- Rock Paper Scissors Game

// 1. Your game is going to play against the computer, so begin with a function called computerPlay that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. We’ll use this function in the game to make the computer’s play. Tip: use the console to make sure this is returning the expected output before moving to the next step!

let compPlay,
  playerScore = 0,
  compScore = 0;

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

const computerSelection = computerPlay();
console.log(computerSelection);

// document.getElementById("demo").innerHTML = computerPlay();

// 2. Write a function that plays a single round of Rock Paper Scissors. The function should take two parameters - the playerSelection and computerSelection - and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"

const rock = document.querySelector("#card-1");
const paper = document.querySelector("#card-2");
const scissors = document.querySelector("#card-3");

let playerSelection;

rock.addEventListener("click", () => {
  playerSelection = "rock";
  return playerSelection;
});

paper.addEventListener("click", () => {
  playerSelection = "paper";
  return playerSelection;
});

scissors.addEventListener("click", () => {
  playerSelection = "scissors";
  return playerSelection;
});

let computerWins, playerWins, draw;

function playRound(playerSelection, computerSelection) {
  computerWins = `Computer choice: ${computerSelection} <br /> Player choice: ${playerSelection} <br /> <br />Computer wins -- ${computerSelection} beats ${playerSelection}!`;
  playerWins = `Computer choice: ${computerSelection} <br /> Player choice: ${playerSelection} <br /> <br />Player wins -- ${playerSelection} beats ${computerSelection}!`;
  draw = `Computer choice: ${computerSelection} <br /> Player choice: ${playerSelection} <br /> <br /> -- Draw!!`;

  if (playerSelection === "rock" && computerSelection === "scissors") {
    return playerWins;
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    return computerWins;
  } else if (
    playerSelection === "scissors" &&
    computerSelection === "scissors"
  ) {
    return draw;
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    return computerWins;
  } else if (playerSelection === "rock" && computerSelection === "rock") {
    return draw;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    return playerWins;
  } else if (playerSelection === "paper" && computerSelection === "paper") {
    return draw;
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    return computerWins;
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    return playerWins;
  }
}

// 3. Write a NEW function called game(). Use the previous function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end.

playerScore = 0;
compScore = 0;

function game() {
  playRound(playerSelection, computerSelection);
  if (playerWins) {
    playerScore++;
  } else if (computerWins) {
    compScore++;
  }
  // for (let round = 0; round < 5; round++) {
  //   document.getElementById("demo").innerHTML = `Round ${round}`;
  //   playRound(playerSelection, computerSelection);
  //   if (playerWins) {
  //     playerScore++;
  //   } else if (computerWins) {
  //     compScore++;
  //   }
  //   round++;
  // }
  let totalScore = `Overall scores Computer: ${compScore} vs Player: ${playerScore}`;
  return (document.getElementById("winner").innerHTML = totalScore);
}
