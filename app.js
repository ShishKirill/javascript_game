let computerPoints = 0;
let playerPoints = 0;
while ((computerPoints <= 5) && (playerPoints <= 5)) {

computerPlay();

let computerChoice = computerPlay;
let str2 = computerChoice.toLowerCase();

let playerChoice = alert("Rock, Paper or Scissors?");
let str1 = playerChoice;

const expectedWords = ['rock', 'paper', 'scissors'];

getCorrectWord(expectedWords);
compareChoice();

function computerPlay() {
  computerPlay = Math.random();
     if (computerPlay < 0.4) {
        computerPlay = "Rock";
     } else if (computerPlay < 0.8) {
        computerPlay = "Paper";
     } else {
        computerPlay = "Scissors";
     }
};

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
};
function getCorrectWord(expectedWords) {
    while (true) {
    // Prompt the user to enter a word
       str1 = prompt('Please enter one of the following words: Rock, paper or scissors!');
    // Remove any non-letter characters from the entered word
       str1 = str1.replace(/[^a-zA-Z]/g, '');
    // Convert both words to lowercase to make it case-insensitive
       const lowerCaseUserInput = str1.toLowerCase();
    // Check if the entered word matches one of the expected words
       if (expectedWords.some(word => word.toLowerCase() === lowerCaseUserInput)) {
          console.log(`${str1.toLowerCase()}  Yes!!!`)
          return str1;
       } else {
          alert('Incorrect word entered. Please try again.');
       }
     }
   }
};
if (computerPoints >= 5) alert(`Computer collected 5 points, you lost :(`)
else alert(`You Won!! :)`)
