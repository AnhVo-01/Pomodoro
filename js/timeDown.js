var titleShow = document.title;
var resetBtn = document.getElementById("reset-btn");
var timerBtn = document.getElementsByName("timer");

var display = document.querySelector(".timer--part");

var interval = null;
var timer = 1500;

const interfaceTime = () => {
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
};

function start() {
    if (timer === 0) return;

    interval = setInterval(() => {
        timer--;
        interfaceTime();
        document.title = titleShow;

        if (timer === 0) {
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
interfaceTime();
resetBtn.onclick = () => {
    stop();
    interval = null;
    timer = 1500;
    interfaceTime();
    document.title = titleShow;
};

function pomodoroTimer() {
    var x = document.getElementById("pomo-time");
    timer = 60 * x.value;
    interfaceTime();
    document.title = titleShow;
    
    start();
    stop();

    resetBtn.onclick = () => {
        stop();
        interval = null;
        timer = 1500;
        interfaceTime();
        document.title = titleShow;
    };
};

// ----- Short Break --------------------------------------------------------
function shortTimer(){
    stop();
    var x = document.getElementById("short-time");
    timer = 60 * x.value;
    interfaceTime();
    start();

    resetBtn.onclick = () => {
        stop();
        interval = null;
        timer = 60 * x.value;
        interfaceTime();
        document.title = titleShow;
    };
};

// ----- Long Break --------------------------------------------------------
function longTimer(){
    stop();
    var x = document.getElementById("long-time");
    timer = 60 * x.value;
    interfaceTime();
    start();

    resetBtn.onclick = () => {
        stop();
        interval = null;
        timer = 60 * x.value;
        interfaceTime();
        document.title = titleShow;
    };
};            