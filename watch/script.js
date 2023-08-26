let imgTag = document.querySelector('#watch');
function Blue() { imgTag.src = 'https://i.imgur.com/Mplj1YR.png';}
function Black() { imgTag.src = 'https://i.imgur.com/iOeUBV7.png' }
function Red() { imgTag.src = 'https://i.imgur.com/PTgQlim.png' }
function Pink() { imgTag.src = 'https://i.imgur.com/Zygu7I3.png' }
function Purple() { imgTag.src = 'https://i.imgur.com/xSIK4M8.png' }

function heartRate() {
  document.querySelector("#screen").innerHTML = `<img src="https://c.tenor.com/ATSL4BeIh-YAAAAC/heart-pulse-rate.gif" width='100%' >`;
  clearTimeout(timeout);
}

let time = () => {
  displayClock();
}

window.onload = displayClock();
function displayClock(){
  var display = new Date().toLocaleTimeString();
  document.querySelector("#screen").style.color = 'white';
  document.querySelector("#screen").style.display = "grid";
  document.querySelector("#screen").style.justifyContent = 'center';
  document.querySelector("#screen").style.alignItems = 'center';
  document.querySelector("#screen").innerHTML = display;
  timeout = setTimeout(displayClock, 1000); 
}

 function goHome() {
    window.history.back();
  }