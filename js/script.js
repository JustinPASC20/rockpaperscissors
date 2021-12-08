let computerChoice =Math.ceil(Math.random()*3);


$(".computerChoice").text(computerChoice);

$(".play").click(function(){
  let userInput = $(".input").val();
  $(".userChoice").text(userInput);
})


/*
if(computerChoice === 1){
computerChoice = "rock";
$(".computerChoice").text(computerChoice);}

else if(computerChoice ===2){
computerChoice = "scissors";
$(".computerChoice").text(computerChoice);
}

else if(computerChoice ===3){
computerChoice = "paper";
$(".computerChoice").text(computerChoice);
}
*/

//compound conditional statements
/*
if((userInput === "rock" && computerChoice === 2 || userInput ==="scissors" && computerChoice === 3 || userInput === "paper" && computerChoice === 1){

}
*/