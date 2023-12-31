//Set global variable that would contain the position, velocity and the html element "ball"
let ball=document.getElementById('ball');
var Xmin = 0;
var Xmax = 500;
var Ymin = 0;
var Ymax = 300;
var velocityX = 1;
var velocityY = 1;
var positionX = 0;
var positionY = 0;
var time = 15;
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

  //changePlanets();

  if (positionX > Xmax || positionX === Xmin){
    isEdgeX = !isEdgeX;
  }
  
  if (positionY > Ymax || positionY===Ymin){
    isEdgeY = !isEdgeY;
  }
  
  changePlanets()
}

function changePlanets(){
  if(positionX === Xmin+1){
     ball.style.backgroundImage = 'url("smallEarthSquare.jpg")';
     ball.style.height = "80px";
     ball.style.width = "80px";
  }
  if(positionY === Ymin+1){  
    ball.style.backgroundImage = "url('jupiterflat.jpg')";
    ball.style.height = "100px";
    ball.style.width = "100px";
  }
  if(positionX === Xmax-1){ 
    ball.style.background = "url('mercuryflat.jpg')";
    ball.style.height = "40px";
    ball.style.width = "40px";
  }
  if(positionY === Ymax-1){ 
    ball.style.background = "url('marsflat.jpg')";
    ball.style.height = "60px";
    ball.style.width = "60px";
  }
}



// This call the moveBall function every 100ms
setInterval(moveBall, time);
