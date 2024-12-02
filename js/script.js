// Game options stored in an array
const choices = ["Bear", "Ninja", "Hunter"];

// Variables to track game statistics
let gamesPlayed = 0;
let playerWins = 0;
let computerWins = 0;

// Main game loop
let playGame = true;
while (playGame) {
    // Prompt for player name
    const playerName = prompt("Welcome to Bear Ninja Hunter! What is your name?");
    if (!playerName) {
        alert("Please enter your name to play!");
        continue; // Restart loop if no name is provided
    }
    alert(`Hi ${playerName}! Let's Play!`);

    //Prompt for player choice
    let playerChoice = prompt("Which one are you choosing? Bear , Ninja , or Hunter ?");
    if (playerChoice === null) {
        alert("You cancelled the game. Thanks for visiting!");
        playGame = false;
        break;
    }

    // Standardize player input 
    playerChoice = playerChoice.trim().charAt(0).toUpperCase() + playerChoice.slice(1).toLowerCase();
    if (!choices.includes(playerChoice)) {
        alert(`Invalid choice! Please choose one of the following: ${choices.join(", ")}.`);
        continue; // Restart loop if input is invalid
    }

    //Randomize computer choice
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    //  Countdown from 3 to 0
    console.log("Countdown:");
    for (let i = 3; i >= 0; i--) {
        console.log(i); // Display countdown in the console
    }

    // Compare player and computer choices
    let resultMessage = "";
    if (playerChoice === computerChoice) {
        resultMessage = `It's a tie! You both chose ${playerChoice}.`;
    } else if (
        (playerChoice === "Bear" && computerChoice === "Ninja") ||
        (playerChoice === "Ninja" && computerChoice === "Hunter") ||
        (playerChoice === "Hunter" && computerChoice === "Bear")
    ) {
        resultMessage = `Congratulations, ${playerName}! You win! ${playerChoice} beats ${computerChoice}.`;
        playerWins++;
    } else {
        resultMessage = `Sorry, ${playerName}. You lose! ${computerChoice} beats ${playerChoice}.`;
        computerWins++;
    }

    //  Update game statistics
    gamesPlayed++;

    //  Display results
    document.getElementById("welcome-message").textContent = `Welcome, ${playerName}!`;
    document.getElementById("game-result").textContent = resultMessage;
    document.getElementById("stats").textContent = `Games Played: ${gamesPlayed}, Player Wins: ${playerWins}, Computer Wins: ${computerWins}`;
    console.log(resultMessage);
    console.log(`Games Played: ${gamesPlayed}, Player Wins: ${playerWins}, Computer Wins: ${computerWins}`);

    // Ask player if they want to play again
    const playAgain = prompt("Do you want to play again? (yes or no)").toLowerCase();
    if (playAgain !== "yes") {
        alert("Thanks for playing!");
        playGame = false;
    }
}
