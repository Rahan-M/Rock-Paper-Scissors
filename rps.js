let userscore=0;
let compscore=0;
let text;
let msg=document.querySelector(".textmsg");
let yousc=document.querySelector(".yousc");
let compsc=document.querySelector(".compsc");

// generating the computer's choice
const gencompch=()=>{
    let opts=["rock","paper","scissors"];
    let compchind=Math.floor(Math.random()*3);
    return opts[compchind];
}

const drawgame=(compch)=>{
    text=`Comp chose ${compch}, It's a draw`
    msg.style.backgroundColor="#042A2B";
    msg.style.borderRadius="15px";
    msg.innerText=text;
}
const showwinner=(userwin,usch,compch)=>{
    if(userwin){
        userscore++;
        yousc.innerText=userscore;
        text=`Your ${usch} beats ${compch}, You Win!`
        msg.style.backgroundColor="green";
        msg.style.borderRadius="15px";
        msg.innerText=text;
    }else{
        compscore++;
        compsc.innerText=compscore;
        text=`Comp chose ${compch}, You Lose!`
        msg.style.backgroundColor="Red";
        msg.style.borderRadius="15px";
        msg.innerText=text;
    }
}
// actual gameplay
const playgame=(usch)=>{
    let compch=gencompch();
    console.log(compch);
    console.log(usch);
    if(usch===compch){
        drawgame(compch);
    }
    else {
        let userwin=true;
        if(usch=="rock"){
        userwin=(compch=="scissors")?true:false;
        }
        else if(usch=="paper"){
            userwin=(compch=="rock")?true:false;
        }
        else{
            userwin=(compch=="paper")?true:false;
        } 
        showwinner(userwin,usch,compch);
}
}

// Adding eventlisteners to the three choices
choices=document.querySelectorAll(".choice");
choices.forEach((choice) => {
    choice.addEventListener("click",()=>{
        userchoice=choice.getAttribute("id");
        playgame(userchoice);
    })
});