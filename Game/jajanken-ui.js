//Selecing the player's buttons to add event listeners to them
const rock_btn = document.querySelector(".rock");
const paper_btn = document.querySelector(".paper");
const scissors_btn = document.querySelector(".scissors");

//Selecting the score texts so we can update them with the correct scores after each round
const p_score = document.querySelector(".player_score");
const c_score = document.querySelector(".computer_score");

const round_result_div = document.querySelector(".round_result");
const winLoseTie = document.createElement("p");
winLoseTie.setAttribute("style", "font-weight: 1000; font-size: 22px");
round_result_div.append(winLoseTie);


//Div that will hold the text which indicates if the user won or lost the game as well as a reset
//button which appears when the user or computer reaches a score of 5
const final_result_div = document.querySelector(".final_result");
const final_message = document.createElement("p");
final_result_div.append(final_message);

const reset_btn = document.createElement("button");
reset_btn.classList.add("reset_button");
reset_btn.textContent = "Try Again";

/*Selecting player and computer side divs so we can display the choice 
that both selected as an image*/
const player_side = document.querySelector(".player_side");
const computer_side = document.querySelector(".computer_side");

const player_choice_img = document.createElement("img");
const computer_choice_img = document.createElement("img");


//Global variables to access for each round played
let playerSelection;
let playerScore = 0;
let computerScore = 0;

rock_btn.addEventListener("click", gameInitiator("rock"));    
paper_btn.addEventListener("click", gameInitiator("paper"));
scissors_btn.addEventListener("click", gameInitiator("scissors"));

reset_btn.addEventListener("click", resetGame);

//This function will begin the game when a button is clicked
function gameInitiator(playerSelection)
{
    computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
}

/*This function will generate a random number 1-3 and assin it either rock, paper, or scissors
then return the result thus making it seem like you're playing against a computer*/
function computerPlay()
{
    let randomNumber = Math.floor(Math.random() *3) + 1 //Generates a random number 1-3

    if(randomNumber === 1)
    {
        return "rock";
    }
    else if(randomNumber === 2)
    {
        return "paper";
    }
    else    
    {
        return "scissors";
    }
}

/*This function will calculate the winner of a round and return the result*/
function playRound(playerSelection = "rock", computerSelection)
{
    player_choice_img.src = `../Images/jajanken_${playerSelection}.jpg`;
    computer_choice_img.src = `../Images/jajanken_${computerSelection}.jpg`;
    player_choice_img.classList.add("choice_img");
    computer_choice_img.classList.add("choice_img");

    player_side.appendChild(player_choice_img);
    computer_side.appendChild(computer_choice_img);

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
        rock_btn.removeEventListener("click", gameInitiator("rock"));
        paper_btn.removeEventListener("click", gameInitiator("paper"));
        scissors_btn.removeEventListener("click", gameInitiator("scissors"));

        final_message.classList.add("Win_Message");
        final_message.textContent = 'HUMANITY IS SAVED! YOU WIN!!!';
        final_result_div.append(reset_btn);

        //rock_btn.removeEventListener("click");
        //paper_btn.removeEventListener("click");
        //scissors_btn.removeEventListener("click");

        return;
    }
    else if(computerScore >= 5)
    {
        rock_btn.removeEventListener("click", gameInitiator("rock"));
        paper_btn.removeEventListener("click", gameInitiator("paper"));
        scissors_btn.removeEventListener("click", gameInitiator("scissors"));
        
        final_message.classList.add("Loose_Message");
        final_message.textContent = "YOU FOOL! HUMANITY IS DOOMED! YOU LOSE!!!";
        final_result_div.append(reset_btn);

        //rock_btn.removeEventListener("click");
        //paper_btn.removeEventListener("click");
        //scissors_btn.removeEventListener("click");

        return;
    }
    else
    {
        console.log("ONTO THE NEXT ROUND!");
    }
}

//This function will clear the messages and scores displayed on the screan
//as well as the choice images on both sides and rest button
function resetGame()
{
    final_result_div.removeChild(reset_btn);
    final_message.removeAttribute("class");  //Removes all present classes from the element
    final_message.textContent = "";
   
    winLoseTie.textContent = "";
    
    player_side.removeChild(player_choice_img);
    computer_side.removeChild(computer_choice_img);

    playerScore = 0;
    p_score.textContent = playerScore;
    computerScore = 0;
    c_score.textContent = computerScore;
}