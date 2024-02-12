let boxes = document.querySelectorAll(".box")
let resetBtn = document.querySelector('#restart-btn')
let newGameBtn = document.querySelector("#new-btn")
let msgContainer = document.querySelector(".msg-container")
let msg = document.querySelector("#msg")


// player 0,X
let turn0 = true;  

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

 const resetGame = ()=>{
    turn0 = true;
    enableBoxes();
    msgContainer.classList.add("hide")
 }




boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("Box Clicked")
         if(turn0){// player 0
            box.innerHTML = "0";
            turn0 = false 
         } else{ //player X
            box.innerText = "X";
            turn0 = true
         }
         box.disabled = true;

         checkWinner();
    })
})

const disablesBoxes = ()=>{
    for(let box of boxes){
        box.disabled = true;
    }
}

const enableBoxes = ()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const  showWinner = (winner) =>{
    msg.innerText= `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide")
    disablesBoxes();
}



const checkWinner = ()=>{
    for ( let pattern of   winPatterns){
        //console.log(pattern[0],pattern[1], pattern[2])
        //console.log(boxes[pattern[0]].innerText,boxes[pattern[1]].innerText,boxes[pattern[2]].innerText)
         
       let pos1val = boxes[pattern[0]].innerText;
       let pos2val = boxes[pattern[1]].innerText;
       let pos3val = boxes[pattern[2]].innerText;
  
       if(pos1val != "" && pos2val != "" && pos3val != ""){
        if(pos1val === pos2val && pos2val === pos3val){
            // console.log("Winner", pos1val)
            showWinner(pos1val);
        }
       }

    }
}

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame)
