document.addEventListener('DOMContentLoaded', function() {
  document.body.addEventListener('click', function(event) {
    if (event.target.classList.contains('fullscreenable')) {
      if (document.fullscreenElement) {
        document.exitFullscreen();
        event.target.style.objectFit = 'cover'; // Reset to cover on exit
      } else {
        event.target.requestFullscreen();
        event.target.style.objectFit = 'contain'; // Change to contain on enter
      }
    }
  });
});
