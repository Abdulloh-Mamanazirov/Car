let entering = document.querySelector('#entering')
let way = document.querySelector('.way')
let car = document.getElementById('car')
let leftSides = document.querySelector('#leftSides')
let rightSides = document.querySelector('#rightSides')
let line = document.querySelector('.lines')
let start = document.querySelector('#start')
let music = new Audio('./car-sound.mp3')

function doc_keyUp(e) {
  if (e.key === "ArrowRight") {
    // music.play()
    console.log('right arrow');
    car.style.transform = 'translateX(380px)'
  }else if (e.key === "ArrowLeft") {
    console.log('left arrow');  
    car.style.transform = "translateX(0)";
  };
  
  
  if (e.code === 'ArrowUp'){
    console.log('gaz');
    obstacle.classList.add('obstacleAnimation')
    obstacle2.classList.add('obstacleAnimation')
      leftSides.classList.add("animation");
      rightSides.classList.add("animation");
      line.classList.add("lineAnimation");
  }else if(e.code === 'ArrowDown'){
    console.log('tormoz');
    obstacle.classList.remove('obstacleAnimation')
      leftSides.classList.remove("animation");
      rightSides.classList.remove("animation");
      line.classList.remove("lineAnimation");
  }
}
document.addEventListener("keyup", doc_keyUp, false);

start.addEventListener('click', function(){
  entering.style.display = 'none'
})


let obstacle = document.createElement('div')
let obstacle2 = document.createElement('div')

let toTop1 = Math.floor(Math.random()*100)+100
setInterval(() => {
  obstacle.classList.add('obstacle')
  obstacle.style.left = "150px";
  obstacle.style.top = `-${toTop1}px`
  way.appendChild(obstacle)
}, 11000);

let toTop2 = Math.floor(Math.random()*120)+30
let intervalID = setInterval(() => {
  obstacle2.classList.add('obstacle2')
  obstacle2.style.right = '150px'
  obstacle2.style.top = `-${toTop2}px`
  way.appendChild(obstacle2)
}, 5000);

