function computerPlay() {
    computerPlay = Math.random();
    if (computerPlay < 0.4) {
        computerPlay = "Rock";
    } else if (computerPlay < 0.8) {
        computerPlay = "Paper";
    } else {
        computerPlay = "Scissors";
    }
}
computerPlay();

const computerChoice = computerPlay;
const playerChoice = prompt("Rock, Paper or Scissors?");

function compareChoice() {
    if (computerChoice === playerChoice) {
        console.log(`Player:${playerChoice} << >> Computer:${computerChoice} Tie!`);
    } else if (computerChoice === "Rock" && playerChoice === "Paper") {
        console.log(`Player:${playerChoice} << >> Computer:${computerChoice} Player wins!`)
    } else if (computerChoice === "Paper" && playerChoice === "Rock") {
        console.log(`Computer:${computerChoice} <<>> Player:${playerChoice} Computer wins!`)
    } else if (computerChoice === "Paper" && playerChoice === "Scissors") {
        console.log(`Player:${playerChoice} << >> Computer:${computerChoice} Player wins!`)
    } else if (computerChoice === "Scissors" && playerChoice === "Paper") {
        console.log(`Computer:${computerChoice} <<>> Player:${playerChoice} Computer wins!`)
    } else if (computerChoice === "Scissors" && playerChoice === "Rock") {
        console.log(`Player:${playerChoice} << >> Computer:${computerChoice} Player wins!`)
    } else {
        console.log(`Computer:${computerChoice} << >> Player:${playerChoice}Computer wins!`)
    }
}

compareChoice();
