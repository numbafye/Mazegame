// tracks mouse movement
window.addEventListener("mousemove", (e) => {
  let collision = e.target.classList.value;
  detectCollision(collision);
});
// tells player they lose when they touch the border
const detectCollision = (value) => {
  if (value === "mazeborder") alert("YOU FOUND TROUBLE!");
  if (value === "fake-finish") alert("YOU RAN INTO TROUBLES TRAP!");
  if (value === "finish") alert("YOU ESCAPED!");
  {
    Win.style.opacity = 1;
    Win.style.pointerEvents = "all";
    levelOne.style.pointerEvents = "none";
  }
};
