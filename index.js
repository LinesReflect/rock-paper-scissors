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
    console.log("I pck " + userPick)
    updateGame()
}


function userPicksPaper() {
    ready ="yes"
    userPick = "Paper"
    console.log("I pck " + userPick)
    updateGame()
}


function userPicksScissors() {
    ready ="yes"
    userPick = "Scissors"
    console.log("I pck " + userPick)
    updateGame()
}


function computerChoice() {
    randomPick = computerChoices[Math.floor(Math.random() * computerChoices.length)]
    console.log(randomPick)
    return randomPick
}


function getWinner() {
    console.log(inProgress)
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
    if (playerWins === 5) {
        result.textContent = "Player wins the match! \n:) \n Click below to play again!"
        startButton.style.display = "block"
        inProgress = false
        return inProgress
    }else if (computerWins === 5) {
        result.textContent = "Computer wins the match! \n:( \n Click below to play again!"
        startButton.style.display = "block"
        inProgress = false
        return inProgress
    }
}


function updateGame() {
    computerChoice()
    getWinner()
    scoreCount()
    totalScore()
    console.log(playerWins)
    console.log(computerWins)
    return playerButtonsOff()
}


function startGame() {
    inProgress = true
    playerWins = 0
    computerWins = 0
    result.textContent = "Rock, paper, or scissors?"
    startButton.style.display = "none"
    playerButtonsOn()
    return
}