
export default function GrabTheCoinGame(canvas, ctx, updateMode, mode, nextGame, state, updateScore) {

    let score = (mode === 'game' ? state.score : 0);
    let points = 100 * (mode === 'game' ? state.gameMultiplier : 1)
    // let color;
    let paddleHeight = 45;
    let paddleWidth = 45;
    let paddleX = (canvas.width-paddleWidth)/2;
    let paddleY = (canvas.height-paddleHeight-10);
    let rightPressed = false;
    let leftPressed = false;
    let upPressed = false;
    let downPressed = false;
    let ballx = canvas.width/2;
    let bally = 80;
    let movementSpeed = 3 * (mode === 'game' ? state.gameMultiplier : 1);
    
    
    let leftClick = document.getElementById('leftClick')
    leftClick.addEventListener('mousedown', leftClicked)
    leftClick.addEventListener('mouseup', leftClickStop)
    let rightClick = document.getElementById('rightClick')
    rightClick.addEventListener('mousedown', rightClicked)
    rightClick.addEventListener('mouseup', rightClickStop)
    let upClick = document.getElementById('upClick')
    upClick.addEventListener('mousedown', upClicked)
    upClick.addEventListener('mouseup', upClickStop)
    let downClick = document.getElementById('downClick')
    downClick.addEventListener('mousedown', downClicked)
    downClick.addEventListener('mouseup', downClickStop)
  
    function drawBall() {
      ctx.beginPath();
      ctx.rect(ballx, bally, 10, 10);
      ctx.fillStyle = '#000000';
      ctx.fill();
      ctx.closePath();
    }
    function getRandX() {
        ballx = Math.floor(Math.random() * canvas.width)
        if(ballx > canvas.width - 20) {
            ballx = canvas.width - 40
        }
        console.log(ballx)
    }
    

    function getRandY() {
        bally = Math.floor(Math.random() * canvas.height)
        if(bally > canvas.height - 20) {
            bally = canvas.height - 40
        }
        console.log(bally)
    }
  
    function drawPaddle() {
      ctx.beginPath();
      ctx.rect(paddleX, paddleY, paddleWidth, paddleHeight);
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
      drawScore();
      drawPaddle();
      checkBoxAndBall();
      drawBall(); 
      checkBoxandWall();
  
    }
    function checkBoxandWall() {
        if(rightPressed) {
            paddleX += movementSpeed;
            if (paddleX + paddleWidth > canvas.width){
                gameOver();
                paddleX = canvas.width - paddleWidth;
            }
          } 
          else if(leftPressed) {
            paddleX -= movementSpeed;
            if (paddleX < -movementSpeed){
                gameOver();
                paddleX = 0;
            }
          } else if(upPressed) {
              paddleY -= movementSpeed;
              if(paddleY < 0 ) {
              gameOver();
              paddleY= 0;
              }
          } else if(downPressed) {
              paddleY += movementSpeed ;
              if(paddleY + paddleHeight > canvas.height){
              gameOver()
                paddleY = canvas.height - paddleHeight;
              }
          }
    }
    function checkBoxAndBall() {
        if (paddleX < ballx + 10 &&
            paddleX + paddleWidth > ballx &&
            paddleY < bally + 10 &&
            paddleY + paddleHeight > bally) {
            score += points
                getRandX()
                getRandY()
                
         }
    }
    function keyDownHandler(e) {
      if( e.key === 'd' || e.key === "Right" || e.key === "ArrowRight") {
        rightPressed = true;
        
      } else if ( e.key === 'a' || e.key === 'Left' || e.key === 'ArrowLeft' ) {
        leftPressed = true;
      } else if ( e.key === 'w' || e.key === 'Up' || e.key === 'ArrowUp' ) {
        upPressed = true;
      } else if ( e.key === 's' || e.key === 'Down' || e.key === 'ArrowDown' ) {
        downPressed = true;
      }
    } 
    function keyUpHandler(e) {
      if( e.key === 'd' || e.key === "Right" || e.key === "ArrowRight") {
          rightPressed = false;
      }
      else if( e.key === 'a' || e.key === 'Left' || e.key === 'ArrowLeft' ) {
          leftPressed = false;
      } else if ( e.key === 'w' || e.key === 'Up' || e.key === 'ArrowUp' ) {
        upPressed = false;
      } else if ( e.key === 's' || e.key === 'Down' || e.key === 'ArrowDown' ) {
        downPressed = false;
      }
    }
    function leftClicked() {
      leftPressed = true
    }
    function leftClickStop() {
      leftPressed = false
    }
    function rightClicked() {
      rightPressed = true
    }
    function rightClickStop() {
      rightPressed = false
    }
    function upClicked() {
      upPressed = true
    }
    function upClickStop() {
      upPressed = false
    }
    function downClicked() {
      downPressed = true
    }
    function downClickStop() {
      downPressed = false
    }

    function gameOver() {
        clearInterval(interval)
        clearInterval(time);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        console.log('you died');
        updateMode(score)
    }
    function cleanSlate() {
        if(mode === 'game') {
        clearInterval(interval);
        clearInterval(time);
        ctx.clearRect(0, 0,canvas.width, canvas.height);
        nextGame(score) } else {
            clearInterval(time);
        }        
      }
  
    document.addEventListener("keydown", keyDownHandler, false);
    document.addEventListener("keyup", keyUpHandler, false);
    let time = setInterval(cleanSlate, 15000)
    let interval = setInterval(draw, 10);
  
  }
  