const startButton = document.querySelector(".start-button")
const userRock = document.querySelector(".user-rock")
const userPaper = document.querySelector(".user-paper")
const userScissors = document.querySelector(".user-scissors")
const result = document.querySelector(".result")
const computerChoices = ["Rock", "Paper", "Scissors"]
let randomPick
let userPick
let roundWinner
let playerWins = 0
let computerWins = 0
let totalPlayerWins = document.querySelector(".total-player-wins")
let totalComputerWins = document.querySelector(".total-computer-wins")
let totalPlayerWinsSum = 0
let totalComputerWinsSum = 0
let inProgress = false

startButton.addEventListener("click", startGame)
startButton.style.display = "block"


function playerButtonsOn() {
    if(playerWins < 5 || computerWins < 5) {
        return userRock.addEventListener("click", userPicksRock),
        userPaper.addEventListener("click", userPicksPaper),
        userScissors.addEventListener("click", userPicksScissors)
    }
}

function playerButtonsOff() {
    if (playerWins >= 5 || computerWins >= 5) {
        return userRock.removeEventListener("click", userPicksRock),
        userPaper.removeEventListener("click", userPicksPaper),
        userScissors.removeEventListener("click", userPicksScissors)
    }
}


function userPicksRock() {
    ready ="yes"
    userPick = "Rock"
    updateGame()
}


function userPicksPaper() {
    ready ="yes"
    userPick = "Paper"
    updateGame()
}


function userPicksScissors() {
    ready ="yes"
    userPick = "Scissors"
    updateGame()
}


function computerChoice() {
    randomPick = computerChoices[Math.floor(Math.random() * computerChoices.length)]
    return randomPick
}


function getWinner() {
    if (
        userPick === "Rock" && randomPick === "Scissors" ||
        userPick === "Paper" && randomPick === "Rock" ||
        userPick === "Scissors" && randomPick === "Paper"
        ) {
            roundWinner = "player"
            result.textContent = userPick + " beats " + randomPick + "." + "\n Player wins!"
            return roundWinner
        }else if (
            userPick === "Rock" && randomPick === "Paper" ||
            userPick === "Paper" && randomPick === "Scissors" ||
            userPick === "Scissors" && randomPick === "Rock"
        ) {
            roundWinner = "computer"
            result.textContent = randomPick + " beats " + userPick + "." + "\n Computer wins!"
            return roundWinner
        }else {
            result.textContent = userPick + " and " + randomPick + " tie. \nChoose again!"
            return
        }
}


function scoreCount() {
    if (roundWinner === "player") {
        playerWins += 1
    }else if (roundWinner === "computer") {
        computerWins += 1
    }
    return playerWins, computerWins
}


function totalScore() {
    scoreboardDots()
    if (playerWins === 5) {
        result.textContent = "Player wins the match! \n:) \n Click below to play again!"
        startButton.style.display = "block"
        inProgress = false
        totalPlayerWinsSum += 1
        totalPlayerWins.textContent = "(Match) Wins: " + totalPlayerWinsSum
        return inProgress
    }else if (computerWins === 5) {
        result.textContent = "Computer wins the match! \n:( \n Click below to play again!"
        startButton.style.display = "block"
        inProgress = false
        totalComputerWinsSum += 1
        totalComputerWins.textContent = "(Match) Wins: " + totalComputerWinsSum
        return inProgress
    }
}


function playerDots() {
    if (inProgress === false) {
        let playerWins1 = document.querySelector(".user-wins-1")
         playerWins1.style.backgroundColor = "#777777"
        let playerWins2 = document.querySelector(".user-wins-2")
        playerWins2.style.backgroundColor = "#777777"
        let playerWins3 = document.querySelector(".user-wins-3")
        playerWins3.style.backgroundColor = "#777777"
        let playerWins4 = document.querySelector(".user-wins-4")
        playerWins4.style.backgroundColor = "#777777"
        let playerWins5 = document.querySelector(".user-wins-5")
        playerWins5.style.backgroundColor = "#777777"
    }else {
        if (playerWins === 1) {
            let playerWins1 = document.querySelector(".user-wins-1")
            playerWins1.style.backgroundColor = "green"
        }if (playerWins === 2) {
            let playerWins2 = document.querySelector(".user-wins-2")
            playerWins2.style.backgroundColor = "green"
        }if (playerWins === 3) {
            let playerWins3 = document.querySelector(".user-wins-3")
            playerWins3.style.backgroundColor = "green"
        }if (playerWins === 4) {
            let playerWins4 = document.querySelector(".user-wins-4")
            playerWins4.style.backgroundColor = "green"
        }if (playerWins === 5) {
            let playerWins5 = document.querySelector(".user-wins-5")
            playerWins5.style.backgroundColor = "green"
        }
    }
    return
}


function computerDots() {
    if (inProgress === false) {
        let computerWins1 = document.querySelector(".computer-wins-1")
        computerWins1.style.backgroundColor = "#777777"
        let computerWins2 = document.querySelector(".computer-wins-2")
        computerWins2.style.backgroundColor = "#777777"
        let computerWins3 = document.querySelector(".computer-wins-3")
        computerWins3.style.backgroundColor = "#777777"
        let computerWins4 = document.querySelector(".computer-wins-4")
        computerWins4.style.backgroundColor = "#777777"
        let computerWins5 = document.querySelector(".computer-wins-5")
        computerWins5.style.backgroundColor = "#777777"
    }else {
        if (computerWins === 1) {
            let computerWins1 = document.querySelector(".computer-wins-1")
            computerWins1.style.backgroundColor = "green"
        }if (computerWins === 2) {
            let computerWins2 = document.querySelector(".computer-wins-2")
            computerWins2.style.backgroundColor = "green"
        }if (computerWins === 3) {
            let computerWins3 = document.querySelector(".computer-wins-3")
            computerWins3.style.backgroundColor = "green"
        }if (computerWins === 4) {
            let computerWins4 = document.querySelector(".computer-wins-4")
            computerWins4.style.backgroundColor = "green"
        }if (computerWins === 5) {
            let computerWins5 = document.querySelector(".computer-wins-5")
            computerWins5.style.backgroundColor = "green"
        }
    }
    return
}


function scoreboardDots() {
    playerDots()
    computerDots()
}


function updateGame() {
    computerChoice()
    getWinner()
    scoreCount()
    totalScore()
    return playerButtonsOff()
}


function startGame() {
    scoreboardDots()
    playerWins = 0
    computerWins = 0
    inProgress = true
    result.textContent = "Rock, paper, or scissors?"
    startButton.style.display = "none"
    playerButtonsOn()
    return
}