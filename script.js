let round = 0;
let scorePlayer = 0;
let scoreComputer = 0;
let gameEnable = true //set to false after last round

game()
// main function
function game(){
        const buttonsPlayer = document.querySelectorAll(".btnPlayer"); 
        buttonsPlayer.forEach((btn)=>{
        btn.addEventListener("click",(e)=>{
            if (gameEnable){ 
            round ++;
            if(round < 5){
                let playerChoice = e.target.innerHTML.toLowerCase(); //get rock/paper/scissors from inner html of div
                let computerChoice = getComputerChoice();
                playRound(playerChoice, computerChoice); 
            } else{
                evaluation(scorePlayer, scoreComputer) //get the winner after lst round
            }
            score(); 
            roundNm();
        }
        })
    })
}
         

function evaluation(scorePlayer, scorePC){
    const Btn = document.querySelectorAll(".button");
    Btn.forEach((x)=>{
    x.style.pointerEvents = "none" //prevent buttton from transform: scale 1.1 when hover
    })
    let statusText = document.querySelector(".statusText")
    if(scorePlayer==scorePC){
        statusText.innerHTML= "No winner of match"
    } else if(scorePlayer>scorePC){
        statusText.innerHTML="you win the match!"
    } else{
        statusText.innerHTML="you lost the match!"
    }
    gameEnable = false 
    document.querySelector(".playAgain").style.cssText = "display: block" //play again button appears
}


function getComputerChoice(){
    const choices=["rock", "paper", "scissors"] 
    let index = Math.floor(Math.random()*3)
    return choices[index]
}

//finds winner each round
function playRound(playerSelection, computerSelection){
     if(playerSelection==computerSelection){
        draw(playerSelection, computerSelection)
    }
    else if(playerSelection=="rock") {
        if(computerSelection=="paper"){
            computerWin(playerSelection, computerSelection)
        } else{
            playerWin(playerSelection, computerSelection)
        }
    }
    else if(playerSelection=="scissors"){
        if(computerSelection=="rock"){
            computerWin(playerSelection, computerSelection)
        } else {
            playerWin(playerSelection, computerSelection)
        }
    }
    else if(playerSelection=="paper"){
        if(computerSelection=="rock"){
            playerWin(playerSelection, computerSelection)
        } else {
            computerWin(playerSelection, computerSelection)

        }
    }
    
}


function playerWin(playerChoice, computerChoice){
    scorePlayer +=1;
    let statusPlayer = document.querySelector(".statusPlayer");
    let statusComputer = document.querySelector(".statusComputer");
    let statusText = document.querySelector(".statusText")
    statusPlayer.style.cssText = "border-color: green";
    statusPlayer.innerHTML = playerChoice.toUpperCase();
    statusComputer.style.cssText = "border-color: red";
    statusComputer.innerHTML = computerChoice.toUpperCase();
    statusText.innerHTML = "YOU WIN"
}

function computerWin(playerChoice, computerChoice){
    scoreComputer +=1;
    let statusPlayer = document.querySelector(".statusPlayer");
    let statusComputer = document.querySelector(".statusComputer")
    let statusText  =document.querySelector(".statusText")
    statusPlayer.style.cssText = "border-color: red";
    statusPlayer.innerHTML = playerChoice.toUpperCase();
    statusComputer.style.cssText = "border-color: green";
    statusComputer.innerHTML = computerChoice.toUpperCase();
    statusText.innerHTML = "YOU LOSE"
}


function draw(playerChoice, computerChoice){
    
    let statusPlayer = document.querySelector(".statusPlayer");
    let statusComputer = document.querySelector(".statusComputer");
    let statusText = document.querySelector(".statusText")
    statusPlayer.style.cssText = "border-color: rgb(226, 226, 226)";
    statusPlayer.innerHTML = playerChoice.toUpperCase();
    statusComputer.style.cssText = "border-color: rgb(226, 226, 226)";
    statusComputer.innerHTML = computerChoice.toUpperCase();
    statusText.innerHTML = "DRAW"
}


function score(){
    let score = document.querySelector(".score")
    score.innerHTML= `${scorePlayer} - ${scoreComputer}`
}


function roundNm(){
    let roundTag = document.querySelector(".round")
    roundTag.innerHTML= `ROUND ${round} / 5`
}

