function flipHam() {
  const first = document.getElementById("first");
  first.classList.toggle("rotate-right");
  document.getElementById("second").classList.toggle("rotate-left");
}
document.getElementById("hamburger").addEventListener("click", flipHam);

document.getElementById("hamburger").addEventListener("click", showHideMenu);
document.getElementById("hide").addEventListener("click", showHideMenu);

function showHideMenu() {
  document.getElementById("menuid").classList.toggle("hide");
}

