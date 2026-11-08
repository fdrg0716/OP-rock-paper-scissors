function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * 3)];
};
function getHumanChoice() {
    return prompt("Rock, Paper, or Scissors?").toLowerCase()
};
let humanScore = 0;
let computerScore = 0;
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

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log(playRound(humanSelection, computerSelection));