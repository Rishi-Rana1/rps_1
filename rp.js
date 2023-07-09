function getComputerChoice() {
    let chance = Math.random() * 100;
    if (chance <= 33) {
        let choice = "Rock"
        return choice
    }

    else if (chance >= 33 && chance <= 66) {
        let choice = "Paper"
        return choice
    }

    else {
        let choice = "Scissors"
        return choice
    }
};

function playRound (ComputerChoice, PlayerChoice) {
    let players = document.querySelector('.pScore')
    let computers = document.querySelector('.cScore')
    if (ComputerChoice === "Rock" && PlayerChoice === "Paper") {
        let playern = (Number(players.textContent) + 1)
        playern = playern.toString()
        players.textContent = playern
        return "You Win, Paper beats Rock!"
    }

    else if (ComputerChoice === "Paper" && PlayerChoice === "Rock") {
        let compn = (Number(computers.textContent) + 1)
        compn = compn.toString()
        computers.textContent = compn
        return "You Lose, Paper beats Rock!"
}
    else if (ComputerChoice === "Rock" && PlayerChoice === "Rock") {
        return "Tie"
    }
    else if (ComputerChoice === "Paper" && PlayerChoice === "Scissors") {
        let playern = (Number(players.textContent) + 1)
        playern = playern.toString()
        players.textContent = playern
        return "You Win, Scissors beats Paper!"
    }

    else if (ComputerChoice === "Scissors" && PlayerChoice === "Paper") {
        let compn = (Number(computers.textContent) + 1)
        compn = compn.toString()
        computers.textContent = compn
        return "You Lose, Scissors beats Paper!"
}
    else if (ComputerChoice === "Scissors" && PlayerChoice === "Scissors") {
        return "Tie"
    }
    else if (ComputerChoice === "Scissors" && PlayerChoice === "Rock") {
        let playern = (Number(players.textContent) + 1)
        playern = playern.toString()
        players.textContent = playern
        return "You Win, Rock beats Scissors!"
    }

    else if (ComputerChoice === "Rock" && PlayerChoice === "Scissors") {
        let compn = (Number(computers.textContent) + 1)
        compn = compn.toString()
        computers.textContent = compn
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
    let player = document.getElementById('choice')
    console.log(player.getAttribute('class'))
    let final = null
    if (player.getAttribute('class') === 'rock1') {
        final = "Rock"
    }
    else if (player.getAttribute('class') === 'paper1') {
        final = "Paper"
    }
    else {
        final = "Scissors"
    }
    let comp = getComputerChoice()
    let end = document.createElement('li')
    let end1 = document.createElement('li')
    end.setAttribute('id', 'end')
    end1.setAttribute('id', 'end')
    end.textContent = playRound(comp, final)
    end1.textContent = comp
    end.style.cssText = 'list-style: none;'
    end1.style.cssText = 'list-style: none;'
    document.querySelector('.computer').appendChild(end1)
    document.querySelector('.result').appendChild(end)
    let playersc = document.querySelector('.pScore')
    let compsc = document.querySelector('.cScore')
    if (playersc.textContent === "5") {
        let result = document.querySelector(".result"), newNode = document.createElement('li')
        newNode.textContent = "You Win the Game! " + playersc.textContent + " to " + compsc.textContent
        newNode.setAttribute('id', 'message')
        newNode.style.cssText = "list-style: none;"
        result.append(newNode)
        playersc.textContent = 0
        compsc.textContent = 0
    }
    else if (compsc.textContent === "5") {
        let result = document.querySelector(".result"), newNode = document.createElement('li')
        newNode.setAttribute('id', 'message')
        newNode.textContent = "You Lose the Game! " + playersc.textContent + " to " + compsc.textContent
        newNode.style.cssText = "list-style: none;"
        result.append(newNode)
        compsc.textContent = 0
        playersc.textContent = 0
    }
    }

const rock = document.querySelector('.rock');
rock.addEventListener('click', () => {
    const player = document.querySelector('.player')
    const result = document.querySelector('.result')
    if (document.getElementById('choice') === null) {
        const choice = document.createElement('li')
        choice.setAttribute('id', 'choice')
        choice.classList.add('rock1')
        choice.textContent = "Rock"
        choice.style.cssText = 'list-style: none;'
        player.appendChild(choice)
        const button = document.createElement('button')
        button.setAttribute('id', 'ready')
        button.textContent = "start"
        button.style.cssText = 'background-color: orange; align-self: center; border-radius: 8px;'
        result.appendChild(button)
        button.addEventListener('click', () => {
            console.log(document.querySelectorAll("#end").length)
            if (document.querySelectorAll("#end").length != 0) {
                console.log(document.querySelectorAll("#end"))
                document.querySelector("#end").remove();
                document.querySelector("#end").remove();
            }
            if (document.getElementById('message')) {
                document.getElementById('message').remove()
            }
            console.log("jo")
            game()
        })
    }
    else if (document.querySelector('.paper1') !== null || document.querySelector('.scissors1') !== null) {
        document.getElementById("choice").remove();
        document.getElementById("ready").remove();
        if (document.getElementById('end')) {
            document.getElementById('end').remove()
            document.getElementById('end').remove()
        if (document.getElementById('message')) {
            document.getElementById('message').remove()
            document.getElementById('message').remove()
        }
        }
        const choice = document.createElement('li')
        choice.setAttribute('id', 'choice')
        choice.classList.add('rock1')
        choice.textContent = "Rock"
        choice.style.cssText = 'list-style: none;'
        player.appendChild(choice)
        const button = document.createElement('button')
        button.setAttribute('id', 'ready')
        button.textContent = "start"
        button.style.cssText = 'background-color: orange; align-self: center; border-radius: 8px;'
        result.appendChild(button)
        button.addEventListener('click', () => {
            console.log(document.querySelectorAll("#end").length)
            if (document.querySelectorAll("#end").length != 0) {
                console.log(document.querySelectorAll("#end"))
                document.querySelector("#end").remove();
                document.querySelector("#end").remove();
            }
            if (document.getElementById('message')) {
                document.getElementById('message').remove()
            }
            console.log("jo")
            game()
        })
    }
    else {
        document.getElementById("choice").remove();
        document.getElementById("ready").remove();
        if (document.getElementById('end')) {
            document.getElementById('end').remove()
            document.getElementById('end').remove()
        }
        if (document.getElementById('message')) {
            document.getElementById('message').remove()
            document.getElementById('message').remove()
        }
    }})

const paper = document.querySelector('.paper');
paper.addEventListener('click', () => {
    const player = document.querySelector('.player')
    const result = document.querySelector('.result')
    if (document.getElementById('choice') === null) {
        const choice = document.createElement('li')
        choice.setAttribute('id', 'choice')
        choice.classList.add('paper1')
        choice.textContent = "Paper"
        choice.style.cssText = 'list-style: none;'
        player.appendChild(choice)
        const button = document.createElement('button')
        button.setAttribute('id', 'ready')
        button.textContent = "start"
        button.style.cssText = 'background-color: orange; align-self: center; border-radius: 8px;'
        result.appendChild(button)
        button.addEventListener('click', () => {
            console.log(document.querySelectorAll("#end").length)
            if (document.querySelectorAll("#end").length != 0) {
                console.log(document.querySelectorAll("#end"))
                document.querySelector("#end").remove();
                document.querySelector("#end").remove();
            }
            if (document.getElementById('message')) {
                document.getElementById('message').remove()
            }
            console.log("jo")
            game()
        })
    }
    else if (document.querySelector('.rock1') !== null || document.querySelector('.scissors1') !== null) {
        document.getElementById("choice").remove();
        document.getElementById("ready").remove();
        if (document.getElementById('end')) {
            document.getElementById('end').remove()
            document.getElementById('end').remove()
        }
        if (document.getElementById('message')) {
            document.getElementById('message').remove()
            document.getElementById('message').remove()
        }
        const choice = document.createElement('li')
        choice.setAttribute('id', 'choice')
        choice.classList.add('paper1')
        choice.textContent = "Paper"
        choice.style.cssText = 'list-style: none;'
        player.appendChild(choice)
        const button = document.createElement('button')
        button.setAttribute('id', 'ready')
        button.textContent = "start"
        button.style.cssText = 'background-color: orange; align-self: center; border-radius: 8px;'
        result.appendChild(button)
        button.addEventListener('click', () => {
            console.log(document.querySelectorAll("#end").length)
            if (document.querySelectorAll("#end").length != 0) {
                console.log(document.querySelectorAll("#end"))
                document.querySelector("#end").remove();
                document.querySelector("#end").remove();
            }
            if (document.getElementById('message')) {
                document.getElementById('message').remove()
            }
            console.log("jo")
            game()
        })
    }
    else {
        document.getElementById("choice").remove();
        document.getElementById("ready").remove();
        if (document.getElementById('end')) {
            document.getElementById('end').remove()
            document.getElementById('end').remove()
        }
        if (document.getElementById('message')) {
            document.getElementById('message').remove()
            document.getElementById('message').remove()
        }
    }
})

const scissors = document.querySelector('.scissors');
scissors.addEventListener('click', () => {
    const player = document.querySelector('.player')
    const result = document.querySelector('.result')
    if (document.getElementById('choice') === null) {
        const choice = document.createElement('li')
        choice.setAttribute('id', 'choice')
        choice.classList.add('scissors1')
        choice.textContent = "Scissors"
        choice.style.cssText = 'list-style: none;'
        player.appendChild(choice)
        const button = document.createElement('button')
        button.setAttribute('id', 'ready')
        button.textContent = "start"
        button.style.cssText = 'background-color: orange; align-self: center; border-radius: 8px;'
        result.appendChild(button)
        button.addEventListener('click', () => {
            console.log(document.querySelectorAll("#end").length)
            if (document.querySelectorAll("#end").length != 0) {
                console.log(document.querySelectorAll("#end"))
                document.querySelector("#end").remove();
                document.querySelector("#end").remove();
            }
            if (document.getElementById('message')) {
                document.getElementById('message').remove()
            }
            console.log("jo")
            game()
        })
    }
    else if (document.querySelector('.rock1') !== null || document.querySelector('.paper1') !== null) {
        document.getElementById("choice").remove();
        document.getElementById("ready").remove();
        if (document.getElementById('end')) {
            document.getElementById('end').remove()
            document.getElementById('end').remove()
        }
        if (document.getElementById('message')) {
            document.getElementById('message').remove()
            document.getElementById('message').remove()
        }
        const choice = document.createElement('li')
        choice.setAttribute('id', 'choice')
        choice.classList.add('scissors1')
        choice.textContent = "Scissors"
        choice.style.cssText = 'list-style: none;'
        player.appendChild(choice)
        const button = document.createElement('button')
        button.setAttribute('id', 'ready')
        button.textContent = "start"
        button.style.cssText = 'background-color: orange; align-self: center; border-radius: 8px;'
        result.appendChild(button)
        button.addEventListener('click', () => {
            console.log(document.querySelectorAll("#end").length)
            if (document.querySelectorAll("#end").length != 0) {
                console.log(document.querySelectorAll("#end"))
                document.querySelector("#end").remove();
                document.querySelector("#end").remove();
            }
            if (document.getElementById('message')) {
                document.getElementById('message').remove()
            }
            console.log("jo")
            game()
        })
    }
    else {
        document.getElementById("choice").remove();
        document.getElementById("ready").remove();
        if (document.getElementById('end')) {
            document.getElementById('end').remove()
            document.getElementById('end').remove()
        }
        if (document.getElementById('message')) {
            document.getElementById('message').remove()
            document.getElementById('message').remove()
        }
    }
})