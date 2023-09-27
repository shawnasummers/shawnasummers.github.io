//Set global variable that would contain the position, velocity and the html element "ball"
let ball=document.getElementById('ball');
var Xmin = 0;
var Xmax = 300;
var velocity = 5;
var positionX = 0;
var time = 20;
var isEdge = false;

//move ball up a bit higher on the page
ball.style.top = 50 + 'px';
//write a function that can change the position of the html element "ball"
function moveBall() {
  // two fixed x-axis coordinates (you will use these variable in step 3)
  if(positionX <= Xmax && isEdge==false){
    positionX = positionX + velocity;
    ball.style.left = positionX + 'px';
    if(positionX == Xmax) isEdge=true;
  }else { 
    positionX = positionX - velocity;
    ball.style.left = positionX + 'px';
    if(positionX == Xmin) isEdge=false}
}

// This call the moveBall function every 100ms
setInterval(moveBall, time);
