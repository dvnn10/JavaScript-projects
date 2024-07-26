let input=document.getElementById("num");
let button=document.getElementById("btn");
let text=document.getElementById("text");
let guess=document.getElementById("guess");

let answer=Math.floor(Math.random()*100)+1;
let numGuesses=0;

button.addEventListener("click",()=>{
  if(input.value<1 || input.value>100 || isNaN(input.value)){
    text.innerHTML="Enter number between 1 to 100";
    input.value="";
    numGuesses++;
    guess.innerHTML=`No. of Guess : ${numGuesses}`;
  }
  else{
    numGuesses++;
    if(input.value>answer){
      text.innerHTML="You guessed too high!";
      guess.innerHTML=`No. of Guess : ${numGuesses}`;
      input.value="";
    }
    else if(input.value<answer){
      text.innerHTML="You guessed too low!";
      guess.innerHTML=`No. of Guess : ${numGuesses}`;
      input.value="";
    }
    else{
      text.innerHTML="Congratulations! You guessed correct";
      guess.innerHTML=`No. of Guess : ${numGuesses}`;

      setTimeout(resetGame,5000);
    }
  }
  function resetGame(){
    numGuesses=0;
    input.value="";
    text.innerHTML="";
    guess.innerHTML="No. of Guess : 0";
  }
})
