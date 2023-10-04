//Set global variable that would contain the position, velocity and the html element "ball"
let ball=document.getElementById('ball');
var Xmin = 0;
var Xmax = 250;
var Ymin = 0;
var Ymax = 150;
var velocityX = 1;
var velocityY = 1;
var positionX = 0;
var positionY = 0;
var time = 7;
var isEdgeX = true;
var isEdgeY = true;


//write a function that can change the position of the html element "ball"
function moveBall() {
  // two fixed x-axis coordinates (you will use these variable in step 3)
  //checking for left and right edges
  if(isEdgeX) {
    positionX = positionX + velocityX;
    ball.style.left = positionX + 'px';
    //ball.style.background = 'yellow';
  }else{
    positionX = positionX - velocityX;
    ball.style.left = positionX + 'px';
    //ball//.style.background = 'blue';
  }

  //checking for top and bottom edges
  if(isEdgeY){
    positionY = positionY + velocityY;
    ball.style.top = positionY + 'px';
    //ball.style.background = 'yellow';
  }else{
    positionY = positionY - velocityY;
    ball.style.top = positionY + 'px';
    //ball.style.background = 'blue';
  }

  changeColor();

  if (positionX > Xmax || positionX === Xmin){
    isEdgeX = !isEdgeX;
  }
  
  if (positionY > Ymax || positionY===Ymin){
    isEdgeY = !isEdgeY;
  }
  
}

function changeColor(){
  if(positionX === Xmin+1)  ball.style.background = 'teal';
  if(positionY === Ymin+1)  ball.style.background = 'pink';
  if(positionX === Xmax-1) ball.style.background = 'yellow';
  if(positionY === Ymax-1) ball.style.background = 'purple';
}

// This call the moveBall function every 100ms
setInterval(moveBall, time);
