//Variables for counting the score.
let playerWins = 0;
let computerWins = 0;
let draws =  0;

//Computer's choice.
function computerSelection(){
    const options = ["rock", "paper", "scissors"];
    //Random number from 0 - 2 to pick from array.
    let choice = Math.floor(Math.random() * 3);
    console.log(`Computer: ${options[choice]}`)
    return options[choice]
}

//Players choice.
function playerSelection(){
    //Getting the players choice and sorting out and case sensitivity issues.
    let choice = prompt("Rock, Paper, Scissors?");
    choice.toLowerCase();
    //Checking the player has picked a valid game option.
    if(choice !== "rock" && choice !== "paper" && choice !== "scissors"){
        console.log(`${choice} is not a valid move.`);
        choice = prompt("Rock, Paper, Scissors?");
        choice.toLowerCase();
        }
    console.log(`Player: ${choice}`)
    return choice;
}

//Game logic, comparing the return values from playerSelection and computerSelection.
function playRound(){
    //Had to put playerChoice first to remove player being able to see the computerSelection output.
    let playerChoice = playerSelection();
    let compChoice = computerSelection();
    if(compChoice === playerChoice){
        console.log("Draw");
        draws++;
        return 
    } else if((compChoice === "rock" && playerChoice === "scissors") || 
                (compChoice === "scissors" && playerChoice === "paper") || 
                (compChoice === "paper" && playerChoice === "rock")){
                    console.log("Computer Wins!");
                    computerWins++;
                    return
    }else if((playerChoice === "rock" && compChoice === "scissors") || 
                (playerChoice === "scissors" && compChoice === "paper") || 
                (playerChoice === "paper" && compChoice === "rock")){
                    console.log("Player Wins!");
                    playerWins++;
                    return
    }
}

//Game to decide the best of five.
function game(){
    //Reseting if multiple games are played.
    computerWins = 0;
    playerWins = 0;
    draws = 0;
    //Looping over five times.
    for(let i = 0; i <= 4; i++){
        playRound();
        console.log(`Draws: ${draws}, Computer Wins: ${computerWins}, Player Wins: ${playerWins}`);
    }
    //Deciding the overall winner.
    if(playerWins === computerWins){
        console.log("It's a draw!");
        return `Draws: ${draws}, Computer Wins: ${computerWins}, Player Wins: ${playerWins}`;
    } else if(playerWins > computerWins){
        console.log("Player wins!");
        return `Player Wins: ${playerWins}, Computer Wins: ${computerWins}, Draws: ${draws}`;
    } else {
        console.log("Computer Wins!");
        return `Computer Wins: ${computerWins}, Player Wins: ${playerWins}, Draws: ${draws}`;
    }
}