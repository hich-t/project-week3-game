
const duck = document.querySelector('.character')
let bottom = 0 
let gravity = 0.9

function jump(){
  let timerUpId = setInterval(function(){
    if(bottom > 250){
      clearInterval(timerId)
      let timerDownId = setInterval(() => {
if(bottom < 0){
  clearInterval(timerDownId)
}
        bottom -=5
        duck.style.bottom + 'px'
      }, 20);
    }
      bottom +=30
      bottom = bottom * gravity
  duck.style.bottom = bottom + 'px'
}, 20)
}

jump()

function checkKey(e) {

e = e || window.event;
  
if (e.keyCode === 32) {
        jump()
    }
  
  }

  document.addEventListener('keydown', checkKey)
