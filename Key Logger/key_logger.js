let startbtn=document.getElementById("startbtn");
let stopbtn=document.getElementById("stopbtn");
let log=document.getElementById("log");
let state=document.getElementById("state");

startbtn.addEventListener("click",function(){
  document.addEventListener("keydown",handleDown);
  document.addEventListener("keyup",handleUp);
  startbtn.disabled=true;
  stopbtn.disabled=false;
})

stopbtn.addEventListener("click",function(){
  document.removeEventListener("keydown",handleDown);
  document.removeEventListener("keyup",handleUp);
  log.textContent="";
  state.textContent="";
  startbtn.disabled=false;
  stopbtn.disabled=true;
})

function handleDown(e){
  log.textContent=`Key ${e.key} pressed down`;
  state.textContent="Key is down"; 
}
function handleUp(e){
  log.textContent=`Key ${e.key} pressed up`;
  state.textContent="Key is up"; 
}
