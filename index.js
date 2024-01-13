
const player = document.getElementById("player");
const computer = document.getElementById("computer");
const total = document.getElementById("total");
// Get the choice of the computer
function getComputerChoice(){
    let option = ["rock","paper","scissors"];
    let a = Math.floor(Math.random()*option.length);
    let choice = option[a];

    return choice;
}


// Play a round
function playRound(){
    let playerSelection =  prompt("Choose one: Rock Paper Scissors ").toLocaleLowerCase();
    console.log(playerSelection);

    let computerSelection = getComputerChoice();
    console.log(computerSelection)

    if(playerSelection === computerSelection){
        alert("It is a tie");
    }
    else if(playerSelection === "rock"){
        if(computerSelection === "paper"){
            alert("You have lost");
            return false;
        }
        else if(computerSelection === "scissors"){
            alert("You have won");
            return true;
        }
        
    }
    else if(playerSelection === "paper"){
        if(computerSelection === "rock"){
            alert("You have won");
            return true;
        }
        else if(computerSelection === "scissors"){
            alert("You have lost");
            return false;
        }
        
    }
    else if(playerSelection === "scissors"){
        if(computerSelection === "rock"){
            alert("You have lost");
            return false;
        }
        else if(computerSelection === "paper"){
            alert("You have won");
            return true;
        }
        
    }
    
    else{
        alert("Please enter a valid input");
    }
}

// A game of 5 rounds
function game(){
    let playerScore = 0;
    let computerScore = 0;
    let playRoundReturn = 0;

    for(let i = 1; i < 6; i++){
        playRoundReturn = playRound(i);
        if(playRoundReturn === true){
            playerScore ++;
            console.log(playerScore);
            player.textContent = `Player's score: ${playerScore}`;
        }
        else if(playRoundReturn === false){
            computerScore++
            console.log(computerScore);
            computer.textContent = `Computers's score: ${computerScore}`;
    }
    }

    

    if(playerScore > computerScore){
        total.textContent = `Congrats you have won the game`;
    }
    else if(playerScore < computerScore){
        total.textContent = `Sorry you lost. Better luck next time`;
    }
}

game();
