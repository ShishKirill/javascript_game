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

let computerChoice = computerPlay;
let str2=computerChoice.toLowerCase();

let playerChoice = prompt("Rock, Paper or Scissors?");
let str1 = playerChoice.toLowerCase();

function compareChoice() {
   if (str1 === str2) {
        console.log(`Player:${str1} << >> Computer:${str2} Tie!`);
    } else if (str2 === "rock" && str1 === "paper") {
        console.log(`Player:${str1} << >> Computer:${str2} Player wins!`)
    } else if (str2 === "paper" && str1 === "rock") {
        console.log(`Computer:${str2} <<>> Player:${str1} Computer wins!`)
    } else if (str2 === "paper" && str1 === "scissors") {
        console.log(`Player:${str1} << >> Computer:${str2} Player wins!`)
    } else if (str2 === "scissors" && str1 === "paper") {
        console.log(`Computer:${str2} <<>> Player:${str1} Computer wins!`)
    } else if (str2 === "scissors" && str1 === "rock") {
        console.log(`Player:${str1} << >> Computer:${str2} Player wins!`)
    } else {
        console.log(`Computer:${str2} << >> Player:${str1} Computer wins!`)
    }
    stringChecker();
}
compareChoice();

function stringChecker() {
    let letters = /^[A-Za-z]+$/;
    if (str1.match(letters)) {
        return true;
    } else {
        return false;
    }
};
