const video = document.getElementById('myVideo');
const playPauseBtn = document.getElementById('playPauseBtn');
const backBtn = document.getElementById('backBtn');
const forwardBtn = document.getElementById('forwardBtn');

// Play / Pause button
playPauseBtn.addEventListener('click', () => {
  if (video.paused) {
    video.play();
    playPauseBtn.textContent = 'Pause';
  } else {
    video.pause();
    playPauseBtn.textContent = 'Play';
  }
});

// Back button (rewind 5 seconds)
backBtn.addEventListener('click', () => {
  video.currentTime = Math.max(video.currentTime - 5, 0);
});

// Forward button (skip 5 seconds)
forwardBtn.addEventListener('click', () => {
  video.currentTime = Math.min(video.currentTime + 5, video.duration);
});