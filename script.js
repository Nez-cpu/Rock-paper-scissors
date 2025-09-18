// ======= Rock Paper Scissors Game =======

// Function to get computer's choice
function getComputerChoice() {
    const rand = Math.random(); // 0 <= rand < 1
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
function playRound(humanChoice, computerChoice, scores) {
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice) {
        console.log(`It's a tie! Both chose ${humanChoice}`);
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        scores.humanScore++;
    } else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        scores.computerScore++;
    }
}

// Function to play 5 rounds
function playGame() {
    const scores = { humanScore: 0, computerScore: 0 };

    for (let i = 0; i < 5; i++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice, scores);
        console.log(`Round ${i + 1} Score -> You: ${scores.humanScore}, Computer: ${scores.computerScore}`);
    }

    console.log("========== Game Over ==========");
    if (scores.humanScore > scores.computerScore) console.log("🎉 You win the game!");
    else if (scores.computerScore > scores.humanScore) console.log("💻 Computer wins the game!");
    else console.log("It's a tie game!");
}

// ======= Start the game automatically =======
console.log("Welcome to Rock-Paper-Scissors!");
playGame();
