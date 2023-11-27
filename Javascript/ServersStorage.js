document.getElementById("clickVideo").addEventListener("click", function () {
  var video = document.getElementById("clickVideo");
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
});
