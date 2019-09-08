function BrickBreaker(canvas, ctx, handleNext) {
let x = canvas.width /2;
let y = canvas.height-30;
let dx = 2;
let dy = -2;
let ballRadius = 10;
let counter = 1;
let color = '#393020';
let paddleHeight = 10;
let paddleWidth = 75;
let paddleX = (canvas.width-paddleWidth)/2;
let paddleX2 = (canvas.width-paddleWidth)/2;


let rightPressed = false;
let leftPressed = false;

function drawBall() {

  ctx.beginPath();
  ctx.arc(x, y, ballRadius, 0, Math.PI*2);
  ctx.fillStyle = color;
  ctx.fill();
  ctx.closePath();

}

function drawPaddle() {
  ctx.beginPath();
  ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
}

function draw() {
    if(counter === 2) {
        
        handleNext();
    }
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBall(); 
  drawPaddle();
  if(rightPressed) {
    paddleX += 7;
    if (paddleX + paddleWidth > canvas.width){
        paddleX = canvas.width - paddleWidth;
    }
  } 
  else if(leftPressed) {
    paddleX -= 7;
    if (paddleX < 0){
        paddleX = 0;
    }
  }

  if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
    color = getRandomColor()
    dx = -dx;
  } 
  if(y + dy < ballRadius) {
    color = getRandomColor();
      dy = -dy;
  } else if (y + dy > canvas.height-ballRadius) {
    if(x > paddleX & x < paddleX + paddleWidth || x > paddleX2 & x < paddleX2 + paddleWidth) {
      counter ++;
      dy = -dy;
      
    } else {
    alert('Game Over');
    document.location.reload();
    clearInterval(interval);
    }
  }

  x += dx;
  y += dy;

}
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function keyDownHandler(e) {
  if( e.key === 'd' || e.key === "Right" || e.key === "ArrowRight") {
    rightPressed = true;
  } else if ( e.key === 'a' || e.key === 'Left' || e.key === 'ArrowLeft' ) {
    leftPressed = true;
  }
} 
function keyUpHandler(e) {
  if( e.key === 'd' || e.key === "Right" || e.key === "ArrowRight") {
      rightPressed = false;
  }
  else if( e.key === 'a' || e.key === 'Left' || e.key === 'ArrowLeft' ) {
      leftPressed = false;
  }
}

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
let interval = setInterval(draw, 10);
}

export default BrickBreaker;