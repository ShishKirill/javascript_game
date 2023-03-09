let computerPoints=0;
let playerPoints=0;
while ((computerPoints<=5)&&(playerPoints<=5)) {
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

stringChecker();



function compareChoice() {
   if (str1 === str2) {
        alert(`Player:${str1} << >> Computer:${str2} Tie!`);
    } else if (str2 === "rock" && str1 === "paper") {
        alert(`Player:${str1} << >> Computer:${str2} Player wins!`)
        playerPoints++;
    } else if (str2 === "paper" && str1 === "rock") {
        alert(`Computer:${str2} <<>> Player:${str1} Computer wins!`)
        computerPoints++;
    } else if (str2 === "paper" && str1 === "scissors") {
        alert(`Player:${str1} << >> Computer:${str2} Player wins!`)
        playerPoints++;
    } else if (str2 === "scissors" && str1 === "paper") {
        alert(`Computer:${str2} <<>> Player:${str1} Computer wins!`)
        computerPoints++;
    } else if (str2 === "scissors" && str1 === "rock") {
        alert(`Player:${str1} << >> Computer:${str2} Player wins!`)
        playerPoints++;
    } else {
        alert(`Computer:${str2} << >> Player:${str1} Computer wins!`);
        computerPoints++;
    }
}
compareChoice();

function stringChecker() {
    let letters = /^[A-Za-z]+$/;
    while (!str1.match(letters)){
       str1 = prompt("Please use only letters!");
    } 
   return true;
}
};
if(computerPoints>=5) alert(`Computer collected 5 points, you lost :(`)
else  alert(`You Won!! :)`)
