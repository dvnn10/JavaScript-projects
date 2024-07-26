const btn=document.getElementById("dayNight");
const body=document.querySelector("body");

btn.addEventListener("click",()=>{
  body.classList.toggle("night");
})

let typingEffect=new Typed("#text",{
  strings:["Coder","Developer","Youtuber"],
  loop:true,
  typeSpeed:100,
  backSpeed:50,
  backDelay:1000
})
