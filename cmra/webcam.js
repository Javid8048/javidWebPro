document.addEventListener("DOMContentLoaded", () => {
  let but = document.querySelector("#but");
  let video = document.querySelector("#vid");
  let mediaDevice = navigator.mediaDevices;
  vid.muted = true;
  but.addEventListener("click", () => {
    mediaDevice.getUserMedia({
      video: true,
      audio: true,
    })
      .then((stream) => {
        video.srcObject = stream;
        video.addEventListener("loadedmetadata", () => {
          video.play();
        });
      })
      .catch(alert);
  });
});

 function goHome() {
    windows.history.back();
  }
