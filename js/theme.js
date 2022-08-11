// var settingsmenu = document.querySelector(".settings-menu");
var darkBtn = document.getElementById("dark-btn");
var reBtn = document.getElementById("re-btn");

// function settingsMenuToggle(){
//     settingsmenu.classList.toggle("settings-menu-height");
// }
reBtn.onclick = function(){
    if(localStorage.getItem("theme") == "dark"){
        darkBtn.classList.toggle("dark-btn-on");
        document.body.classList.toggle("dark-theme");

        localStorage.setItem("theme", "light");
    }

    shortT.value = 5;
    longT.value = 10;
    pomodoro.value = 25;

    localStorage.setItem("short-break", shortT.value);
    localStorage.setItem("long-break", longT.value);
    localStorage.setItem("pomodoro", pomodoro.value);
}

darkBtn.onclick = function(){
    darkBtn.classList.toggle("dark-btn-on");
    document.body.classList.toggle("dark-theme");

    if(localStorage.getItem("theme") == "light"){
        localStorage.setItem("theme", "dark");
    }
    else{
        localStorage.setItem("theme", "light");
    }
}

if(localStorage.getItem("theme") == "light"){
    darkBtn.classList.remove("dark-btn-on");
    document.body.classList.remove("dark-theme");
}
else if(localStorage.getItem("theme") == "dark"){
    darkBtn.classList.add("dark-btn-on");
    document.body.classList.add("dark-theme");
}
else{
    localStorage.setItem("theme", "light");
}