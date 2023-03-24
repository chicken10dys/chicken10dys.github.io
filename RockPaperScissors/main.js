console.log("Js file ran (main.js)")
const rock = 0
const paper = 1
const scissors = 2
var selection

var rockBtn = document.getElementById("rockBtn");
var paperBtn = document.getElementById("paperBtn");
var scissorsBtn = document.getElementById("scissorsBtn");
var outputTxt = document.getElementById("status")

var playerChoice = document.getElementById("playerChoice")
var computerChoice = document.getElementById("computerChoice")

rockBtn.addEventListener("click", Rock);
paperBtn.addEventListener("click", Paper);
scissorsBtn.addEventListener("click", Scissors);

function Rock(){
    console.log("Rock")
    selection = Math.floor(Math.random() * 3)
    console.log(selection)
    if (selection === rock)
    {
        outputTxt.innerHTML = "Tie"
        playerChoice.innerHTML = "You: 🪨"
        computerChoice.innerHTML = "Computer: 🪨"

        console.log("Tie")
    }
    if (selection === paper)
    {
        outputTxt.innerHTML = "You lost :("
        playerChoice.innerHTML = "You: 🪨"
        computerChoice.innerHTML = "Computer: 📄"
        console.log("You lost :(")
    }
    if (selection === scissors)
    {
        outputTxt.innerHTML = "You win!"
        playerChoice.innerHTML = "You: 🪨"
        computerChoice.innerHTML = "Computer: ✂️"
        console.log("You win!")
    }

}
function Paper(){
    console.log("Paper")
    selection = Math.floor(Math.random() * 3)
    console.log(selection)
    if (selection === rock)
    {
        outputTxt.innerHTML = "You win!"
        playerChoice.innerHTML = "You: 📄"
        computerChoice.innerHTML = "Computer: 🪨"
        console.log("You win!")
    }
    if (selection === paper)
    {
        outputTxt.innerHTML = "Tie"
        playerChoice.innerHTML = "You: 📄"
        computerChoice.innerHTML = "Computer: 📄"
        console.log("Tie")
    }
    if (selection === scissors)
    {
        outputTxt.innerHTML = "You lost :("
        playerChoice.innerHTML = "You: 📄"
        computerChoice.innerHTML = "Computer: ✂️"
        console.log("You lost :(")
    }
}
function Scissors(){
    console.log("Scissors")
    selection = Math.floor(Math.random() * 3)
    console.log(selection)
    if (selection === rock)
    {
        outputTxt.innerHTML = "You lost :("
        playerChoice.innerHTML = "You: ✂️"
        computerChoice.innerHTML = "Computer: 🪨"
        console.log("You lost :(")
    }
    if (selection === paper)
    {
        outputTxt.innerHTML = "You win!"
        playerChoice.innerHTML = "You: ✂️"
        computerChoice.innerHTML = "Computer: 📄"
        console.log("You win!")
    }
    if (selection === scissors)
    {
        outputTxt.innerHTML = "Tie"
        playerChoice.innerHTML = "You: ✂️"
        computerChoice.innerHTML = "Computer: ✂️"
        console.log("Tie")
    }
}