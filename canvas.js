const canvas = document.getElementById("piccanvas");
const ctx = canvas.getContext("2d");

const skyGradient = ctx.createLinearGradient(0, 0, 1000, 0);
skyGradient.addColorStop(0, "rgb(65, 85, 199)");
skyGradient.addColorStop(1, "white");

function drawLine(x1, y1, x2, y2, color, lineWidth) {
    ctx.strokeStyle = color;
    ctx.lineWidth = lineWidth;
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
    ctx.closePath();
}

function drawRectangleFill(x1, y1, w, h, fColor) {
    ctx.fillStyle = fColor;
    ctx.beginPath();
    ctx.rect(x1, y1, w, h);
    ctx.fill();
    ctx.closePath();
}

function drawRectangleStroke(x1, y1, w, h, fColor, lineWidth) {
    ctx.strokeStyle = fColor;
    ctx.lineWidth = lineWidth;
    ctx.beginPath();
    ctx.rect(x1, y1, w, h);
    ctx.stroke();
    ctx.closePath();
}

function drawArcStroke(x, y, radius, sAngle, eAngle, sColor, lineWidth, aClock) {
    ctx.strokeStyle = sColor;
    ctx.lineWidth = lineWidth;
    ctx.beginPath();
    ctx.arc(x, y, radius, sAngle, eAngle, aClock);
    ctx.stroke();
    ctx.closePath();
}

function drawArcFill(x, y, radius, sAngle, eAngle, fColor, aClock) {
    ctx.beginPath();
    ctx.fillStyle = fColor;
    ctx.arc(x, y, radius, sAngle, eAngle, aClock);
    ctx.fill();
    ctx.closePath();
}

function fillTriangle(x1, y1 ,x2, y2, x3, y3, fColor) {
    ctx.fillStyle = fColor;
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.lineTo(x3, y3);
    ctx.fill();
    ctx.closePath();
}

function drawChimney() {
    drawRectangleFill(550, 100, 100, 100, "gray");
    drawRectangleStroke(550, 100, 100, 100, "#000000", 4);
    drawLine(550, 125, 650, 125, "#000000", 4);
    drawLine(550, 150, 650, 150, "#000000", 4);
    drawLine(590, 100, 590, 125, "#000000", 4);
    drawLine(620, 125, 620, 150, "#000000", 4);
    drawLine(590, 150, 590, 175, "#000000", 4);
}

// Setups
drawRectangleFill(0, 0, 1000, 600, skyGradient);
drawRectangleFill(0, 550, 1000, 50, "green");
drawRectangleFill(50, 200, 700, 350, "gray");
drawChimney();
fillTriangle(50, 200, 375, 100, 750, 200, "red");
// Door
drawRectangleStroke(50, 200, 700, 350, "#000000", 4);
drawRectangleFill(100, 270, 150, 280, "brown");
drawRectangleStroke(100, 270, 150, 280, "#000000", 4);
drawRectangleFill(150, 300, 50, 100, "lightblue");
drawRectangleStroke(150, 300, 50, 100, "#000000", 4);
// Window
drawRectangleFill(300, 270, 200, 150, "lightblue");
drawRectangleStroke(300, 270, 200, 150, "#000000", 4);
// Details
drawLine(400, 270, 400, 420, "#000000", 4);
drawLine(300, 345, 500, 345, "#000000", 4);
drawLine(50, 200, 375, 100, "#000000", 4);
drawLine(750, 200, 375, 100, "#000000", 4);
drawLine(120, 180, 100, 100, "#000000", 4);
drawLine(50, 100, 185, 100, "#000000", 4);
drawLine(50, 80, 50, 120, "#000000", 4);
drawLine(100, 80, 70, 120, "#000000", 4);
drawLine(170, 80, 160, 120, "#000000", 4);
// Tree
drawRectangleFill(850, 400, 50, 150, "brown");
drawRectangleStroke(850, 400, 50, 150, "#000000", 4);
drawArcFill(875, 375, 100, 0, 2 * Math.PI, "green", false);
drawArcStroke(875, 375, 100, 0, 2 * Math.PI, "#000000", false);
drawArcFill(1000, 0, 100, 0, 2 * Math.PI, "yellow", false);
// Birds
drawArcStroke(700, 100, 25, 0, 1.5 * Math.PI, "#000000", 4, true);
drawArcStroke(750, 100, 25, 1 * Math.PI, 1.5 * Math.PI, "#000000", 4, false);
drawArcStroke(760, 70, 15, 0, 1.5 * Math.PI, "#000000", 4, true);
drawArcStroke(790, 70, 15, 1 * Math.PI, 1.5 * Math.PI, "#000000", 4, false);
