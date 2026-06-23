let computerMove = 0;
let isSpinning = false;
let user = 0;
let userScore = 0;
let opponentScore = 0;

const userImg = document.getElementById("playerImageAction");
const userWrapper = document.getElementById("playerWrapper");
const computerImg = document.getElementById("computerImageAction");
const computerWrapper = document.getElementById("computerActionWrapper");

function rock() {
  if (isSpinning) return;
  isSpinning = true;
  user = 1;
  buttonVisibilityOff();
  playerDecision();
  generateComputerDecison();
}
function paper() {
  if (isSpinning) return;
  isSpinning = true;
  user = 2;
  buttonVisibilityOff();
  playerDecision();
  generateComputerDecison();
}

function scissor() {
  if (isSpinning) return;
  isSpinning = true;
  user = 3;
  buttonVisibilityOff();
  playerDecision();
  generateComputerDecison();
}

function playerDecision() {
  userWrapper.classList.add("PlayerShakingFist");

  setTimeout(() => {
    userWrapper.classList.remove("PlayerShakingFist");

    switch (user) {
      case 1:
        userImg.src = "assets/images/rock.png";
        break;
      case 2:
        userImg.src = "assets/images/paper.png";
        break;
      case 3:
        userImg.src = "assets/images/scissor.png";
        break;
    }
  }, 1000);
}

function generateComputerDecison() {
  computerWrapper.classList.add("OpponentShakingFist");

  setTimeout(() => {
    computerWrapper.classList.remove("OpponentShakingFist");

    let generate = Math.floor(Math.random() * 6) + 1;
    computerMove = generate;

    switch (generate) {
      case 1:
      case 4:
        computerImg.src = "assets/images/rock.png";
        break;
      case 2:
      case 5:
        computerImg.src = "assets/images/paper.png";
        break;
      case 3:
      case 6:
        computerImg.src = "assets/images/scissor.png";
        break;
    }

    scoringSystem();
    buttonVisibilityOn();
  }, 1000);
}

function scoringSystem() {
  let finalComputerMove = computerMove;
  if (computerMove === 4) finalComputerMove = 1;
  if (computerMove === 5) finalComputerMove = 2;
  if (computerMove === 6) finalComputerMove = 3;

  if (user === finalComputerMove) {
    document.getElementById("resultDisplay").innerText = "IT'S A TIE!";
    return;
  }

  if ((user === 1 && finalComputerMove == 3) || (user === 2 && finalComputerMove == 1) || (user === 3 && finalComputerMove == 2)) {
    userScore++;
    const winTexts = ["GREAT!", "WONDERFUL!", "FANTASTIC!", "GOOD!"];
    const randomWin = winTexts[Math.floor(Math.random() * winTexts.length)];

    document.getElementById("resultDisplay").innerText = randomWin;
  } else {
    opponentScore++;
    const loseTexts = ["AWFUL!", "TRY AGAIN!", "TOO BAD!", "(T^T)"];
    const randomLose = loseTexts[Math.floor(Math.random() * loseTexts.length)];

    document.getElementById("resultDisplay").innerText = randomLose;
  }
}

function buttonVisibilityOff() {
  if (isSpinning) {
    document.getElementById("buttonVisibility").style.visibility = "hidden";
  }
}

function buttonVisibilityOn() {
  setTimeout(function () {
    userImg.src = "assets/images/rock.png";
    computerImg.src = "assets/images/rock.png";
    isSpinning = false;
    if (!isSpinning) {
      document.getElementById("buttonVisibility").style.visibility = "visible";
      document.getElementById("scoreBoard").innerText = userScore + " | " + opponentScore;

      if (userScore === 5) {
        alert("PLAYER WIN!"); // Gives the user a pop-up notice before redirecting away
        window.location.replace("index.html");
      }

      if (opponentScore === 5) {
        alert("COMPUTER WIN!");
        window.location.replace("index.html");
      }
    }

    document.getElementById("resultDisplay").innerText = "";
  }, 1500);
}
