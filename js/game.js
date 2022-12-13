// document.addEventListener('DOMContentLoaded', () => {

const game_width = 100;
const game_height = 70;

const gameElement = document.querySelector(".game");
const obstacleClass = document.querySelector(".obstacle")



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


//character

const duck = document.querySelector(".duck");

let bottom = 40;
let gravity = 1.2;
let isJumping = false;
let left = 0;
let isGoingRight = false;
let isGoingLeft = false;

function jump() {
  if (isJumping) return;
  let timerUpId = setInterval(function () {
    if (bottom > 210) {
      clearInterval(timerUpId);
      let timerDownId = setInterval(() => {
        if (bottom < 40) {
          clearInterval(timerDownId);
          isJumping = false;
        }
        bottom -= 20;
        duck.style.bottom = bottom + "px";
      }, 30);
    }
    isJumping = true;
    bottom += 10;
    bottom = bottom * gravity;
    duck.style.bottom = bottom + "px";
  }, 30);
}

function slideLeft() {
  isGoingLeft = true
  if(duck.style.left = "0px"){
    isGoingLeft = false ;
  }
    left -= 40;
    console.log("going left");
    duck.style.left = left + "px";
  console.log(left)
}

function slideRight() {
  isGoingRight = true
  if(duck.style.left = "200px"){
    isGoingRight = false;
  }
    left += 40;
    console.log("going right");
    duck.style.left = left + "px";
}

function control(e) {
  if (e.keyCode === 32 || e.keyCode === 38) {
    jump();
  } else if (e.keyCode === 81 || e.keyCode === 37) {
    slideLeft();
}else if (e.keyCode === 68 || e.keyCode === 39){
  slideRight()
}
}

document.addEventListener("keydown", control);


const duckDiv = document.querySelector('.duck')
let duckRect = duckDiv.getBoundingClientRect()
console.log(duckRect.left, duckRect.right)

let obsGenerate = true

// obstacles
function generateObstacles() {

  if (obsGenerate) {

      let randomObs = [ "parasol", 'ball']

  let randomTime = (Math.random() * 3000) + 2000

  let obstaclePosition = 1000;
  const obstacle = document.createElement("div");
  obstacle.classList.add("obstacle")
  obstacle.classList.add(randomObs[Math.floor(Math.random() * randomObs.length)]);
  gameElement.appendChild(obstacle);
  obstacle.style.left = obstaclePosition + "px";

let obstacleRect = document.querySelector(".obstacle").getBoundingClientRect()


    let timerId = setInterval(function() {
console.log(duckRect.right)
console.log(obstaclePosition)
      if ( duckRect.right / obstaclePosition > 0.97 && duckRect.right / obstaclePosition < 1.05 ) {
        clearInterval(timerId)
     
        let gameOverText = document.createElement('div')
        gameOverText.classList.add("game-over") 
        gameElement.appendChild(gameOverText)
        gameOverText.innerHTML = "Game Over !!!  Press Space to Restart"
        gameOver()
          
      }

      obstaclePosition -=4
      // console.log(obstaclePosition)
      obstacle.style.left = `${obstaclePosition}px`
    }, 20  ) 

    setTimeout(generateObstacles, randomTime)

  }
  }
  generateObstacles();

function gameOver() {
  obsGenerate = false
Object.freeze()
document.querySelector('.obstacle').classList.add('hide')
document.querySelector('.ball').classList.add('hide')
document.querySelector('.parasol').classList.add('hide')

document.querySelector('.score').classList.add('hide')

}
