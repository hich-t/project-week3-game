let character = document.querySelector("[data-duck]")
let obstacle = document.getElementById("obstacle")

// function jump() {
//     character.classList.add("animate")
//     setTimeout(function(){
//         character.classList.remove("animate")
//         }, 500)
// }

const speed = 0.05
const groundElems = document.querySelectorAll("[data-ground]")

function setupGround() {
    setCustomProperty(groundElems[0], "--left", 0)
    setCustomProperty(groundElems[1], "--left", 300)
  }

function updateGround(delta, speedScale) {
    groundElems.forEach(ground => {
      incrementCustomProperty(ground, "--left", delta * speedScale * speed * -1)
  
      if (getCustomProperty(ground, "--left") <= -300) {
        incrementCustomProperty(ground, "--left", 600)
      }
    })
  }