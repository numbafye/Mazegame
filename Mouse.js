// tracks mouse movement
window.addEventListener("mousemove", (e) => {
  let collision = e.target.classList.value;
  detectCollision(collision);
});
