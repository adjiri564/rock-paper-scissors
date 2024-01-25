
const player = document.getElementById("player");
const computer = document.getElementById("computer");
const tie = document.getElementById("tie");
const total = document.getElementById("total");
const pChoice = document.getElementById("pChoice");
const cChoice = document.getElementById("cChoice")

let playerScore = 0;
let computerScore = 0;
let tieScore = 0;
let number = 0;



// To get the choice of the computer
function getComputerChoice(){
    let option = ["rock","paper","scissors"];
    let a = Math.floor(Math.random()*option.length);
    let choice = option[a];

    return choice;
}





function playRound(playerSelection){
    
    let computerSelection = getComputerChoice();
    pChoice.textContent = `Player's choice : ${playerSelection}`;
    cChoice.textContent = `Computer's choice : ${computerSelection}`;

    let result = "";

    if(playerSelection === computerSelection){
        console.log("tie")
        result  =  "Tie";
    }
    else if(playerSelection === "rock"){
        if(computerSelection === "paper"){
        
            result = "lose";
        }
        else if(computerSelection === "scissors"){
            result = "win";
        }
        
    }
    else if(playerSelection === "paper"){
        if(computerSelection === "rock"){
            result = "win";
        }
        else if(computerSelection === "scissors"){
        
            result = "lose";
        }
        
    }
    else if(playerSelection === "scissors"){
        if(computerSelection === "rock"){
        
            result = "lose";
        }
        else if(computerSelection === "paper"){
            result =  "win";
        }
        
    }

    // to get the score of player, computer, and tie
    if(result === "win"){
        playerScore ++;
        console.log(playerScore);
        player.textContent = `Player's score: ${playerScore}`;
    }
    else if(result === "lose"){
        computerScore++;
        console.log(computerScore);
        computer.textContent = `Computers's score: ${computerScore}`;
    }
    else if(result === "Tie"){
        tieScore++;
        tie.textContent = `Tie's score: ${tieScore}`;
    }
    // to determine the winner of the game after 5 rounds
    number++;

    if(number === 5 && playerScore > computerScore){
        playerScore = 0;
        player.textContent = `Player's score: ${playerScore}`;
        computerScore = 0;
        computer.textContent = `Computers's score: ${computerScore}`;
        tieScore = 0;
        tie.textContent = `Tie's score: ${tieScore}`;
        alert("You Win!!");
        number = 0;
        pChoice.textContent = "Player's choice :";
        cChoice.textContent = "Computer's choice :";
        
    }
    else if(number === 5 && playerScore < computerScore){
        playerScore = 0;
        player.textContent = `Player's score: ${playerScore}`;
        computerScore = 0;
        computer.textContent = `Computers's score: ${computerScore}`;
        tieScore = 0;
        tie.textContent = `Tie's score: ${tieScore}`;
        alert(`You lose`);
        number = 0;
        pChoice.textContent = "Player's choice :";
        cChoice.textContent = "Computer's choice :";
        
    }
    else if(number === 5 && playerScore === computerScore){
        playerScore = 0;
        player.textContent = `Player's score: ${playerScore}`;
        computerScore = 0;
        computer.textContent = `Computers's score: ${computerScore}`;
        tieScore = 0;
        tie.textContent = `Tie's score: ${tieScore}`;
        alert("It's a Tie");
        number = 0;
        pChoice.textContent = "Player's choice :";
        cChoice.textContent = "Computer's choice :";
        
    }
}

