const input = document.querySelector("#input");
const typingText = document.querySelector("#test #text p");
const time = document.querySelector(".time span b");
const mistakes = document.querySelector(".mistakes span");
const wpm = document.querySelector(".wpm span");
const cpm = document.querySelector(".cpm span");
const btn=document.querySelector("#btn");

let timer;
let maxTime=60;
let timeLeft=maxTime;
let charindex=0;
let mistake=0;
let istyping=false;

function loadParagraph() {
  const paragraph = [
    "Avoid daydreaming about the years to come.",
    "You are the most important person in your whole life.",
    "Always be true to who you are, and ignore what other people have to say about you.",
    "Always be true to who you are, and ignore what other people have to say about you.",
    "Only demonstrate your strength when its really required.",
    "Subscribe to Drop X Out",
  ];
  const randomIndex=Math.floor(Math.random()*paragraph.length);
  typingText.innerHTML="";
  for(const char of paragraph[randomIndex]){
    typingText.innerHTML+=`<span>${char}</span>`;
  }
  typingText.querySelectorAll("span")[0].classList.add("active");
  document.addEventListener("keydown",()=>input.focus());
  // typingText.addEventListener("click",()=>input.focus());
}

function initTyping(){
  let typedChar=input.value.charAt(charindex);
  let char=typingText.querySelectorAll("span");

  if(charindex<char.length && timeLeft>0){
    if(!istyping){
      timer=setInterval(initTimer,1000);
      istyping=true;
    }
    if(char[charindex].innerText===typedChar){
      char[charindex].classList.add("correct");
    }
    else{
      mistake++;
      char[charindex].classList.add("incorrect");
    }
    charindex++;
    char[charindex].classList.add("active");
    mistakes.innerText=mistake;
    cpm.innerText=charindex-mistake;
  }
  else{
    input.value="";
    clearInterval(timer);
  }
}
function initTimer(){
  if(timeLeft>0){
    timeLeft--;
    time.innerText=timeLeft;
    wpm.innerText=Math.round(((charindex - mistake)/5) /(maxTime - timeLeft)*60);
  }
  else{
    clearInterval(timer);
  }
}
function reset(){
  charindex=0;
  loadParagraph();
  clearInterval(timer);
  timeLeft=maxTime;
  input.value="";
  time.innerText=0;
  mistakes.innerText=0;
  mistake=0;
  wpm.innerText=0;
  cpm.innerText=0;
}

btn.addEventListener("click",reset);
input.addEventListener("input",initTyping);
loadParagraph();
