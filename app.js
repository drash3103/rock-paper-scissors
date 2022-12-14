var userScore = 0;
var computerScore=0;
const userScore_span=document.getElementById("user-score");
const computerScore_span=document.getElementById("computer-score");
const scoreBoard_div=document.querySelector(".score-board");
const result_p= document.querySelector(".result > p");
const rock_div=document.getElementById("r");
const paper_div=document.getElementById("p");
const scissors_div=document.getElementById("s");


function getComputerChoice(){
    const choices=['r','p','s'];
    const randomNumber = Math.floor(Math.random()*3);
    return choices[randomNumber];
}

function convertToWord(letter)
{
    if(letter === "r") return "rock";
    if(letter === "p") return "paper";
    if(letter === "s") return "scissors";

}




function win(userChoice, computerChoice)
{
    userScore++;
    userScore_span.innerHTML=userScore;
    computerScore_span.innerHTML=computerScore;
    result_p.innerHTML= `${convertToWord(userChoice)}  beats  ${convertToWord(computerChoice)}&#128293;  .You win, yayyyy &#127881;&#127881;&#127881; !!!`;
    document.getElementById(userChoice).classList.add('green-glow');
    setTimeout(function() {document.getElementById(userChoice).classList.remove('green-glow') },300);
}

function lose(userChoice, computerChoice){
    computerScore++;
    userScore_span.innerHTML=userScore;
    computerScore_span.innerHTML=computerScore;
    result_p.innerHTML= `${convertToWord(userChoice)}  loses to  ${convertToWord(computerChoice)}&#129317;  . you lost, SORRY&#128577;&#128577;&#128577;!`;
    // res_p.innerHTMl= `${convertToWord(userChoice)} " beats " ${convertToword(computerChoice)} ".You win"` ;
    document.getElementById(userChoice).classList.add('red-glow');
    setTimeout(function() {document.getElementById(userChoice).classList.remove('red-glow') },300);
   

}

function draw(userChoice, computerChoice)
{
    
    result_p.innerHTML= `${convertToWord(userChoice)}  equals  ${convertToWord(computerChoice)}  . It's a draw.&#128518; `;
    // res_p.innerHTMl= `${convertToWord(userChoice)} " beats " ${convertToword(computerChoice)} ".You win"` ;

    document.getElementById(userChoice).classList.add('gray-glow');
    setTimeout(function() {document.getElementById(userChoice).classList.remove('gray-glow') },300);

}





function game(userChoice){
    const computerChoice = getComputerChoice();

    switch(userChoice + computerChoice){
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "sr":
        case "rp":
        case "ps":
            lose(userChoice,computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
                draw(userChoice,computerChoice);
            break;
    }
}

function main(){
    rock_div.addEventListener('click',function(){
        game("r");
    });
    
    paper_div.addEventListener('click',function(){
       game("p");
    });
    
    scissors_div.addEventListener('click',function(){
       game("s");
    });
    

}
main();

