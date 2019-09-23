

export default function AstoridGame(canvas, ctx, updateMode, mode, nextGame, state, updateScore){
  var left = false;
  var right = false;
  var gameOver = false;
  let score = (mode === 'game' ? state.score : 0);
  let speed= 2 * (mode === 'game' ? state.gameMultiplier : 1);
  let points = 50 * (mode === 'game' ? state.gameMultiplier : 1)
  let timeLeft = 15;

  
  
  document.addEventListener("keydown", keysDown, false);
  document.addEventListener("keyup", keysUp, false);
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

  function leftClicked() {
    console.log('some')
    left = true
  }
  function leftClickStop() {
    left = false
  }
  function rightClicked() {
    console.log('some')
    right = true
  }
  function rightClickStop() {
    right = false
  }
  // when key is pressed down, move
  function keysDown(e) {
    if(e.keyCode === 39){
      right = true;
    }
    else if(e.keyCode === 37){
      left = true;
    }

  }
  // when key is released, stop moving
  function keysUp(e) {
    if(e.keyCode === 39){
      right = false;
    }
    else if(e.keyCode === 37){
      left = false;
    }
    
  }
  
  // player specs
  var player = {
    size: 30,
    x: (canvas.width -30)/ 2,
    y: canvas.height - 30,
    color: "green"
  };
  
  // specs for balls you want to collect

  
  // specs for balls you want to avoid
  var badArc = {
    x:[],
    y:[],
    speed,
    color: ["black"]
  
  };
  var rain = 0;
  var rad = 10;
  


  //adds values to x property of badArc
  function drawRain() {
    
      if(Math.random() < .05){
        badArc.x.push(Math.random() * canvas.width);
        badArc.y.push(0);
      }
    
    rain = badArc.x.length;
  }

  
  // draws black ball to avoid
  function drawBlackBall() {
    for(var i = 0; i < rain; i++){   
      ctx.beginPath();
      ctx.arc(badArc.x[i], badArc.y[i], rad, 0, Math.PI * 2);
      ctx.fillStyle = 'black';
      ctx.fill();
      ctx.closePath();
    }
  }
  // draw player to canvas
  function drawPlayer() {
    ctx.beginPath();
    ctx.rect(player.x, player.y, player.size, player.size);
    ctx.fillStyle = player.color;
    ctx.fill();
    ctx.closePath();
  }
  
  // moves objects in play
  function playUpdate() {
    
    if(left && player.x > 0){
      player.x -= 7;
    }
    if(right && player.x + player.size < canvas.width) {
      player.x += 7;
    }
    for(let i = 0; i < rain; i++){
      badArc.y[i] += badArc.speed;
    }
    
    // collision detection
    for(let i = 0; i < rain; i++){
      if(player.x < badArc.x[i] + rad && player.x + 30 + rad > badArc.x[i] && player.y < badArc.y[i] + rad && player.y + 30 > badArc.y[i]){
          gamesOver();
      }
      // Removes circles from x and y arrays that are no longer in play
      if(badArc.y[i] > canvas.height){
        badArc.x.shift();
        badArc.y.shift();

      }
    }
  
  }
  //signals end of game and resets x, y, and state arrays for arcs
  function gamesOver(){
    clearInterval(scoreTimer)
    clearInterval(time)
    clearInterval(interval)
    ctx.clearRect(0, 0,canvas.width, canvas.height);
    badArc.x = [];
    badArc.y = [];
    gameOver = true;
    updateMode(score);
  }
  function drawScore() {
    ctx.font = "30px Arial";
    ctx.fillStyle = 'black';
    ctx.fillText(score, canvas.width-70, 40);
  }
  
  //resets game, life, and score counters
  function drawTime() {
    if(mode === 'game') {
    ctx.font = "30px Arial";
    ctx.fillStyle = 'black';
    ctx.fillText(timeLeft, 0, 40);
    } 
  }
  function draw(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if(!gameOver){
      drawPlayer();
      drawTime();
      drawBlackBall();
      playUpdate();
      drawRain();
      drawScore();

    }

    

    
    
  }
  function cleanSlate() {
    if(mode === 'game') {
    clearInterval(time)
    clearInterval(scoreTimer)
    clearInterval(interval)
    ctx.clearRect(0, 0,canvas.width, canvas.height);
    console.log('in')
    nextGame(score)

    } else {
      clearInterval(time);
    }
  }
  function scoreAdder() {
      score += points;
      if(mode === 'game') {
        timeLeft --;
        if(timeLeft <=0) {
          clearInterval(scoreTimer)
        }
      }
    }
  let scoreTimer = setInterval(scoreAdder, 1000);
  let time = setInterval(cleanSlate, 15000)
  let interval = setInterval(draw, 10);
  
  draw();}
  
  



  

  
  