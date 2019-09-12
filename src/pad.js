export default function pad(canvas, ctx) {
  let x = canvas.width /2;
  let y = canvas.height-30;
    ctx.beginPath();
    ctx.rect(x, y, 67, 67);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
  }
  