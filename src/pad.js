export default function drawPaddle( canvas, ctx) {
    ctx.beginPath();
    ctx.rect(29, 25, 67, 67);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
  }
  