let expectedWords = ["rock", "paper", "scissors"]
let gameRound = 0;
let playerPoints = 0;
let computerPoints = 0;
let playerChoice = "";
let computerChoice = "";
let playAgain = "";

game();

function getChoices (){
        playerChoice = prompt("Rock, paper or scissors?");
        computerChoice = expectedWords[Math.floor(expectedWords.length * Math.random())];
        pointScore();
}

function fixUserChoice() {
    if(playerChoice != null) {
        playerChoice = (playerChoice.replace(/[^a-zA-Z]/g, '')).toLowerCase();
    } else {
        getNull();
    }
}

function pointScore () {
    if (playerChoice === computerChoice) {
        console.log(`It's a tie!`);
    } else if (playerChoice === "paper" && computerChoice === "rock" || playerChoice === "scissors" && computerChoice === "paper" || playerChoice === "rock" && computerChoice === "scissors") {
        console.log(`You won!`);
        playerPoints++;
    } else if (playerChoice === "rock" && computerChoice === "paper" || playerChoice === "paper" && computerChoice === "scissors" || playerChoice === "scissors" && computerChoice === "rock") {
        console.log(`Computer won!`);
        computerPoints++;;
    } else if( playerChoice == null){
        getNull();
    } else {
        alert ("Please choose again.");
        getChoices();
    }
}

function displayConsoleScore () {
    if (playerChoice != null){
       console.log(`You: ${playerChoice} -- Computer: ${computerChoice}
        You: ${playerPoints} -- Computer: ${computerPoints}`); 
    }     
}

function displayAlertScore (){
    if (playerChoice != null) {
        alert(`You: ${playerChoice} -- Computer: ${computerChoice}
        You: ${playerPoints} -- Computer: ${computerPoints}`
    )}
}


function getWhoWon (){
    if (playerPoints > computerPoints && playerChoice != null) {
        console.log(`You won the game!`);
        alert("Well done! You won!");
        
    } else if (computerPoints > playerPoints && playerChoice != null) {
        console.log(`Computer won the game. :(`);
        alert("Oh no, the computer won. :(");
    } else if ( playerChoice == null) {
        getNull();
    } else {
        console.log(`It's a tie!`);
        alert("It's a tie!");
    }
}

function getPlayAgain(){
    playAgain = prompt("Do you want to play again? Yes or no?");
    getPlayAgainValue ();
}


function getPlayAgainValue () {
    fixPlayAgain();
    if (playAgain === "yes") {
        game();
    } else if (playAgain === "no") {
        console.log("So sad to see you go!");
        alert("I'll get you next time!");
    } else if (playerChoice === null) {
        getNull();
    } else {
        alert("Please type that again.");
    }
}

function fixPlayAgain () {
    if (playAgain != null) {
        playAgain = (playAgain.replace(/[^a-zA-Z]/g, '').toLowerCase());
    } else {
        getNull();
    }
}

function getNull (){
    return playerChoice = null;
}


function game() {
    playerChoice = "";
        
    alert(`Hello! You are about to play the game Rock, Paper Scissors. These are the rules:
    1. You choose rock, paper or scissors. 
    2. The computer also chooses either rock, paper or scissors.
    3. Rock beats scissors, paper beats rock, and scissors beats paper.
    4. We will play for 5 rounds and the player with the most points wins!`)

    for (i = 0; i < 5 && playerChoice != null; i++){
        console.log(`Round ${i+1}`),
        getChoices();
        fixUserChoice();
        displayConsoleScore(); 
        displayAlertScore()
    };
    getWhoWon();
    getPlayAgain();
    playerPoints = 0;
    computerPoints = 0;
}
