const nameInputBox = document.getElementById("nameText");
const iceCreamInputBox = document.getElementById("iceCreamText");
var modal = document.getElementById("myModal");
const guessInputBox = document.getElementById("guessInput");
const computerGuessText = document.getElementsByClassName("computerGuessText")[0];
const valueToReachText = document.getElementsByClassName("numberToReach")[0];
const playerDistanceText = document.getElementsByClassName("playerDistance")[0];
const computerDistanceText = document.getElementsByClassName("computerDistance")[0];
const winnerText = document.getElementsByClassName("winnerText")[0];
const errorText = document.getElementsByClassName("errorText")[1];
const nameError = document.getElementsByClassName("errorText")[0];

let lastGuess = -1;
let lastWinner = -1;
let username = "";
let iceCream = "";

function submitName(){
    username = nameInputBox.value;
    if(username == ""){
        nameError.innerText = "ERROR: Name field empty. Try again."
        return;
    }
    iceCream = iceCreamInputBox.value;
    if(iceCream == ""){
        nameError.innerText = "ERROR: Ice cream field empty. Try again."
        return;
    }
    modal.style.display = "none";
    console.log(username);
    console.log(iceCream);
}

function onGuess(){
    let guess = parseInt(guessInputBox.value)
    if(guess < 0 || guess > 100){
        errorText.innerText = "ERROR: Number out of range. Try again."
        return;
    }

    let max = 101;
    if(lastGuess != -1){
        max = Math.min(100,lastGuess + 20);
        if(lastGuess <= 20){
            max = lastGuess
        }
    }


    let computerGuess = Math.floor(Math.random() * max);
    computerGuessText.innerText = "Computer's Guess: " + computerGuess

    let valueToReach = (2/3)*((guess + computerGuess)/2);
    valueToReachText.innerText = "Number to Reach:  " + valueToReach.toFixed(2);

    let playerDistance = Math.abs(guess - valueToReach);
    playerDistanceText.innerText = "Your Distance: " + playerDistance.toFixed(2);

    let computerDistance = Math.abs(computerGuess - valueToReach);
    computerDistanceText.innerText = "Computer's Distance: " + computerDistance.toFixed(2);

    let winner = "";
    if(playerDistance > computerDistance){
        winner = "Computer"
    } else if (playerDistance < computerDistance){
        winner = "You"
    } else {
        winner = "Tie"
    }
    winnerText.innerText = "Winner: " + winner;
    lastGuess = guess;
    lastWinner = winner;

    let objToAdd = {
        id: username + Date.now(),
        username: username,
        icecream: iceCream,
        playerGuess: guess,
        computerGuess: computerGuess,
        playerDistance: playerDistance,
        computerDistance: computerDistance,
        winner: winner
    }

    //addToDatabase
}