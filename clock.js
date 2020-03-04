const SEC_HAND = document.getElementById('sec');
const MINUTE_HAND = document.getElementById('minute');
const HOUR_HAND = document.getElementById('hour');
const PENDULUM = document.getElementById('pendulum');

const SEC_MIN_DEGREE = 6;
const HOUR_DEGREE = 30;
const MAX_PENDULUM_DEGREE = 30;

//Time
let minute = 0;
let hour = 0;

//Pendulum
let pendulumDeg = 0;
let direction = 0;

const rotateHand = (element, deg) => {
    element.style.transform = 'translate(-50%) rotate(' + deg + 'deg)';
};

const init = () => {
    let d = new Date();
    minute = d.getMinutes();
    hour = d.getHours();

    moveHourHand();
    rotateHand(MINUTE_HAND, SEC_MIN_DEGREE * d.getMinutes());
    rotateHand(SEC_HAND, SEC_MIN_DEGREE * d.getSeconds());
};

const checkChange = () => {
    let d = new Date();
    if (d.getMinutes() != minute) {
        rotateHand(MINUTE_HAND, SEC_MIN_DEGREE * d.getMinutes());
        moveHourHand();
    }
};

const moveHourHand = () => {
    let d = new Date();
    let deg = HOUR_DEGREE * d.getHours() + d.getMinutes() / 2;
    rotateHand(HOUR_HAND, deg);
};

const movePendulum = () => {
    if (direction == 0) {
        pendulumDeg++;
    } else {
        pendulumDeg--;
    }

    PENDULUM.style.transform = 'translate(-50%) rotate(' + pendulumDeg + 'deg)';

    if (pendulumDeg == 30) {
        direction = 1;
    }

    if (pendulumDeg == -30) {
        direction = 0;
    }
};

let video_deg = 0;
let rotating = true;
let vid = document.getElementById('rot-video');

const rotateVideo = () => {
    if (rotating) {
        vid.style.transform = 'rotate(' + video_deg + 'deg)';
        video_deg++;
    }
};

const toggleRotate = () => {
    rotating = !rotating;
    console.log('Kek');
};

document.addEventListener('keydown', function(event) {
    if (event.keyCode == 80) {
        toggleRotate();
    }
});

// Setup
init();

// Running code
setInterval(function() {
    let d = new Date();
    rotateHand(SEC_HAND, SEC_MIN_DEGREE * d.getSeconds());
    checkChange();
}, 100);

setInterval(function() {
    movePendulum();
}, 20);

// Video rotate
setInterval(() => {
    rotateVideo();
}, 20);
