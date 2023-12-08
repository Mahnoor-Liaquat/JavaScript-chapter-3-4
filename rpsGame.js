let options = ["Rock", "Paper", "Scissors"];

let playerSelection = Math.floor(Math.random() * 3); // 0 for Rock, 1 for Paper, 2 for Scissors
let computerSelection = Math.floor(Math.random() * 3);

let responseMessage = "Player selected: " + options[playerSelection] + "\nComputer selected: " + options[computerSelection] + "\n";

if (playerSelection === computerSelection) {
    responseMessage += "It's a tie!";
} else {
    if (
        (playerSelection === 0 && computerSelection === 2) || // Rock beats Scissors
        (playerSelection === 1 && computerSelection === 0) || // Paper beats Rock
        (playerSelection === 2 && computerSelection === 1)    // Scissors beat Paper
    ) {
        responseMessage += "Player wins!";
    } else {
        responseMessage += "Computer wins!";
    }
}

console.log(responseMessage);
