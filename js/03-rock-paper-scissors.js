var playerChoice = window.prompt("Choose rock, paper or scissors?");
window.document.write("Your choice: " + playerChoice + "</br>");

var computerChoice = Math.random();
if (computerChoice < 0.34) {
    computerChoice = "rock";
}
else if (computerChoice <= 0.67) {
    computerChoice = "paper";
}
else {
    computerChoice = "scissors";
}
window.document.write("Computer Choice: " + computerChoice + "</br>");

var play = function(x, y) {
    if (x === y) {
        return "It's a tie!";
    }

    if (x === "rock") {
        if (y === "scissors") {
          return "You win!";  
        }
    else {
        return "You loose, Paper wins!";
    }
    }
    if (x === "paper"); {
        if (y === "rock") {
            return "You win!";
        }
        else {
           return "You loose, scissor wins!"
        }
    if (x === "scissors") {
        if (y === "rock") {
            return "You loose, rock wins!";
        }
        else {
           return "You win!"
        }
    }
}
}

var results = play(playerChoice, computerChoice);
window.document.write("<br>" + results);