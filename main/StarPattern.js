let star = '';
for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= i; j++) {
    star = star + '🌻 ';
  }
  star = star + '\n';
}
console.log(star);
document.querySelector('#container').innerText = star;

 function goHome() {
    window.history.back();
  }
