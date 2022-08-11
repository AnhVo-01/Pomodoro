var shortT = document.getElementById("short-time"),
    longT = document.getElementById("long-time"),
    pomodoro = document.getElementById("pomo-time");

function save(){
    localStorage.setItem("short-break", shortT.value);
    localStorage.setItem("long-break", longT.value);
    localStorage.setItem("pomodoro", pomodoro.value);

    document.getElementById("myModal").style.display = "none";
    shortT.value = localStorage.getItem("short-break");
    longT.value = localStorage.getItem("long-break");
    pomodoro.value = localStorage.getItem("pomodoro");
}

// -------------------------------------------------------------------
if(shortT.value == 5){
    localStorage.setItem("short-break", shortT.value);
}else if(localStorage.getItem("short-break") != shortT.value){
    shortT.value = localStorage.getItem("short-break");
}else{
    shortT.value = 5;
    localStorage.setItem("short-break", shortT.value);
}

// -------------------------------------------------------------------
if(longT.value == 10){
    localStorage.setItem("long-break", longT.value);
}else if(localStorage.getItem("long-break") != longT.value){
    longT.value = localStorage.getItem("long-break");
}else{
    longT.value = 10;
    localStorage.setItem("long-break", longT.value);
}

// -------------------------------------------------------------------
if(pomodoro.value = 25){
    localStorage.setItem("pomodoro", pomodoro.value);
}else if(localStorage.getItem("pomodoro") != pomodoro.value){
    pomodoro.value = localStorage.getItem("pomodoro");
}else{
    pomodoro.value = 25;
    localStorage.setItem("pomodoro", pomodoro.value);
}