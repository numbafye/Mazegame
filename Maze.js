// mazes
const levelOne = document.querySelector(".lvlOne");
const levelTwo = document.querySelector(".lvlTwo");
// buttons
const Win = document.querySelector(".winbtn");
const Playbutton = document.querySelector(".btn-dark");
const WINNER = document.querySelector("h2");
// start game
Playbutton.addEventListener("click", () => {
  levelOne.style.display = "block";
  WINNER.style.display = "none";
  Playbutton.textContent = "PLAY";
  Playbutton.style.display = "none";
});

// tells player they lose when they touch the border
const detectCollision = (value) => {
  if (value === "mazeborder") {
    levelOne.style.display = "none";
    levelTwo.style.display = "none";
    Playbutton.style.display = "inline-block";
    alert("YOU FOUND TROUBLE!");
  }
  if (value === "finish") {
    Win.style.opacity = 1;
    Win.style.pointerEvents = "all";
    Win.style.display = "inline-block";
    levelOne.style.pointerEvents = "none";
    alert("YOU ESCAPED!");
    console.log("Win");
  }
  if (value === "fake-finish") {
    alert("YOU RAN INTO TROUBLES TRAP!");
    levelOne.style.display = "none";
    levelTwo.style.display = "none";
    Playbutton.style.display = "inline-block";
  }
  if (value === "last-finish") {
    levelOne.style.display = "none";
    levelTwo.style.display = "none";
    alert("YOU ESCAPED PARADISE!");
    WINNER.style.display = "block";
    Playbutton.textContent = "PLAY AGAIN";
    Playbutton.style.display = "inline-block";
  }
};
// next level
Win.addEventListener("click", () => {
  levelOne.style.display = "none";
  levelTwo.style.display = "block";
  Win.style.display = "none";
  levelOne.style.pointerEvents = "visible";
});
