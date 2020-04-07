const musicUrl = './assets/track1.mp3';
const musicPlayer = new Audio();

const prepareMusic = () => {
    musicPlayer.addEventListener('canplay', showInfo);
    musicPlayer.addEventListener('canplaythrough', canStart);
    musicPlayer.addEventListener('durationchange', showInfo);
    musicPlayer.src = musicUrl;
    document
        .getElementById('volume-slider')
        .addEventListener('input', changeVolume);
    document
        .getElementById('speed-slider')
        .addEventListener('input', changeSpeed);
};

const canStart = () => {
    musicPlayer.addEventListener('canplaythrough', canStart);
    document.getElementById('music-btn').addEventListener('click', playMusic);
    document.getElementById('music-btn').innerHTML = 'Play';
    document.getElementById('forward-btn').addEventListener('click', musicSeek);
};

const playMusic = () => {
    if (musicPlayer.paused) {
        musicPlayer.addEventListener('timeupdate', showInfo);
        musicPlayer.play();
        document.getElementById('music-btn').innerHTML = 'Pause';
    } else {
        musicPlayer.pause();
        musicPlayer.removeEventListener('timeupdate', showInfo);
        document.getElementById('music-btn').innerHTML = 'Play';
    }
};

const musicSeek = () => {
    if (musicPlayer.currentTime + 10 < musicPlayer.duration) {
        musicPlayer.currentTime += 10;
        if (musicPlayer.paused) {
            document.getElementById('music-btn').innerHTML = 'Pause';
        } else {
            document.getElementById('music-btn').innerHTML = 'Play';
        }
    }
};

const changeVolume = () => {
    musicPlayer.volume = document.getElementById('volume-slider').value;
};

const changeSpeed = () => {
    musicPlayer.playbackRate = document.getElementById('speed-slider').value;
};

const showInfo = e => {
    if (e.type == 'canplay') {
        console.log('Can play');
    } else if (e.type == 'durationchange') {
        console.log('Duration change' + e.target.duration);
    } else if (e.type == 'timeupdate') {
        document.getElementById('music-pos').innerHTML = e.target.currentTime;
    }
};

// Kell
const clockSoundsURL = './assets/clocksounds/';
const timeSpeaker = new Audio();
const clockAudio = new Audio();
let index = 0;
let timeWords = [];

const prepareTellTime = () => {
    document.getElementById('speak-btn').addEventListener('click', tellTime);
};

const tellTime = () => {
    document.getElementById('speak-btn').disabled = true;
    let d = new Date();
    if (d.getMinutes() == 0) {
        timeWords.push('kellon');
        timeWords.push('täpselt');
        numToWords(d.getHours());
    } else {
        timeWords.push('kellon');
        let d = new Date();
        numToWords(d.getHours());
        timeWords.push('ja');
        numToWords(d.getMinutes());
        timeWords.push('minutit');
    }

    timeSpeaker.addEventListener('ended', speakTime);
    speakTime();

    console.log(timeWords);
};

const speakTime = () => {
    if (timeWords.length > 0 && index < timeWords.length) {
        timeSpeaker.src = clockSoundsURL + timeWords[index] + '.mp3';
        timeSpeaker.play();
        index++;
    } else {
        timeSpeaker.removeEventListener('ended', speakTime);
        timeWords = [];
        index = 0;
        document.getElementById('speak-btn').disabled = false;
    }
};

const numToWords = val => {
    if (val <= 10) {
        timeWords.push(val);
    } else {
        let tens = Math.floor(val / 10);
        let ones = val % 10;
        if (val < 20) {
            timeWords.push(ones);
            timeWords.push('teist');
        } else {
            timeWords.push(tens);
            timeWords.push('kymmend');
            if (ones > 0) {
                timeWords.push(ones);
            }
        }
    }
};

const bingBong = () => {
    let d = new Date();
    if (document.getElementById('chk-sound').checked == true) {
        if (d.getMinutes() == 0 && d.getSeconds() == 0) {
            clockAudio.src = clockSoundsURL + 'kell.mp3';
            clockAudio.play();
        }
    }
};

setInterval(() => {
    bingBong();
}, 1000);
