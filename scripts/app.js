
//DOM for minutes
const timerCount = document.getElementById('timerCount');
//DOM for start/stop button
const timerToggle = document.getElementById('countdown');

//function for the pomodoro timer



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
    },1000);
};

//setInterval(timer, 1000);
//Event listener for timerToggle
let timerID = null;
timerToggle.addEventListener('click', () => {
    if (timerID == null){
        let duration;
        duration = 25;
        const durationMS = new Date().getTime() + (duration * 60 * 1000);
        timerID = timer(durationMS);
        timerToggle.textContent = "Stop"
    } else if (timerID != null){
        clearInterval(timerID);
        timerID = null;
        timerToggle.textContent = "Start";
    }
});




/*timerToggle.addEventListener('click', () => {
    if (timerID == null){
        timerID = setInterval(function() {
    const currentDate = new Date().getTime();
    const distance = durationMS - currentDate;

    let minutes = Math.floor(distance/1000/60) % 60;
    let seconds = Math.floor(distance/1000) % 60;

    console.log(minutes + ":" + seconds);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    
    timerCount.innerHTML = minutes + ':' + seconds
}, 1000);
        timerToggle.textContent = "Stop"
    } else if (timerID != null){
        clearInterval(timerID);
        timerID = null;
        timerToggle.textContent = "Start";
    }
});*/

