const time_el = document.querySelector('.time-counter'),
    start_btn = document.getElementById('start'),
    stop_btn = document.getElementById('stop'),
    reset_btn = document.getElementById('reset');

let seconds = 0;
let spw_interval = null;

start_btn.addEventListener('click', start);
stop_btn.addEventListener('click', stop);
reset_btn.addEventListener('click', reset);

function timer () {
    seconds++;

    let hrs = Math.floor(seconds / 3600);
    let mins = Math.floor((seconds - (hrs * 3600)) / 60);
    let secs = seconds % 60;


    if(secs < 10) secs = '0' + secs;
    if(mins < 10) mins = '0' + mins;
    if(hrs < 10) hrs = '0' + hrs;

    time_el.textContent = `${hrs}:${mins}:${secs}`;
}

function start(){
    if(spw_interval){
        return
    }

    spw_interval = setInterval(timer, 1000);
}

function stop(){
    clearInterval(spw_interval);
    spw_interval = null;
}

function reset(){
    stop();
    seconds = 0;
    time_el.textContent = '00:00:00';
}