var randomLoc = Math.floor(Math.random() * 5);
var shipLocations = [randomLoc, randomLoc + 1, randomLoc + 2];

let guess;
let hits = 0;
let guesses = 0;
let isSunk = false;

while (isSunk === false) {
    guess = prompt("Ready, aim, fire! (enter a number 0-6):");

    if (guess === null) {
        alert("Thank you for playing!");
        break;
    }

    guess = parseInt(guess, 10);

    if (isNaN(guess) || guess < 0 || guess > 6) {
        alert("Please enter a valid number between 0 and 6.");
        continue;
    }

    guesses++;

    const hitIndex = shipLocations.indexOf(guess);

    if (hitIndex !== -1) {
        alert("HIT!");
        shipLocations.splice(hitIndex, 1);
        hits++;

        if (shipLocations.length === 0) {
            isSunk = true;
        }
    } else {
        alert("MISS!");
    }
}

if (guesses > 0) {
    var accuracy = ((hits / guesses) * 100).toFixed(2);
    var stats = "You took " + guesses + " guesses to sink the battleship!\n" + "Accuracy: " + accuracy + "%";
    alert(stats);
}