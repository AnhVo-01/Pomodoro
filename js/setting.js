var shortT = document.getElementById("short-time"),
    longT = document.getElementById("long-time"),
    pomodoro = document.getElementById("pomo-time");

function save(e){
    localStorage.setItem("short-break", shortT.value);
    localStorage.setItem("long-break", longT.value);
    localStorage.setItem("pomodoro", pomodoro.value);

    e.setAttribute("data-bs-dismiss", "modal");

    shortT.value = localStorage.getItem("short-break");
    longT.value = localStorage.getItem("long-break");
    pomodoro.value = localStorage.getItem("pomodoro");
}

// -------------------------------------------------------------------
if(localStorage.getItem("short-break") != shortT.value){
    shortT.value = localStorage.getItem("short-break");
}
else{
    shortT.value = 5;
    localStorage.setItem("short-break", shortT.value);
}

// -------------------------------------------------------------------
if(localStorage.getItem("long-break") != longT.value){
    longT.value = localStorage.getItem("long-break");
}
else{
    longT.value = 10;
    localStorage.setItem("long-break", longT.value);
}

// -------------------------------------------------------------------
if(localStorage.getItem("pomodoro") != pomodoro.value){
    pomodoro.value = localStorage.getItem("pomodoro");
}
else{
    pomodoro.value = 25;
    localStorage.setItem("pomodoro", pomodoro.value);
}