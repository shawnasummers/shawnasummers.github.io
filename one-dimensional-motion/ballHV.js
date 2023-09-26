//Set global variable that would contain the position, velocity and the html element "ball"
let ball=document.getElementById('ball');
var Xmin = 0;
var Xmax = 300;
var Ymin = 0;
var Ymax = 300;
var velocity = 500;
var positionX = 0;
var positionY = 0;
var time = 5000;
var isEdge = false;

var randomRange = Math.floor(Math.random() * 100) + 1;

//write a function that can change the position of the html element "ball"
function moveBall() {
  // two fixed x-axis coordinates (you will use these variable in step 3)
  //not at the edge moving to the right
  randomRange = Math.floor(Math.random() * 100) + 1;
  isEdge = false;

  if(positionX <= Xmax && positionY <= Ymax && isEdge==false){
    //randomRange = Math.floor(Math.random() * 100) + 1;
    positionX = positionX + velocity;
    positionY = positionY + velocity;
    
    ball.style.left = positionX + 'px';
    ball.style.top = positionY + 'px';

    if(positionX >= Xmax || positionY >= Ymax) isEdge=true;
  }
  //not at the edge moving to the left
  else if(positionX >= Xmin && positionY >= Ymin && isEdge==false){ 
    //randomRange = Math.floor(Math.random() * 100) + 1;
    positionX = positionX - velocity;
    positionY = positionY - velocity;
    ball.style.left = positionX + 'px';
    ball.style.top = positionY + 'px';

    if(positionX <= Xmin || positionY <= Ymin) isEdge=true
    
  }
}

// This call the moveBall function every 100ms
setInterval(moveBall, time);
