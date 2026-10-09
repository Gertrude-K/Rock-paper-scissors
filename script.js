console.log("Hello World")
function getComputerChoice(){
    
    let i = Math.random()
    if (i < 1/3 ){
        return "rock"
    }else if(i < 2/3){
         return "paper"
    }else{
        return "scissors"
    }
        
}

console.log(getComputerChoice())


function getHumanChoice(){
   let user  =  prompt("Enter rock,paper,scissors: ")
   return user
}


let humanScore = 0
let computerScore = 0







function playGame(){

        for(i =0; i < 5; i++){}
             function playRound(humanChoice,computerChoice){
                  let human = humanChoice.toLowerCase() //why will it never match
        
                   if (humanChoice== "rock" && computerChoice =="scissors"){
                      humanScore += 1
                      console.log ("You win! ${humanChoice} beats ${computerChoice}")
                    }
             
                    else if (humanChoice== "scissors" && computerChoice =="rock"){
                      computerScore += 1
                      console.log("You win! ${computerChoice} beats ${humanChoice}")
                    }
                   
                    else if (humanChoice== "paper" && computerChoice =="rock"){
                        humanScore += 1
                        console.log("You win! ${humanChoice} beats ${computerChoice}")
                    }
                      
                    if (humanChoice== "rock" && computerChoice =="paper"){
                        computerScoreScore += 1
                        console.log("You win! ${computerScore} beats ${humanScore}")
                    }
                     
                    if (humanChoice== "paper" && computerChoice =="scissors"){
                        humanScore += 1
                        console.log("You win! ${computerChoice} beats ${humanChoiceChoice}") 
                    }
                    
                    if(humanChoice=="scissors"&& computerChoice=="paper"){
                        humanScore += 1
                        console.log ("You win! ${humanChoice} beats ${computerChoice}")
                    }
                    return "You lose!" 

                }
            }
        

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice() 


