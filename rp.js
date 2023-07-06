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
        button.addEventListener('click', game())
    }
    else if (document.querySelector('.paper1') !== null || document.querySelector('.scissors1') !== null) {
        document.getElementById("choice").remove();
        document.getElementById("ready").remove();
        if (document.getElementById('end')) {
            document.getElementById('end').remove()
            document.getElementById('end').remove()
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
        button.addEventListener('click', game())
    }
    else {
        document.getElementById("choice").remove();
        document.getElementById("ready").remove();
        if (document.getElementById('end')) {
            document.getElementById('end').remove()
            document.getElementById('end').remove()
        }
    }
})

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
        button.addEventListener('click', game())
    }
    else if (document.querySelector('.rock1') !== null || document.querySelector('.scissors1') !== null) {
        document.getElementById("choice").remove();
        document.getElementById("ready").remove();
        if (document.getElementById('end')) {
            document.getElementById('end').remove()
            document.getElementById('end').remove()
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
        button.addEventListener('click', game())
    }
    else {
        document.getElementById("choice").remove();
        document.getElementById("ready").remove();
        if (document.getElementById('end')) {
            document.getElementById('end').remove()
            document.getElementById('end').remove()
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
        button.addEventListener('click', game())
    }
    else if (document.querySelector('.rock1') !== null || document.querySelector('.paper1') !== null) {
        document.getElementById("choice").remove();
        document.getElementById("ready").remove();
        if (document.getElementById('end')) {
            document.getElementById('end').remove()
            document.getElementById('end').remove()
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
        button.addEventListener('click', game())
    }
    else {
        document.getElementById("choice").remove();
        document.getElementById("ready").remove();
        if (document.getElementById('end')) {
            document.getElementById('end').remove()
            document.getElementById('end').remove()
        }
    }
})

//game()