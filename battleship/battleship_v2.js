// Declared Var

var randomLoc = Math.floor(Math.random() *5);

var location1 = randomLoc;
var location2 = location1 + 1;
var location3 = location2 + 1;
 
var guess;
var hits = 0;
var guesses = 0;

var isSunk = false;

// Game Logic

while (isSunk == false) {
    guess = prompt("Ready!, Aim!, Fire! (Enter number 0-6)");
    if (guess == null){
        alert("k salamat!");
        break;
    }

    if (guess < 0 || guess > 6 ){
        alert("Error! Please Enter a Valid Number.")
    
    } else {
        guesses += 1;

        if (guess == location1 || guess == location2  || guess == location3){
            hits +=1;
            alert("Hit!");
        


            if (hits == 3){
                isSunk = true;
                alert (" You Sunk the Ship!")

            }
        }else{
                alert("Miss!")
            }
            }
                

        }
var accuracy = (guesses > 0 ? (hits/guesses) *100: 0).toFixed(2);
    


var stats = "You sank my battership at " + guesses + " guesses" + "\n"+
"accuracy: " + accuracy + "%"

alert(stats);