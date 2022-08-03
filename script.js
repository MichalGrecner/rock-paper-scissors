function getComputerChoice(){
    const choices=["rock", "paper", "scissors"] 
    let index = Math.floor(Math.random()*3)
    return choices[index]
}


function playRound(playerSelection, computerSelection){
    let result =""
    console.log("player: "+playerSelection)
    console.log("computer: "+computerSelection)
    if(playerSelection==false){
        result="wrong input, try again!!!"
    }
    else if(playerSelection==computerSelection){
        result = "no winner this time"
    }
    else if(playerSelection=="rock") {
        if(computerSelection=="paper"){
            result = "you lost! paper beats rock!"
            scorePC ++
        } else{
            result = "you won, congrats! rock beats scissors"
            scorePlayer ++
        }
    }
    else if(playerSelection=="scissors"){
        if(computerSelection=="rock"){
            result = "you lost! rock beats scissors"
            scorePC ++
        } else {
            result = "you won, congrats! scissors beats paper"
            scorePlayer ++
        }
    }
    else if(playerSelection=="paper"){
        if(computerSelection=="rock"){
            result = "you won, congrats! paper beats rock"
            scorePlayer ++
        } else {
            result = "you lost! scissors beats paper!"
            scorePC ++

        }
    }
    return result
}



function getPlayerChoice(){
    const choices=["rock", "paper", "scissors"]
    //const playerChoice = prompt("rock scissors or paper? whats your move?")
    if(choices.includes(playerChoice.toLowerCase()) == false){
        return false
    } else {
    return playerChoice.toLowerCase()
    }
}

let scorePlayer = 0
let scorePC = 0

function game(){
    for (let i = 0; i<5; i++){
        console.log(playRound(getPlayerChoice(), getComputerChoice()))
        console.log("round number:" + Number(i+1))
    }
    console.log("score player: "+ scorePlayer)
    console.log("score PC: " + scorePC)
    if(scorePlayer==scorePC){
        console.log("No winner of match")
    } else if(scorePlayer>scorePC){
        console.log("congrats! you won whole match")
    } else{
        console.log("you lost whole match! you should try again!!!")
    }
}

game()

