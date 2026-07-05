let UserScore=0;
let CompScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg-cont");

const userScoreLine=document.querySelector("#user-score");
const compScoreLine=document.querySelector("#computer-score");

// generating computer choice
const Gencomchoice=()=>{
    const listofChoices=['rock','paper','scissor'];
    const randomID=Math.floor(Math.random()*3);
    return listofChoices[randomID]
}



const draw = () => {
    msg.innerText = "It's a draw match! 🤝";
    msg.style.backgroundColor = "#f1f5f9"; // Neutral gray background
    msg.style.borderColor = "#64748b";
};

let showWinner=(userWin,userchoice,compchoice)=>{
    if(userWin){
        UserScore++;
        userScoreLine.innerText=UserScore;
        msg.innerText= `You win  🎉 Your ${userchoice} beats ${compchoice}.`;
        // console.log("you won marraa");
        msg.style.backgroundColor = "#bbf7d0";
        msg.style.borderColor = "#22c55e";
    }
    else{
        CompScore++;
        compScoreLine.innerText=CompScore;
        // console.log("you lost");
        msg.innerText= `You lose 🫠 ${compchoice} beats your ${userchoice}.`;
        msg.style.backgroundColor = "#fecaca";
        msg.style.borderColor = "#ef4444";
    }
};

const playgame=(userchoice)=>{ 
    const compchoice=Gencomchoice();
    // console.log("userchoice ",userchoice);
    // console.log("computer choice is ",compchoice);
    if(userchoice===compchoice)
    {
        // console.log("it's a draw");
        draw();
        // msg.innerText="it's a draw match";
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
        showWinner(userWin,userchoice,compchoice);
    }
};

choices.forEach((choice)=>{
    choice.addEventListener('click',()=>{
        const userchoice=choice.getAttribute("id");
        playgame(userchoice);
        // console.log("choice was clicked");
    });
});