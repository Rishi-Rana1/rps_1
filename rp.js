function getComputerChoice() {
    let chance = Math.random() * 100;
    if (chance <= 33) {
        let choice = "Rock"
    }

    else if (chance >= 33 && chance <= 66) {
        let choice = "Paper"
    }

    else {
        let choice = "Scissors"
    }
    return choice
};

function playRound (ComputerChoice, PlayerChoice) {
    if (ComputerChoice === "Rock" && PlayerChoice === "Paper") {
        return "You Win, Paper beats Rock!"
    }

    else if (ComputerChoice === "Paper" && PlayerChoice === "Rock") {
        return "You Lose, Paper beats Rock!"
}
    else if (ComputerChoice === "Rock" && PlayerChoice === "Rock") {
        return "Tie"
    }
    else if (ComputerChoice === "Paper" && PlayerChoice === "Scissors") {
        return "You Win, Scissors beats Paper!"
    }

    else if (ComputerChoice === "Scissors" && PlayerChoice === "Paper") {
        return "You Lose, Scissors beats Paper!"
}
    else if (ComputerChoice === "Scissors" && PlayerChoice === "Scissors") {
        return "Tie"
    }
    else if (ComputerChoice === "Scissors" && PlayerChoice === "Rock") {
        return "You Win, Rock beats Scissors!"
    }

    else if (ComputerChoice === "Rock" && PlayerChoice === "Scissors") {
        return "You Lose, Rock beats Scissors!"
}
    else if (ComputerChoice === "Paper" && PlayerChoice === "Paper") {
        return "Tie"
    }
};

function fix(player1) {
    let first = player1[0]
    first = first.toUpperCase()
    let next = player1.slice(1)
    next = next.toLowerCase()
    return first + next
};

function game() {
    for (let x = 0; x < 5; x++) {
        let player = prompt("Pick Rock, Paper, or Scissors")
        player = fix(player)
        let comp = getComputerChoice()
        console.log(playRound(comp, player))
    }
}

game()