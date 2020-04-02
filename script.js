const MIN_IMG_NUM = 1;
const MAX_IMG_NUM = 43;
const IMG_PATH = 'http://greeny.cs.tlu.ee/~rinde/media/photos/TLU_600x400/';
const IMG_PRE = 'tlu_';
const IMG_EXT = '.jpg';

window.onload = function() {
    /* let name = window.prompt('Mis su nimi on?');
    putName(name); */
    randomImg();
    document.getElementById('tlu-pic').addEventListener('click', randomImg);
    // eslint-disable-next-line no-undef
    prepareMusic();
    // eslint-disable-next-line no-undef
    prepareTellTime();
};

const putName = name => {
    if (name != '' || name != null) {
        document.getElementById('name-space').innerHTML = 'Tere, ' + name;
    } else {
        document.getElementById('name-space').innerHTML = 'Tere, külaline';
    }
};

const randomImg = () => {
    let r = Math.floor(Math.random() * MAX_IMG_NUM) + MIN_IMG_NUM;
    putImg(r);
};

const putImg = num => {
    document.getElementById('tlu-pic').src = IMG_PATH + IMG_PRE + num + IMG_EXT;
};
