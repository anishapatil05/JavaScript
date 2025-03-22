let userScore = 0;
let compScore = 0;
let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let userScorePara = document.querySelector("#user-score");
let compScorePara = document.querySelector("#comp-score");
let resetBtn = document.querySelector("#resetbtn");
let btn = document.querySelector("#btn");

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win!. Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";

    } else {
        compScore++;
        compScorePara.innerText = compScore++;
        msg.innerText = `You lose.  ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}
const playGame = (userChoice) => {
    // User choice
    console.log("user choice " + userChoice);

    // comp choice
    let compChoice = genCompChoice();
    console.log("comp choice " + compChoice);

    if (userChoice === compChoice) {
        // draw game
        drawGame();
    } else {
        let userWin = true;

        if (userChoice == "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }


}

const drawGame = () => {

    msg.innerText = "Game was draw, Please try again";
    msg.style.backgroundColor = "#98A2E7";
}

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

const resetGame = (userScore, compScore) => {

    userScore = 0;
    compScore = 0;
    userScorePara.innerText = userScore;
    compScorePara.innerText = compScore;


    enableBtn();
}
const enableBtn = () => {
    resetBtn.disabled = false;

    resetBtn.innerText = "Game reset!"
    resetBtn.style.backgroundColor = "#E8C58D";
}

resetBtn.addEventListener("click", () => resetGame(userScore, compScore));
