function playMusic() {
    const music = document.getElementById('birthdayMusic');
    music.play();
  }
  setTimeout(function() {
    document.body.classList.remove('loaded');
  }, 5000); // Close the curtain after 5 seconds
  