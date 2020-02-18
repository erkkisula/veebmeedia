let block = document.getElementById('first');
let isScreenFlashing = false;

setInterval(function() {
    const r = Math.round(Math.random() * 255);
    const g = Math.round(Math.random() * 255);
    const b = Math.round(Math.random() * 255);

    first.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    if (isScreenFlashing) {
        document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    }
}, 1000);

const colorClick = () => {
    isScreenFlashing = !isScreenFlashing;
    console.log(isScreenFlashing);
};

const resetColor = () => {
    document.body.style.backgroundColor = '#f1f1f1';
};
