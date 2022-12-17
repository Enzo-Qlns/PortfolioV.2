const ifram = document.getElementById("iframe_map");
const blockAbout = document.getElementById("blockAbout");
const skills = document.getElementById("skills");

if (!isMobileDevice()) {
  document.getElementById("night").style.left = "43vh";
  document.getElementById("place").style.cursor = "pointer";
  document.getElementById("place").setAttribute("onclick", "on()");
}

const individualSkills = document.querySelectorAll("#individualSkills");

$(ifram).mouseleave(function () {
  $(this).css("display", "none");
  blockAbout.style.display = "block";
  skills.style.visibility = "visible";
});

function on() {
  ifram.style.display = "block";
  blockAbout.style.display = "none";
  skills.style.visibility = "hidden";
}
