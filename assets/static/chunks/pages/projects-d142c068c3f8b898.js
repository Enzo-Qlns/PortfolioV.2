function isMobileDevice() {
    if (navigator.userAgent.match(/iPhone/i)
        || navigator.userAgent.match(/webOS/i)
        || navigator.userAgent.match(/Android/i)
        || navigator.userAgent.match(/iPad/i)
        || navigator.userAgent.match(/iPod/i)
        || navigator.userAgent.match(/BlackBerry/i)
        || navigator.userAgent.match(/Windows Phone/i)
    ) {
        return true;
    }
    else {
        return false;
    }
}

const AllimgProjects = document.getElementById('imgProjects');

for (i = 0; i < 2; i++) {
    if (isMobileDevice()) {
        AllimgProjects.children[i].children[0].children[0].children[0].style.display = 'none';
    }
}