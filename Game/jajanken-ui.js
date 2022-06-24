//Selecing the player's buttons to add event listeners to them
const rock_btn = document.querySelector(".rock");
const paper_btn = document.querySelector(".paper");
const scissors_btn = document.querySelector(".scissors");

//Selecting the score texts so we can update them with the correct scores after each round
const p_score = document.querySelector(".player_score");
const c_score = document.querySelector(".computer_score");

//Div that will hold the text which indicates if the user won or lost the round as well as a reset
//button which appears when the user or computer reaches a score of 5
const round_result_div = document.querySelector(".round_result");
const winLoseTie = document.createElement("p");
const reset_btn = document.createElement("button");
reset_btn.setAttribute("style", "background-color: red; color: black; font-weight: 1000; justify-content: center;");
reset_btn.textContent = "Try Again";

round_result_div.append(winLoseTie);

//Global variables to access for each round played
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

reset_btn.addEventListener("click", resetGame);

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
    let winner;
    console.log(playerSelection);
    console.log(computerSelection);
    if(playerSelection === "paper" && computerSelection === "rock")
    {
        winner = true;
    }
    else if(playerSelection === "rock" && computerSelection === "scissors")
    {
        winner = true;
    }
    else if(playerSelection === "scissors" && computerSelection === "paper")
    {
        winner = true;
    }
    else if(playerSelection === computerSelection)
    {
        winner = "tie";
    }
    else if(playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissors")  //An invalid option is entered
    {
        winner = "error"
    }
    else //Computer wins
    {
        winner = false;
    }

    game(winner);
}

/*This function will sumulate the game by taking in unput from the user and computer and 
passing it to the winner function. Afterwards, it will take the result from the winner
function and use it to calculate the score for each round*/
function game(winner)
{
    if(winner === true)
    {
        winLoseTie.textContent = "You win! Jajanken " + playerSelection + " beats jajanken " + computerSelection + "!";
        p_score.textContent = ++playerScore;
    }
    else if(winner === false)
    {
        winLoseTie.textContent = "You lose! Jajanken " + computerSelection + " beats jajanken " + playerSelection + "!";
        c_score.textContent = ++computerScore;
    }
    else if(winner === "error")
    {
        winLoseTie.textContent = "Invalid Option!";
    }
    else
    {
        winLoseTie.textContent = "tie!";
    }

    console.log("Player: " + playerScore);
    console.log("Computer: " + computerScore);

    if(playerScore >= 5)
    {
        winLoseTie.setAttribute("style", "color: green; font-weight:1000")
        winLoseTie.textContent = 'HUMANITY IS SAVED! YOU WIN!!!';
        round_result_div.append(reset_btn);
        return;
    }
    else if(computerScore >= 5)
    {
        winLoseTie.setAttribute("style", "color: red; font-weight:1000")
        winLoseTie.textContent = "YOU FOOL! HUMANITY IS DOOMED! YOU LOSE!!!";
        round_result_div.append(reset_btn);
        return;
    }
    else
    {
        console.log("ONTO THE NEXT ROUND!");
    }
}

function resetGame()
{
    round_result_div.removeChild(reset_btn);
    playerScore = 0;
    p_score.textContent = playerScore;
    computerScore = 0;
    c_score.textContent = computerScore;
}