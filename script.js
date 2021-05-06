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
        playerSelection()
        return
        }
    console.log(choice)
    return choice;
}