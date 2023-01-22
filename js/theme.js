// var settingsmenu = document.querySelector(".settings-menu");

// function settingsMenuToggle(){
//     settingsmenu.classList.toggle("settings-menu-height");
// }
function reset(){
    if(localStorage.getItem("theme") == "dark"){
        $('#dark-btn').toggleClass("dark-btn-on");
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

$(document).ready(() => {
    $('#dark-btn').click(() => {
        $('#dark-btn').toggleClass("dark-btn-on");
        document.body.classList.toggle("dark-theme");
    
        if(localStorage.getItem("theme") == "light"){
            localStorage.setItem("theme", "dark");
        }else{
            localStorage.setItem("theme", "light");
        }

    });

    if(localStorage.getItem("theme") == "light"){
        $('#dark-btn').remove(".dark-btn-on");
        document.body.classList.remove("dark-theme");
    }
    else if(localStorage.getItem("theme") == "dark"){
        $('#dark-btn').add(".dark-btn-on");
        document.body.classList.add("dark-theme");
    }
    else{
        localStorage.setItem("theme", "light");
    }
});


function target(){
    const tarGet = window.sessionStorage.getItem("target");
    console.log(tarGet);
    document.getElementById(tarGet).classList.add("active");
}