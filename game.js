const menu = document.getElementById("menu");
const game = document.getElementById("game");
const playBtn = document.getElementById("playBtn");
const backBtn = document.getElementById("backBtn");

playBtn.addEventListener("click", () => {
  menu.classList.add("hidden");
  game.classList.remove("hidden");
});

backBtn.addEventListener("click", () => {
  game.classList.add("hidden");
  menu.classList.remove("hidden");
});

