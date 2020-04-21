let canvas;
let ctx;
let eraserEnabled = false;
let opacity = 0.1;

window.onload = function () {
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");

    canvas.addEventListener("mousedown", startDrawing);
    canvas.addEventListener("mouseup", stopDrawing);
    canvas.addEventListener("mouseout", stopDrawing);
    document
        .getElementById("clear-canvas")
        .addEventListener("click", clearCanvas);
};

function startDrawing(e) {
    let x = e.clientX - canvas.offsetLeft + window.scrollX;
    let y = e.clientY - canvas.offsetTop + window.scrollY;
    eraserEnabled = document.getElementById("eraser").checked;
    if (!eraserEnabled) {
        ctx.strokeStyle = document.getElementById("colorPicker").value;
    } else {
        ctx.strokeStyle = "#ffffff";
    }
    ctx.globalAlpha = document.getElementById("alpha-selector").value;
    ctx.lineWidth = document.getElementById("linewidth-selector").value;

    ctx.beginPath();
    ctx.moveTo(x, y);
    canvas.addEventListener("mousemove", doDrawing);
}

function doDrawing(e) {
    let x = e.clientX - canvas.offsetLeft + window.scrollX;
    let y = e.clientY - canvas.offsetTop + window.scrollY;
    ctx.lineTo(x, y);
    ctx.stroke();
}

function stopDrawing() {
    ctx.closePath();
    canvas.removeEventListener("mousemove", doDrawing);
}

function hexToRgb(hex) {
    let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
        ? {
              r: parseInt(result[1], 16),
              g: parseInt(result[2], 16),
              b: parseInt(result[3], 16),
          }
        : null;
}

function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function createRgba() {
    let temp = hexToRgb(document.getElementById("colorPicker").value);
    return `rgba(${temp.r}, ${temp.g}, ${temp.b}, ${opacity})`;
}
