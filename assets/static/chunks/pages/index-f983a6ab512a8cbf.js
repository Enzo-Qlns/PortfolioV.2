const ifram = document.getElementById('iframe_map');
const blockAbout = document.getElementById('blockAbout');

ifram.style.display = 'none';
ifram.style.filter = 'contrast(129%) brightness(103%) saturate(106%) sepia(7%) grayscale(100%) invert(100%)';

function on() {
    ifram.style.display = 'block';
    ifram.style.width = '57rem';
    ifram.style.height = '50vh';
    ifram.style.position = 'relative';
    ifram.style.right = '8rem'
    ifram.style.transition = 'transition: width 1s 0s ease-in;';
    blockAbout.style.display = 'none';
}

function off() {
    ifram.style.display = 'none';
    blockAbout.style.display = 'block';
}
