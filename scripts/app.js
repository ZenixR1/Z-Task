
//DOM for minutes
const timerCount = document.getElementById('timerCount');
//DOM for start/stop button
const timerToggle = document.getElementById('countdown');

//function for the pomodoro timer

let duration;
duration = 25;

function timer (durationInMinutes) {
    return setInterval (() => {
        const currentDate = new Date().getTime();
        const distance = durationInMinutes - currentDate;

        let minutes = Math.floor(distance/1000/60) % 60;
        let seconds = Math.floor(distance/1000) % 60;

        //console.log(minutes + ":" + seconds);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        
        timerCount.innerHTML = minutes + ':' + seconds

        if (distance < 0){
            clearInterval();
            timerCount.innerHTML = "05:00";
            timerID = null;
            timerToggle.textContent = "Start";
        }
    },1000);
};

//Event listener for timerToggle
let timerID = null;
let isPaused = false;
let pausedTime = "";

timerToggle.addEventListener('click', () => {
    if (timerID == null){
        const durationMS = new Date().getTime() + (duration * 60 * 1000);
        timerID = timer(durationMS);
        timerToggle.textContent = "Stop"
    } else if (timerID != null && timerToggle.textContent === "Stop"){
        isPaused = true;
        pausedTime = timerCount.innerHTML;
        timerID != null;
        clearInterval(timerID);
        timerToggle.textContent = "Resume";
    } else if (timerID != null && timerToggle.textContent === "Resume"){
        isPaused = false;
        const timeParts = pausedTime.split(':');
        const minutesLeft = parseInt(timeParts[0]);
        const secondsLeft = parseInt(timeParts[1]);
        const durationMS = new Date().getTime() + (minutesLeft * 60 * 1000) + (secondsLeft * 1000);
        timerID = timer(durationMS);
        timerToggle.textContent = "Stop";
    } 
});


