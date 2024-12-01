// Welcome the player and prompt for their name
let playerName = prompt("Welcome to Bear Ninja Hunter! What is your name?");

// Alert the player
alert("Hi " + playerName + "! Let's Play!");

//  Prompt the player for their choice
let playerChoice = prompt(
    "Which one are you choosing? Bear 🐻, Ninja 🥷, or Hunter 🔫?"
);

// Hard-code the computer's choice
let computerChoice = "Bear"; // Hard-coded for this phase of the prototype

// Create a variable to store the result message
let resultMessage = "";

// Determine the winner using a combination of if-else and switch statements
if (computerChoice === "Bear") {
    switch (playerChoice) {
        case "Bear":
            resultMessage =
                playerName +
                ", You picked Bear! The computer picked Bear! It's a tie!";
            break;
        case "Ninja":
            resultMessage =
                playerName +
                ", You picked Ninja! The computer picked Bear! The computer wins!";
            break;
        case "Hunter":
            resultMessage =
                playerName +
                ", You picked Hunter! The computer picked Bear! You win!";
            break;
        default:
            resultMessage = "Invalid choice. Please refresh and try again.";
    }
} else if (computerChoice === "Ninja") {
    switch (playerChoice) {
        case "Bear":
            resultMessage =
                playerName +
                ", You picked Bear! The computer picked Ninja! You win!";
            break;
        case "Ninja":
            resultMessage =
                playerName +
                ", You picked Ninja! The computer picked Ninja! It's a tie!";
            break;
        case "Hunter":
            resultMessage =
                playerName +
                ", You picked Hunter! The computer picked Ninja! The computer wins!";
            break;
        default:
            resultMessage = "Invalid choice. Please refresh and try again.";
    }
} else if (computerChoice === "Hunter") {
    switch (playerChoice) {
        case "Bear":
            resultMessage =
                playerName +
                ", You picked Bear! The computer picked Hunter! The computer wins!";
            break;
        case "Ninja":
            resultMessage =
                playerName +
                ", You picked Ninja! The computer picked Hunter! You win!";
            break;
        case "Hunter":
            resultMessage =
                playerName +
                ", You picked Hunter! The computer picked Hunter! It's a tie!";
            break;
        default:
            resultMessage = "Invalid choice. Please refresh and try again.";
    }
}

//  Display the result
document.getElementById("welcome-message").textContent =
    "Welcome to the game, " + playerName + "!";
document.getElementById("game-result").textContent = resultMessage;
console.log(resultMessage);
