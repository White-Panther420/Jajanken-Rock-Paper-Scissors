//Selecing the player's buttons to add event listeners to them

const rock_btn = document.querySelector(".rock");
const paper_btn = document.querySelector(".paper");
const scissors_btn = document.querySelector(".scissors");
let playerSelection;
let playerScore = 0;
let computerScore = 0;

rock_btn.addEventListener("click", function(e) {
    playerSelection = "rock";
    computerSelection = computerPlay();
    playRound(playerSelection, computerSelection)});
    
paper_btn.addEventListener("click", function(e) {
    playerSelection = "paper";
    computerSelection = computerPlay();
    playRound(playerSelection, computerSelection)});

scissors_btn.addEventListener("click", function(e) {
    playerSelection = "scissors";
    computerSelection = computerPlay();
    playRound(playerSelection, computerSelection)});

/*This function will generate a random number 1-3 and assin it either rock, paper, or scissors
then return the result thus making it seem like you're playing against a computer*/
function computerPlay()
{
    let randomNumber = Math.floor(Math.random() *3) + 1 //Generates a random number 1-3

    if(randomNumber === 1)
    {
        //const button1 = document.querySelector(".C_rock");
        //button1.setAttribute("style", "background: red;");
        return "rock";
    }
    else if(randomNumber === 2)
    {
        //const button2 = document.querySelector(".C_paper");
        //button2.setAttribute("style", "background: pink;");
        return "paper";
    }
    else    
    {
        //const button3 = document.querySelector(".C_scissors");
        //button3.setAttribute("style", "background: green;");
        return "scissors";
    }
}

/*This function will calculate the winner of a round and return the result*/
function playRound(playerSelection = "rock", computerSelection)
{
    console.log(playerSelection);
    console.log(computerSelection);
    if(playerSelection === "paper" && computerSelection === "rock")
    {
        roundResult = true;
    }
    else if(playerSelection === "rock" && computerSelection === "scissors")
    {
        roundResult = true;
    }
    else if(playerSelection === "scissors" && computerSelection === "paper")
    {
        roundResult = true;
    }
    else if(playerSelection === computerSelection)
    {
        roundResult = "tie";
    }
    else if(playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissors")  //An invalid option is entered
    {
        roundResult = "error"
    }
    else //Computer wins
    {
        roundResult = false;
    }

    game(roundResult);
}

/*This function will sumulate the game by taking in unput from the user and computer and 
passing it to the winner function. Afterwards, it will take the result from the winner
function and use it to calculate the score for each round*/
function game(roundResult)
{
    if(roundResult === true)
    {
        console.log("You win! Jajanken " + playerSelection + " beats jajanken " + computerSelection + "!");
        playerScore++;
    }
    else if(roundResult === false)
    {
        console.log("You lose! Jajanken " + computerSelection + " beats jajanken " + playerSelection + "!");
        computerScore++;
    }
    else if(roundResult === "error")
    {
        console.log("Invalid Option!");
    }
    else
    {
        console.log("tie!");
    }

    console.log("Player: " + playerScore);
    console.log("Computer: " + computerScore);
    
    if(playerScore >= 5)
    {
        console.log("You win!");
        resetGame();
        return;
    }
    else if(computerScore >= 5)
    {
        console.log("You lose!");
        resetGame();
        return;
    }
    else
    {
        console.log("ONTO THE NEXT ROUND!");
    }
}

function resetGame()
{
    playerScore = 0;
    computerScore = 0;
    console.clear;
}