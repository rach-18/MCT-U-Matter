document.getElementById("playPauseButton").addEventListener("click", function() {
    var play = document.getElementById("playPauseButton");
    var text = document.getElementById("relax-text");
    var circle = document.querySelector(".circle");
    var innerCircle = document.querySelector(".inner-circle");

    play.style.display = "none";
    circle.classList.add("circle-animation");
    innerCircle.classList.add("inner-circle-animation");

    function changeText() {
        text.innerText = "Breathe In!";
        text.style.color = "#1A4D2E";
        setTimeout(() => {
            text.innerText = "Hold";
            text.style.color = "#E3EC8B";
            setTimeout(() => {
                text.innerText = "Breathe Out!";
                text.style.color = "#ACE1AF";
                setTimeout(changeText, 3000); // Repeat every 2.5 seconds
            }, 1500); // "Hold" for 1.5 seconds
        }, 3000); // "Breathe In" for 3 seconds
    }

    changeText(); // Start the text change sequence
});
