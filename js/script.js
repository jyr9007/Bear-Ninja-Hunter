// Prompt the user for their name
let userName = prompt("Welcome to Bear Ninja Hunter! What is your name?");

// Greet the user with an alert
alert(`Hello, ${userName}! Get ready to play Bear Ninja Hunter.`);

// Prompt the user for their choice
let userChoice = prompt("Choose your character: Bear, Ninja, or Hunter");

// Hardcoded computer choice
let computerChoice = "Bear";

// Concatenate and display the result in the console
console.log(`${userName} chose: ${userChoice}`);
console.log(`Computer chose: ${computerChoice}`);
console.log(`The game logic will determine the winner in future updates.`);

// Display the result on the HTML page
document.getElementById("game-output").innerHTML = `
    <p>${userName}, you chose: <strong>${userChoice}</strong></p>
    <p>The computer chose: <strong>${computerChoice}</strong></p>
    <p>Results coming soon in the next iteration of the game!</p>
`;

// Alert the user about the gameplay completion
alert("Thanks for playing Bear Ninja Hunter.");
