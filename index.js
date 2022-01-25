// DOM SELECTION 
const canvas = document.querySelector("#draw");
const ctx = canvas.getContext('2d');


// SETTING THE CANVAS TO DEVICE WIDTH HEIGHT 
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// GETTING THE STROKE STYLE AND MAKING IT ROUND AND ITS THICKNESS
ctx.strokeStyle = '#BADA55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = '50';
ctx.globalCompositeOperation = "multiply";

// SOME CORDINATES TO MAKE IT AS PER OUR X Y MOUSE ON OFF
let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

function draw(e) {
  if (!isDrawing) return; //CANCEL FUNCTION IF DRAWING FALSE LIKE ALL MOUSE EVENT RELATION 

  // FUNCTION FOR DRAWING 
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  [lastX, lastY] = [e.offsetX, e.offsetY]; //DESTURUCTURE THE ARRAY TO UPDATE AS PER MOUSE DOWN EVENT ITS CORRDINATES 

  // HUE INCREASE TO CHANGE ITS COLOR 
  hue++
  if (hue >= 360) {
    hue = 0;
  }
  // CHANGING THE LINE WIDTH AS PER MAX 50 AND 1 AND MAKING IT TRUE AND FALSE
  if (ctx.lineWidth >= 50 || ctx.lineWidth <= 1) {
    direction = !direction
  }

  // USE OF ABOVE CONDITION TO MAKE EITHER THIN OR THICK 
  if (direction) {
    ctx.lineWidth++
  }
  else {
    ctx.lineWidth--
  }


}


// EVENT LISTER AS PER MOUSE CLICKS AND OFFS 

canvas.addEventListener('mousedown', (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});


canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);