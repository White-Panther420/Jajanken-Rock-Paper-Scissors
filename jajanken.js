/*This function will generate a random number 1-3 and assin it either rock, paper, or scissors*/
function computerPlay()
{
    let randomNumber = Math.floor(Math.random() *3) + 1 //Generates a random number 1-3

    if(randomNumber === 1)
    {
        return "Rock";
    }
    else if(randomNumber === 2)
    {
        return "Paper";
    }
    else    
        return "Scissors";
}

/*This function will calculate the winner of a round and return the result*/
function winner(playerSelection = "rock", computerSelection)
{
    console.log(playerSelection);
    console.log(computerSelection);
    if(playerSelection === "paper" && computerSelection === "rock")
    {
        return true;
    }

    else if(playerSelection === "rock" && computerSelection === "scissors")
    {
        return true;
    }

    else if(playerSelection === "scissors" && computerSelection === "paper")
    {
        return true;
    }

    else if(playerSelection === computerSelection)
    {
        return "tie";
    }
    else if(playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissors")  //An invalid option is entered
    {
        return "error"
    }
    else //Computer wins
    {
        return false;
    }
}

/*This function will sumulate five rounds of Jajanken Rock-Paper-Scisors*/
function game()
{
    let roundResult;
    let playerScore = 0;
    let computerScore = 0;

    for(let i=1; i<6; i++)
    {
        let playerSelection = prompt("Please enter rock, paper, or scisors: ").toLowerCase();
        let computerSelection = computerPlay().toLowerCase();
        roundResult = winner(playerSelection, computerSelection);
        
        if(roundResult === true)
        {
            console.log("You win! Jajanken " + playerSelection + " beats jajanken " + computerSelection + "!");
            playerScore++;
        }
        else if(roundResult === false)
        {
            console.log("You lose! Jajanken " + playerSelection + " beats jajanken " + computerSelection + "!");
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
        console.log("Computer: " + computerScore)
    }

    console.log("Game Over!!!");
    console.log("Player: " + playerScore);
    console.log("Computer: " + computerScore)
    if(playerScore > computerScore)
    {
        console.log("YAY! YOU WUN!!!!!!!!!!");
    }
    else if(computerScore > playerScore)
    {
        console.log("HAHA! GIT GUD SCRUB!");
    }
    else
    {
        console.log("A TIE!")
    }
}

game();
