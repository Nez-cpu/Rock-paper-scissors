// ======= Rock Paper Scissors Game =======

// Function to get computer's choice
function getComputerChoice() {
    const rand = Math.random();
    if (rand < 1/3) return "rock";
    else if (rand < 2/3) return "paper";
    else return "scissors";
}

// Function to get human player's choice
function getHumanChoice() {
    const choice = prompt("Enter rock, paper, or scissors:").toLowerCase();
    return choice;
}

// Function to play a single round
function playRound(humanChoice, computerChoice, scores, logElement) {
    humanChoice = humanChoice.toLowerCase();
    let resultText = "";

    if (humanChoice === computerChoice) {
        resultText = `It's a tie! Both chose ${humanChoice}`;
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        resultText = `You win! ${humanChoice} beats ${computerChoice}`;
        scores.humanScore++;
    } else {
        resultText = `You lose! ${computerChoice} beats ${humanChoice}`;
        scores.computerScore++;
    }

    logElement.innerHTML += `<p>${resultText}</p>`;
}

// Function to play the full 5-round game
function playGame() {
    const scores = { humanScore: 0, computerScore: 0 };
    const logElement = document.getElementById("game-log");
    logElement.innerHTML = "<h2>Game Started!</h2>";

    for (let i = 0; i < 5; i++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice, scores, logElement);
        logElement.innerHTML += `<p>Round ${i+1} Score -> You: ${scores.humanScore}, Computer: ${scores.computerScore}</p>`;
    }

    logElement.innerHTML += "<h2>Game Over!</h2>";
    if (scores.humanScore > scores.computerScore) logElement.innerHTML += "<p>🎉 You win the game!</p>";
    else if (scores.computerScore > scores.humanScore) logElement.innerHTML += "<p>💻 Computer wins the game!</p>";
    else logElement.innerHTML += "<p>It's a tie game!</p>";
}

// Attach game to button click
document.getElementById("play-btn").addEventListener("click", playGame);
