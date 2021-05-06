//Variables for counting the score, and keeping tack of player choice.
let playerWins = 0;
let computerWins = 0;
let draws =  0;
let playerChoice = 0;
let totalRounds = 0;
let lastChoice;

//Retrieving the necessary elements.
const gameStart = document.querySelector('.start');
const rock = document.querySelector('.rock');
const paper  = document.querySelector('.paper');
const scissors =  document.querySelector('.scissors');
const comentary =  document.querySelector('.runningComentary');
const playLog = document.querySelector('.playLog')

//Event Listeners for game start.
gameStart.addEventListener('click', game);


//Computer's choice.
function computerSelection(){
    const options = ["rock", "paper", "scissors"];
    //Random number from 0 - 2 to pick from array.
    let choice = Math.floor(Math.random() * 3);
    if(lastChoice === options[choice]){
        computerSelection();
    }
    lastChoice = options[choice];
    return options[choice]
}

//Game logic, comparing the return values from playerSelection and computerSelection.
function playRound(){
    //Had to put playerChoice first to remove player being able to see the computerSelection output.
    let compChoice = computerSelection();

    //Tally of round played increase.
    totalRounds++

    //Figuring out who won this round.
    if(compChoice === playerChoice){
        comentary.innerHTML = `Draw!`;
        draws++;
        return 
    } else if((compChoice === "rock" && playerChoice === "scissors") || 
                (compChoice === "scissors" && playerChoice === "paper") || 
                (compChoice === "paper" && playerChoice === "rock")){
                    comentary.innerHTML = `The computer wins this round.`;
                    computerWins++;
                    return
    }else if((playerChoice === "rock" && compChoice === "scissors") || 
                (playerChoice === "scissors" && compChoice === "paper") || 
                (playerChoice === "paper" && compChoice === "rock")){
                    comentary.innerHTML = `You won this one!`;
                    playerWins++;
                    return
    }
}

//Game to decide the best of five.
function game(){
    //Reseting if multiple games are played.
    playerWins = 0;
    computerWins = 0;
    draws =  0;
    totalRounds = 0;


    //Prompting the player.
    comentary.innerHTML = `You move`;

    //Event listeners for player options.
    rock.addEventListener('click', () => {
        playerChoice = "rock";
        playRound();
        if(totalRounds === 5){
            endGame();
            return;
        }
    });
    paper.addEventListener('click', () => {
        playerChoice = "paper";
        playRound();
        if(totalRounds === 5){
            endGame();
            return;
        }
    });
    scissors.addEventListener('click', () =>{
        playerChoice = "scissors";
        playRound();
        if(totalRounds === 5){
            endGame();
            return;
        }
    });
}

//Ending the game and finding out the winner.
function endGame(){
    //Finding the winner.
    if(playerWins === computerWins){
        comentary.innerHTML = `The game's a draw!`;
        let endEntry = document.createElement('p');
        endEntry.innerHTML = `Draws: ${draws}, Computer Wins: ${computerWins}, Player Wins: ${playerWins}`;
        playLog.appendChild(endEntry);
    } else if(playerWins > computerWins){
        comentary.innerHTML = `You won the game!`;
        let endEntry = document.createElement('p');
        endEntry.innerHTML = `Player Wins: ${playerWins}, Computer Wins: ${computerWins}, Draws: ${draws}`;
        playLog.appendChild(endEntry);
    } else {
        comentary.innerHTML = `And the computer wins the game!`;
        let endEntry = document.createElement('p');
        endEntry.innerHTML = `Computer Wins: ${computerWins}, Player Wins: ${playerWins}, Draws: ${draws}`;
        playLog.appendChild(endEntry);
    }

    //Removing event listeners so that the game doesnt keep going.
    rock.removeEventListener('click', () => {
        playerChoice = "rock";
        playRound();
        if(totalRounds === 5){
            endGame();
            return;
        }
    });
    paper.removeEventListener('click', () => {
        playerChoice = "paper";
        playRound();
        if(totalRounds === 5){
            endGame();
            return;
        }
    });
    scissors.removeEventListener('click', () =>{
        playerChoice = "scissors";
        playRound();
        if(totalRounds === 5){
            endGame();
            return;
        }
    });
}