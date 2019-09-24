

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
    left = true
  }
  function leftClickStop() {
    left = false
  }
  function rightClicked() {
    right = true
  }
  function rightClickStop() {
    right = false
  }
  function keysDown(e) {
    if(e.keyCode === 39 || e.keyCode === 68){
      right = true;
    }
    else if(e.keyCode === 37 || e.keyCode === 65){
      left = true;
    }

  }
  function keysUp(e) {
    if(e.keyCode === 39 || e.keyCode === 68){
      right = false;
    }
    else if(e.keyCode === 37 || e.keyCode === 65){
      left = false;
    }
    
  }
  
  var player = {
    size: 30,
    x: (canvas.width -30)/ 2,
    y: canvas.height - 30,
    color: "green"
  };
  
  var badArc = {
    x:[],
    y:[],
    speed,
    color: ["black"]
  
  };
  var rain = 0;
  var rad = 10;
  


  function drawRain() {
    
      if(Math.random() < .05){
        badArc.x.push(Math.random() * canvas.width);
        badArc.y.push(0);
      }
    
    rain = badArc.x.length;
  }

  
  function drawBlackBall() {
    for(var i = 0; i < rain; i++){   
      ctx.beginPath();
      ctx.arc(badArc.x[i], badArc.y[i], rad, 0, Math.PI * 2);
      ctx.fillStyle = 'black';
      ctx.fill();
      ctx.closePath();
    }
  }
  function drawPlayer() {
    ctx.beginPath();
    ctx.rect(player.x, player.y, player.size, player.size);
    ctx.fillStyle = player.color;
    ctx.fill();
    ctx.closePath();
  }
  
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
    
    for(let i = 0; i < rain; i++){
      if(player.x < badArc.x[i] + rad && player.x + 30 + rad > badArc.x[i] && player.y < badArc.y[i] + rad && player.y + 30 > badArc.y[i]){
          gamesOver();
      }
      if(badArc.y[i] > canvas.height){
        badArc.x.shift();
        badArc.y.shift();

      }
    }
  
  }
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
  
  function drawTime() {
    if(mode === 'game') {
    ctx.font = "30px Arial";
    ctx.fillStyle = 'black';
    ctx.fillText(timeLeft, 20, 40);
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
  
  



  

  
  