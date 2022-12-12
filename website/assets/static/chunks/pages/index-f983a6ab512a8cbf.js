const ifram = document.getElementById('iframe_map');
const blockAbout = document.getElementById('blockAbout');
const mark = document.getElementById('mark');

function on() {
    ifram.style.display = 'block';
    ifram.style.width = '57rem';
    ifram.style.height = '50vh';
    ifram.style.position = 'relative';
    ifram.style.right = '8rem'
    blockAbout.style.display = 'none';
    mark.style.display = 'block';
}

function off() {
    ifram.style.display = 'none';
    blockAbout.style.display = 'block';
    mark.style.display = 'none';
}