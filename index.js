document.addEventListener('DOMContentLoaded', function() {
  document.body.addEventListener('click', function(event) {
    if (event.target.classList.contains('fullscreenable')) {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        event.target.requestFullscreen();
      }
    }
  });
});
