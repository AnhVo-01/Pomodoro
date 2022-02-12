var countDownDate = new Date("Feb 14, 2022 00:01").getTime();
var timeDisplay = document.querySelector(".tmtxcontainer");

// Update the count down every 1 second
var countdownfunction = setInterval(function() {
    var now = new Date().getTime(); // Get todays date and time

    var distance = countDownDate - now; // Find the distance between now an the count down date
    
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
    // Output the result in an element with id="count-time"
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
  
    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(countdownfunction);
        timeDisplay.classList.toggle("tmtxcontainerEXPIRED");
        timeDisplay.innerHTML = "EXPIRED";
    }
}, 1000);