function getComputerChoice() {
        const choices = ["rock", "paper", "scissors"];
        return choices[Math.floor(Math.random() * 3)];
};
function getHumanChoice() {
    return prompt("Rock, Paper, or Scissors?").toLowerCase()
};
let humanScore = 0;
let computerScore = 0;
let humanSelection;
let computerSelection;
function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        resultMessage = computerChoice + " You tie!"
    } else if (humanChoice === "rock") {
        if (computerChoice === "scissors") {
            resultMessage = "Scissors. You Win!"
            humanScore++;
        } else {
            resultMessage = "Paper. You Lose!"
            computerScore++;
        }
    } else if (humanChoice === "paper") {
        if (computerChoice === "rock") {
            resultMessage = "Rock. You Win!"
            humanScore++;
        } else {
            resultMessage = "Scissors. You Lose!"
            computerScore++;
        }
    } else if (humanChoice === "scissors") {
        if (computerChoice === "paper") {
            resultMessage = "Paper. You Win!"
            humanScore++;
        } else {
            resultMessage = "Rock. You Lose!"
            computerScore++;
        }
    }
    return resultMessage
};
function playGame () {
    for (let roundNumber = 0; roundNumber < 5; roundNumber++) {
        humanSelection = getHumanChoice();
        computerSelection = getComputerChoice();
        console.log(playRound(humanSelection, computerSelection));
    }
    let gameResultMessage;
    if (humanScore > computerScore) {
        gameResultMessage = "You Won The Game!"
    } else if (humanScore < computerScore) {
        gameResultMessage = "You Lost The Game!"
    } else {
        gameResultMessage = "You Tied The Game! (Somehow)"
    }
    return gameResultMessage + " The Score Was: " + humanScore + " to " + computerScore
}
console.log(playGame());