// var saveBtn = document.getElementById("save-btn");
var titleShow = document.title;
var resetBtn = document.getElementById("reset-btn");
var timerBtn = document.getElementsByName("timer");

var display = document.querySelector(".timer--part");

var interval = null;
var inputMinutes = 1500;

const interfaceTime = (timer) => {
    var minutes, seconds;

    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.innerHTML = `<div class="timer-num">${minutes}:${seconds}</div>`;
    titleShow = minutes + ':' + seconds +  ' - TomatoTM';
};

function stop() {
    clearInterval(interval);
    interval = null;
};

function start() {
    if (inputMinutes === 0) return;

    interval = setInterval(() => {
        inputMinutes--;
        interfaceTime(inputMinutes);
        document.title = titleShow;

        if (inputMinutes === 0) {
            stop();

            var sound = document.getElementById("myAudio");
            if (sound.canPlayType("audio/mpeg")) {
                sound.setAttribute("src","audio/Alarm-clock-bell.mp3");
                sound.play();
                sound.volume = 0.5;
            }
        }
    }, 1000);
};

// ----- Pomodoro ----------------------------------------------------------
interfaceTime(inputMinutes);
resetBtn.onclick = () => {
    stop();
    interval = null;
    inputMinutes = 1500;
    interfaceTime(inputMinutes);
    document.title = titleShow;
};

function pomodoroTimer() {
    var p = document.getElementById("pomo-time");
    inputMinutes = 60 * p.value;
    interfaceTime(inputMinutes);
    document.title = titleShow;
    
    stop();
    start();
    resetBtn.onclick = () => {
        stop();
        interval = null;
        inputMinutes = 60 * p.value;
        interfaceTime(inputMinutes);
        document.title = titleShow;
    };
};

// ----- Short Break --------------------------------------------------------
function shortTimer(){
    var s = document.getElementById("short-time");
    inputMinutes = 60 * s.value;
    interfaceTime(inputMinutes);

    stop();
    start();
    resetBtn.onclick = () => {
        stop();
        interval = null;
        inputMinutes = 60 * s.value;
        interfaceTime(inputMinutes);
        document.title = titleShow;
    };
};

// ----- Long Break --------------------------------------------------------
function longTimer(){
    var l = document.getElementById("long-time");
    inputMinutes = 60 * l.value;
    interfaceTime(inputMinutes);

    stop();
    start();
    resetBtn.onclick = () => {
        stop();
        interval = null;
        inputMinutes = 60 * l.value;
        interfaceTime(inputMinutes);
        document.title = titleShow;
    };
};