const AllimgProjects = document.getElementById('imgProjects');

for (i = 0; i < 2; i++) {
    if (isMobileDevice()) {
        AllimgProjects.children[i].children[0].children[0].children[0].style.display = 'none';
    }
}