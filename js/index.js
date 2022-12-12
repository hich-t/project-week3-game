const game_width = 100;
const game_height = 58;

const gameElement = document.querySelector('[data-game]');
console.log(gameElement)

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
