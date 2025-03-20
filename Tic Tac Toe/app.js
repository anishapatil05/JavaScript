let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#resetbtn");
let newGamebbtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container"); // ✅ Fixed class name
let msg = document.querySelector("#msg");

let turnO = true;  
let count = 0;

let winPatterns = [
    [0,1,2], [0,3,6], [0,4,8], [1,4,7], 
    [2,5,8], [2,4,6], [3,4,5], [6,7,8]
];


const resetGame = () => {
    turnO = true;
    count = 0;
    enabledBoxes(); 
    msg.innerText = ""; 
    msgContainer.classList.add("hide"); 
};


const enabledBoxes = () => {
    boxes.forEach((box) => {
        box.innerText = "";
        box.style.pointerEvents = "auto"; 
    });
};

const disableBoxes = () => {
    boxes.forEach((box) => {
        box.style.pointerEvents = "none";  
    });
};


const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};


const winner = () => {
    for (let pattern of winPatterns) {  
        let pos0Val = boxes[pattern[0]].innerText;
        let pos1Val = boxes[pattern[1]].innerText;
        let pos2Val = boxes[pattern[2]].innerText;

        if (pos0Val !== "" && pos1Val !== "" && pos2Val !== "" ) {
            if (pos0Val === pos1Val && pos1Val === pos2Val) {
                console.log("Winner:", pos0Val);
                showWinner(pos0Val);
                return;
            }
        }
    }


    if (count === 9) {
        msg.innerText = "It's a Draw!";
        msgContainer.classList.remove("hide");
    }
};


boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerText = "O";
            box.style.color = "red";
            turnO = false;
        } else {
            box.innerText = "X";
            box.style.color = "#EDED3D";
            turnO = true;
        }
        box.style.pointerEvents = "none";
        count++;
        winner();
    });
});

newGamebbtn.addEventListener("click", resetGame);
resetbtn.addEventListener("click", resetGame);
