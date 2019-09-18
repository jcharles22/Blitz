

export default function AstoridGame(canvas, ctx, updateMode){
    console.log('test')
    // let x = canvas.width /2;
    // let y = canvas.height-40;
    // let dx = 2;
    // let dy = -2;
    // let ballRadius = 6;
    // let score = 0;
    // let color = '#393020';
    // let paddleHeight = 10;
    // let paddleWidth = 90;
    // let paddleX = (canvas.width-paddleWidth)/2;
    // let paddleX2 = (canvas.width-paddleWidth)/2;
    // let rightPressed = false;
    // let leftPressed = false;
    // let spacePressed = false;
    // let bulletSpeed = 5;
    // let bullets = [];
  
    // function drawPaddle() {
    //   ctx.beginPath();
    //   ctx.moveTo(x+20,canvas.height);
    //   ctx.lineTo(x,y);
    //   ctx.lineTo(x-20,canvas.height);
    //   ctx.fillStyle = "#0095DD";
    //   ctx.fill();
    //   ctx.closePath();
    //   ctx.beginPath();
    //   ctx.moveTo(x+40,canvas.height);
    //   ctx.lineTo(x+30,canvas.height-20);
    //   ctx.lineTo(x+18,canvas.height);
    //   ctx.fillStyle = "#0095DD";
    //   ctx.fill();
    //   ctx.closePath();
    // }
  
    // function draw() {
    //   ctx.clearRect(0, 0, canvas.width, canvas.height);
    //   drawPaddle();
   
    //   if(rightPressed) {
    //       if(x+25 <= canvas.width) {
    //           x+=5;
    //       } 
    //   }
    //   if(leftPressed) {
    //       if(x-25 >= 0) {
    //       x-=5;
    //       }
    //   }
      
    // }
    // function createBullet(){
    //     console.log(x, y);
    //     this.x = x;
    //     this.y= y;
    //     this.try = function() {
    //         console.log(this.x1, this.y2);
    //     };
 
    // };
    
    // function hspace(){
     
    //         let createBullet = new createBullet();
    //         createBullet();
    // }


    // // function drawBullet() {
    // //     ctx.beginPath();
    // //     ctx.arc(x, y-42, ballRadius, 0, Math.PI*2);
    // //     ctx.fillStyle = color;
    // //     ctx.fill();
    // //     ctx.closePath();
    // // }

    // function keyDownHandler(e) {
    //     if( e.key === 'd' || e.key === "Right" || e.key === "ArrowRight") {
    //       rightPressed = true;
    //     } else if ( e.key === 'a' || e.key === 'Left' || e.key === 'ArrowLeft' ) {
    //       leftPressed = true;
    //     } 
    //   } 
    //   function keyUpHandler(e) {
    //     if( e.key === 'd' || e.key === "Right" || e.key === "ArrowRight") {
    //         rightPressed = false;
    //     }
    //     else if( e.key === 'a' || e.key === 'Left' || e.key === 'ArrowLeft' ) {
    //         leftPressed = false;
    //     } else if ( e.keyCode === 32) {
    //         hspace();
    //       }
    //   }

  
    // document.addEventListener("keydown", keyDownHandler, false);
    // document.addEventListener("keyup", keyUpHandler, false);
    // // document.addEventListener('keypress', createBullet, false);
    // let interval = setInterval(draw, 10);
  
  }
  
  