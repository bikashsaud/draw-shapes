const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

const height = 1080;
const width = 1920;

// resize canvas (CSS does scale it up or down)
canvas.height = height;
canvas.width = width;

context.beginPath();

function getMousePos(canvas, evt) {
  var rect = canvas.getBoundingClientRect(),
    scaleX = canvas.width / rect.width,
    scaleY = canvas.height / rect.height;

  return {
    x: (evt.clientX - rect.left) * scaleX,
    y: (evt.clientY - rect.top) * scaleY,
  };
}


context.lineWidth = 10;
context.lineCap = "round";

// implement drawing rectangle
let start = {}

function startRect(e) {
    start = getMousePos(canvas, e);
}

window.addEventListener("mousedown", startRect);

function endRect(e) {
  let { x, y } = getMousePos(canvas, e);
  console.log("endRect", start.x, start.y, x - start.x, y - start.y);  // eslint-disable-line
  context.strokeStyle = "blue";
  context.rect(start.x, start.y, x - start.x, y - start.y);
  context.stroke();
}

window.addEventListener("mouseup", endRect);
