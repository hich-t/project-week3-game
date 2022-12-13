// import { updateGround } from './ground.js'


const game_width = 100;
const game_height = 70;

const gameElement = document.querySelector('[data-game]');

setPixelToGameScale();
window.addEventListener("resize", setPixelToGameScale);


// let lastTime
// function update(time) {
//  if ( lastTime == null ) {
//  // in case we are sitting on the start screen, the delta would be 
//  // huge, so we update the lastTime variable to be the current time
//  // and we call again the loop and then return to stop the function there
//     lastTime = time 
//     window.requestAnimationFrame(update)
//     return }
//     const delta = time - lastTime

//     updateGround(delta)

//     lastTime = time
//     window.requestAnimationFrame(update)

// }
// window.requestAnimationFrame(update)

// // ^ fonction pour update la page web en cas de nouveau contenu
// // basically it smoothes the delay to account for the fluctuating refresh rate
// // so the character movement for example is always consistent

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



