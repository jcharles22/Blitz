
export default function BrickBreaker(canvas, ctx, updateMode, mode, nextGame, state, updateScore){
 
  let x = canvas.width /2;
  let y = canvas.height-30;
  
  let dx = 2 * (mode === 'game' ? state.gameMultiplier : 1);
  let dy = -2 * (mode === 'game' ? state.gameMultiplier : 1);
  let points = 100 * (mode === 'game' ? state.gameMultiplier : 1)
  let ballRadius = 10;
  let score = (mode === 'game' ? state.score : 0);
  let color = '#393020';
  let paddleHeight = 10;
  let paddleWidth = 90;
  let paddleX = (canvas.width-paddleWidth)/2;
  let rightPressed = false;
  let leftPressed = false;

  let leftClick = document.getElementById('leftClick')
  leftClick.addEventListener('mousedown', leftClicked)
  leftClick.addEventListener('mouseout', leftClickStop)
  leftClick.addEventListener('mouseup', leftClickStop)
  leftClick.addEventListener('touchstart', leftClicked)
  leftClick.addEventListener('touchstop', leftClickStop)
  let rightClick = document.getElementById('rightClick')
  rightClick.addEventListener('mousedown', rightClicked)
  rightClick.addEventListener('mouseup', rightClickStop)
  rightClick.addEventListener('touchstart', rightClicked)
  rightClick.addEventListener('touchstop', rightClickStop)
  rightClick.addEventListener('mouseout', rightClickStop)


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
  function drawScore() {
    ctx.font = "30px Arial";
    ctx.fillStyle = 'black';
    ctx.fillText(score, canvas.width-70, 40);
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall(); 
    drawScore();
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
      if(x > paddleX & x < paddleX + paddleWidth) {
        score += points;
        if(score > 100 && mode === 'practice') {
          dx = dx *1.2
          dy = dy * 1.2
        }
        dy = -dy;
        
      } else {
        clearInterval(interval);
        clearInterval(time)
        ctx.clearRect(0, 0,canvas.width, canvas.height);
        updateMode(score);
      
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
    // e.preventDefault();
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
  function leftClicked() {
    console.log('some')
    leftPressed = true
  }
  function leftClickStop() {
    leftPressed = false
  }
  function rightClicked() {
    console.log('some')
    rightPressed = true
  }
  function rightClickStop() {
    rightPressed = false
  }

    function cleanSlate() {
      if(mode === 'game') {
      clearInterval(interval);
      clearInterval(time)

      ctx.clearRect(0, 0,canvas.width, canvas.height);
      nextGame(score)
      } else {
        clearInterval(time);
      }
    }
  document.addEventListener("keydown", keyDownHandler, false);
  document.addEventListener("keyup", keyUpHandler, false);

    let time = setInterval(cleanSlate, 15000)
  
    let interval = setInterval(draw, 10);


}

