const svgElement = document.querySelector('#my-svg');
const body = document.body;


const sun = document.querySelector(".sun")

function toggled() {
  sun.classList.toggle("on");
  body.classList.toggle("body2")
}

function backToHome() {
  window.history.back();
}