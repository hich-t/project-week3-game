
const game_width = 100;
const game_height = 70;
const gameElement = document.querySelector(".game");

// const thumbElem = document.querySelectorAll(".thumbs")

// function thumbsBorder() {
// for (let i = 0 ; i < thumbElem.length ; i++) {
//   thumbElem[i].style.borderColor = 'white';
//   // thumbElem[i].style.border-radius = "10%"
// }
// }

// titleElem.addEventListener("mouseover" , thumbsBorder)




setPixelToGameScale();
window.addEventListener("resize", setPixelToGameScale);

function setPixelToGameScale() {
  let gameToPixelScale;
  if (window.innerWidth / window.innerHeight < game_width / game_height) {
    gameToPixelScale = window.innerWidth / game_width;
  } else {
    gameToPixelScale = window.innerHeight / game_height;
  }

  gameElement.style.width = `${game_width * gameToPixelScale}px`;
  gameElement.style.height = `${game_height * gameToPixelScale}px`;
}