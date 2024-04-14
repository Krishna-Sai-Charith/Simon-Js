let gameseq=[];
let userseq=[];

let btns=["red","yellow","blue","green"];

let started=false;
let level=0;

let h3=document.querySelector("h3");
let allbtn=document.querySelectorAll(".btn");

function buttonpress(){
  let btn=this;
  userFlash(btn);
  usercolor=btn.getAttribute("id");
  userseq.push(usercolor);
  check(userseq.length-1);

}
function check(idx){
   if(userseq[idx]===gameseq[idx]){
    if(userseq.length===gameseq.length){
        setTimeout(levelUp,1000);
   }
  }
   else{
    h3.innerText=`Game Over! Your score is ${level-1}, Press any key to restart`;
    document.querySelector("body").style.backgroundColor="red";
    setTimeout(function(){
        document.querySelector("body").style.backgroundColor="white";
    })
    reset();
   }
}


for(btn of allbtn){
    btn.addEventListener("click",buttonpress);
}


document.addEventListener("keypress",()=>{
  if(!started){
    started=true;
    levelUp();
  }
});

function levelUp(){
  userseq=[];
   level++;
   h3.innerText=`Level ${level}`;

   let randIdx=Math.floor(Math.random()*3);
   let randColor=btns[randIdx];
   gameseq.push(randColor);
   let randBtn=document.querySelector(`.${randColor}`);
   btnFlash(randBtn);

}
function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(()=>{
        btn.classList.remove("flash");
    },500);
}
function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(()=>{
        btn.classList.remove("userFlash");
    },500);
}


function reset(){
  started=false;
  level=0;
  gameseq=[];
  userseq=[];
}