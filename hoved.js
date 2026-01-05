const hamburgerIcon = document.querySelector(".dropdown");
const titleMain = document.querySelector(".titlemain");

function grayScale100() {
  titleMain.style.filter = "grayscale(100%)";
}
function grayScale0() {
  titleMain.style.filter = "grayscale(0%)";
}
//hamburgerIcon.addEventListener("mouseover", myFunction);

if (hamburgerIcon.matches(":hover")) {
  grayScale100();
} else {
  grayScale0();
}
