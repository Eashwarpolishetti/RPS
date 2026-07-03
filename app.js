let UserScore=0;
let CompScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector(#msg-cont);

// generating computer choice
const Gencomchoice=()=>{
    const listofChoices=['rock','paper','scissor'];
    const randomID=Math.floor(Math.random()*3);
    return listofChoices[randomID]
}
const draw=(()=>{
    console.log("it's a draw match");
});

const playgame=(userchoice)=>{ 
    const compchoice=Gencomchoice();
    console.log("userchoice ",userchoice);
    console.log("computer choice is ",compchoice);
    if(userchoice===compchoice)
    {
        // console.log("it's a draw");
        draw();
    }
    else{
        let userWin=true;
        if(userchoice==="rock"){
            userWin=compchoice==="paper"?false:true;
        }
        else if(userchoice==="paper"){
            userWin=compchoice==="scissor"?false:true;
        }
        else{
            userWin=compchoice==="rock"?false:true;
        }
        // console.log(userWin);
    }
}

choices.forEach((choice)=>{
    choice.addEventListener('click',()=>{
        const userchoice=choice.getAttribute("id");
        playgame(userchoice);
        console.log("choice was clicked");
    });
});