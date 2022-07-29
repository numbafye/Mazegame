window.addEventListener("mousemove", (e) => {
  let collision = e.target.classList.value;
  detectCollision(collision);
});

const detectCollision = (value) => {
  if (value === "mazeborder") alert("YOU FOUND TROUBLE!");
};
