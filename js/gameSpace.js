// document.addEventListener('DOMContentLoaded', () => {

const game_width = 100;
const game_height = 70;

//press any key to start
const pressStart = document.querySelector(".start-screen");

document.addEventListener("keydown", gameStart, { once: true });



function gameStart() {
  lastTime = null;
  pressStart.classList.add("hide");
  generateObstacles();
  generateItems()
}
let itemDiv = document.querySelector(".item")

const duckDiv = document.querySelector(".duck");
const duckRect = duckDiv.getBoundingClientRect();

const gameElement = document.querySelector(".game");

const gameRect = gameElement.getBoundingClientRect();

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


//Score

let score = 0; //initialisation du score
// let n = 10000; //nombre final de points pour finir le niveau
const myScore = document.querySelector(".score");

// function scoring() {
//   myScore.innerText = `Score : ${score++}`;
//   if (score < n) {
//     setTimeout(scoring, 100);
//   }
//   if (score === n) {
//     myScore.innerText = `CONGRATS! You succeed this level!`;
//   }
// }
// setTimeout(scoring, 100);

//character

let bottom = 0;
let gravity = 1.1;
let isJumping = false;
let left = 0;
let isGoingRight = true;
let isGoingLeft = true;

function jump() {
  if (isJumping) return;
  let timerUpId = setInterval(function () {
    if (bottom > 300) {
      clearInterval(timerUpId);
      let timerDownId = setInterval(() => {
        if (bottom < 40) {
          bottom = 40;
          clearInterval(timerDownId);
          isJumping = false;
        }
        bottom -= 20;
        // console.log(bottom)
        duckDiv.style.bottom = bottom + "px";
      }, 40);
    }
    isJumping = true;
    bottom += 20;
    bottom = bottom * gravity;
    duckDiv.style.bottom = bottom + "px";
  }, 40);
}

function slideLeft() {
  if (left > -40 && isGoingLeft) {
    left -= 40;
    duckDiv.style.left = left + "px";
  }
}

function slideRight() {
  if (left < 800 && isGoingRight) {
    left += 40;
    duckDiv.style.left = left + "px";
  }
}

function control(e) {
  if (e.keyCode === 32 || e.keyCode === 38) {
    jump();
  } else if (e.keyCode === 81 || e.keyCode === 37) {
    slideLeft();
  } else if (e.keyCode === 68 || e.keyCode === 39) {
    slideRight();
  }
}

document.addEventListener("keydown", control);

let itemGen = true
function generateItems() {

    if (itemGen) {

        // let itemPosition = Math.random() * 900 + 50;
        let itemPosition = 400
        let randomItemTime = Math.random() * 3000 + 4000;
        const item = document.createElement("div");
        item.classList.add("item");
        gameElement.appendChild(item);
        item.style.left = itemPosition + "px";

        
            // let itemRect = itemDiv.getBoundingClientRect();

            const duckLeft = duckDiv.style.left;
            let duckRect = duckDiv.getBoundingClientRect();
            let duckBot = duckDiv.style.bottom;

            let itemBot = item.style.bottom;   

        let timerId = setInterval(function () {

          let itemRect = itemDiv.getBoundingClientRect();

          console.log(itemRect.getBoundingClientRect())


            const condition1 =
          parseInt(duckBot) / itemRect.height > 0.96 &&
          parseInt(duckBot) / itemRect.height < 1.05;

          const condition2 =
          duckRect.x / (itemRect.x - itemRect.width) > 0.96 &&
          duckRect.x / (itemRect.x - itemRect.width) < 1.05;

           if (duckRect.right < itemRect.right &&
            duckRect.right > itemRect.left &&
            duckTop > parseInt(itemBot) ) {

                myScore.innerText = `Score : ${(score += 100)}`} 


    item.style.left = `${itemPosition}px`;
}, 20);

setTimeout(generateItems, randomItemTime);
}
}








let obsGenerate = true;

// obstacles
function generateObstacles() {
  if (obsGenerate) {
    let randomObs = ["fusee", "ovni"];

    let randomTime = Math.random() * 3000 + 2000;

    let obstaclePosition = 1000;
    const obstacle = document.createElement("div");
    obstacle.classList.add("obstacle");
    obstacle.classList.add(
      randomObs[Math.floor(Math.random() * randomObs.length)]
    );
    gameElement.appendChild(obstacle);
    obstacle.style.left = obstaclePosition + "px";

    // console.log(obstacleRect.left)

    let timerId = setInterval(function () {
      const duckLeft = duckDiv.style.left;
      let duckRect = duckDiv.getBoundingClientRect();
      let duckBot = duckDiv.style.bottom;

      document.querySelectorAll(".obstacle").forEach((obs) => {
        let obstacleRect = obs.getBoundingClientRect();

        const condition1 =
          parseInt(duckBot) / obstacleRect.height > 0.96 &&
          parseInt(duckBot) / obstacleRect.height < 1.05;

        const condition2 =
          duckRect.x / (obstacleRect.x - obstacleRect.width) > 0.96 &&
          duckRect.x / (obstacleRect.x - obstacleRect.width) < 1.05;
        // console.log("obs", duckRect.x)
        // console.log("duck", obstacleRect.x)

        // (duckRect.right >= obstacleRect.right && duckRect.right <= obstacleRect.left
        //   && parseInt(duckBot) <= obstacleRect.height)

        if (condition2 && parseInt(duckBot) / obstacleRect.height > 0.96) {
          console.log("ok");
          myScore.innerText = `Score : ${(score += 1)}`;
        } else if (
          duckRect.right < obstacleRect.right &&
          duckRect.right > obstacleRect.left &&
          parseInt(duckBot) / obstacleRect.height < 0.96
        ) {
          gameOver();
        } else if (
          duckRect.left < obstacleRect.right &&
          duckRect.left > obstacleRect.left &&
          parseInt(duckBot) / obstacleRect.height < 0.96
        ) {
          gameOver();
        } else if (condition2) {
          gameOver();
        }
      });

      obstaclePosition -= 4;
      obstacle.style.left = `${obstaclePosition}px`;
    }, 20);

    setTimeout(generateObstacles, randomTime);
  }
}


function gameOver() {
  myScore.innerHTML = "Haha you suck";
  let gameOverText = document.createElement("div");
  gameOverText.classList.add("game-over"); 
  gameElement.appendChild(gameOverText);
  gameOverText.innerHTML = "Game Over !!!<br>  Press Space to Restart";
  obsGenerate = false;
  // document.querySelector(".obstacle").classList.add("hide");
  // document.querySelector(".ball").classList.add("hide");
  // document.querySelector(".parasol").classList.add("hide");
  // document.querySelector(".score").classList.add("hide");
document.querySelectorAll(".obstacle").forEach(e => e.remove());
isJumping = false;
isGoingRight = false;
isGoingLeft = false;
document.addEventListener("keyup", (e)=>{
  if(e.keyCode === 32){
    console.log('hello')
    restart()
  }
})
}

function restart(){
  
document.location.reload()
};

