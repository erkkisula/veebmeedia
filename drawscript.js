let canvas;
let ctx;

window.onload = function() {
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    drawRectangles();
    drawCircles();
    drawLines();
};

const drawRectangles = () => {
    ctx.strokeStyle = '#ffbb00';
    ctx.lineWidth = 10;
    ctx.fillStyle = '#dddd00';
    ctx.strokeRect(10, 10, 100, 50);
    ctx.fillRect(10, 100, 100, 50);

    ctx.beginPath();
    ctx.rect(10, 200, 100, 50);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();

    ctx.strokeStyle = '#ff00bb';
    ctx.fillStyle = '#dd00dd';

    ctx.beginPath();
    ctx.rect(10, 300, 100, 50);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
};

const drawCircles = () => {
    ctx.beginPath();
    ctx.fillStyle = 'rgba(220, 150, 220, .6)';
    ctx.arc(120, 120, 100, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.fillStyle = '#ffff00';
    ctx.arc(300, 300, 100, 0.4, 2 * Math.PI - 0.4);
    ctx.lineTo(300, 300);
    ctx.fill();
    ctx.closePath();
};

const drawLines = () => {
    ctx.strokeStyle = '#00dd00';
    ctx.beginPath();
    ctx.moveTo(500, 300);
    ctx.lineTo(900, 300);
    ctx.stroke();
    ctx.closePath();

    ctx.strokeStyle = '#ff0000';
    ctx.lineWidth = '4';
    ctx.beginPath();
    ctx.moveTo(500, 300);
    ctx.quadraticCurveTo(500, 0, 900, 300);
    ctx.stroke();
    ctx.closePath();

    ctx.strokeStyle = '#0000ff';
    ctx.beginPath();
    ctx.moveTo(500, 300);
    ctx.bezierCurveTo(650, 0, 750, 600, 900, 300);
    ctx.stroke();
    ctx.closePath();
};
