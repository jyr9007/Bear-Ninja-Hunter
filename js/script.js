
const choices = ["Bear", "Ninja", "Hunter"];

// Prompt for player name
const username = prompt("Welcome to Bear Ninja Hunter game. What is your name?");
const player = username ? username : "Player";

alert(`Hi ${player}! Let's Play!!`);

// Event listeners for player choices
document.querySelectorAll(".choice").forEach(button => {
  button.addEventListener("click", () => {
    const playerChoice = button.dataset.choice; 
    const computerChoice = choices[Math.floor(Math.random() * choices.length)]; 

    // Display player and computer choices
    document.getElementById("player-choice").textContent = `${player} chose: ${playerChoice}`;
    document.getElementById("computer-choice").textContent = `Computer chose: ${computerChoice}`;

    // Determine the winner
    const winner = determineWinner(playerChoice, computerChoice);
    document.getElementById("winner").textContent = winner;
  });
});

// Determine winner based on game rules
function determineWinner(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return "It's a draw!";
  }
  if (
    (playerChoice === "Bear" && computerChoice === "Ninja") ||
    (playerChoice === "Ninja" && computerChoice === "Hunter") ||
    (playerChoice === "Hunter" && computerChoice === "Bear")
  ) {
    return `${player} wins!`;
  } else {
    return "Computer wins!";
  }
}
