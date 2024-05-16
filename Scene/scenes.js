// const playPauseButton = document.getElementById("playPauseButton");
// const videoElement = document.getElementById("videoElement");
// const audioElement = document.getElementById("audioElement");
// const twoMin = document.getElementById("two-min");
// const fiveMin = document.getElementById("five-min");
// const tenMin = document.getElementById("ten-min");
// const timerDisplay = document.getElementById("timerDisplay");

// let timer;

// function playPause() {
//   if (videoElement.paused) {
//     videoElement.play();
//     audioElement.play(); // Start playing audio
//     playPauseButton.classList.remove("fa-play");
//     playPauseButton.classList.add("fa-pause");
//     timer = setInterval(function () {
//       const durationParts = timerDisplay.textContent.split(":");
//       let durationMinutes = parseInt(durationParts[0]);
//       let durationSeconds = parseInt(durationParts[1]);

//       if (durationSeconds > 0) {
//         durationSeconds--;
//       } else if (durationMinutes > 0) {
//         durationMinutes--;
//         durationSeconds = 59;
//       } else {
//         videoElement.pause();
//         audioElement.pause(); // Pause audio
//         clearInterval(timer);
//         playPauseButton.classList.remove("fa-pause");
//         playPauseButton.classList.add("fa-play");
//         return;
//       }

//       timerDisplay.textContent = `${durationMinutes}:${
//         durationSeconds < 10 ? "0" : ""
//       }${durationSeconds}`;
//     }, 1000);
//   } else {
//     videoElement.pause();
//     audioElement.pause(); // Pause audio
//     playPauseButton.classList.remove("fa-pause");
//     playPauseButton.classList.add("fa-play");
//     clearInterval(timer);
//   }
// }

// function setDuration(minutes) {
//   clearTimeout(timer);
//   timerDisplay.textContent = minutes + ":00";
// }

// playPauseButton.addEventListener("click", () => {
//   playPause();
// });

// twoMin.addEventListener("click", () => {
//   setDuration(2);
// });

// fiveMin.addEventListener("click", () => {
//   setDuration(5);
// });

// tenMin.addEventListener("click", () => {
//   setDuration(10);
// });

// videoAudio.js

// Function to handle play/pause functionality
function playPause(videoElement, audioElement, playPauseButton, timerDisplay) {
  if (videoElement.paused) {
    videoElement.play();
    audioElement.play(); // Start playing audio
    playPauseButton.classList.remove("fa-play");
    playPauseButton.classList.add("fa-pause");
    timer = setInterval(function () {
      const durationParts = timerDisplay.textContent.split(":");
      let durationMinutes = parseInt(durationParts[0]);
      let durationSeconds = parseInt(durationParts[1]);

      if (durationSeconds > 0) {
        durationSeconds--;
      } else if (durationMinutes > 0) {
        durationMinutes--;
        durationSeconds = 59;
      } else {
        videoElement.pause();
        audioElement.pause(); // Pause audio
        clearInterval(timer);
        playPauseButton.classList.remove("fa-pause");
        playPauseButton.classList.add("fa-play");
        return;
      }

      timerDisplay.textContent = `${durationMinutes}:${
        durationSeconds < 10 ? "0" : ""
      }${durationSeconds}`;
    }, 1000);
  } else {
    videoElement.pause();
    audioElement.pause(); // Pause audio
    playPauseButton.classList.remove("fa-pause");
    playPauseButton.classList.add("fa-play");
    clearInterval(timer);
  }
}

// Function to set duration
function setDuration(videoElement, timerDisplay, minutes) {
  clearInterval(timer);
  videoElement.pause();
  timerDisplay.textContent = minutes + ":00";
}

// Event listeners
document.addEventListener("DOMContentLoaded", function () {
  const playPauseButton = document.getElementById("playPauseButton");
  const videoElement = document.getElementById("videoElement");
  const audioElement = document.getElementById("audioElement");
  const twoMin = document.getElementById("two-min");
  const fiveMin = document.getElementById("five-min");
  const tenMin = document.getElementById("ten-min");
  const timerDisplay = document.getElementById("timerDisplay");
  let timer;

  playPauseButton.addEventListener("click", () => {
    playPause(videoElement, audioElement, playPauseButton, timerDisplay);
  });

  twoMin.addEventListener("click", () => {
    setDuration(videoElement, timerDisplay, 2);
  });

  fiveMin.addEventListener("click", () => {
    setDuration(videoElement, timerDisplay, 5);
  });

  tenMin.addEventListener("click", () => {
    setDuration(videoElement, timerDisplay, 10);
  });
});
