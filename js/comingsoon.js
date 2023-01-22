$(document).ready(() => {
    var countDownDate = new Date("Jan 22, 2023 00:01").getTime();
    
    // Update the count down every 1 second
    var countDownFunction = setInterval(function() {
        var now = new Date().getTime(); // Get todays date and time
    
        var distance = countDownDate - now; // Find the distance between now an the count down date
        
        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
        // Output the result in an element with id="count-time"
        $("#days").html(days);
        $("#hours").html(hours);
        $("#minutes").html(minutes);
      
        // If the count down is over, write some text 
        if (distance < 0) {
            clearInterval(countDownFunction);
            $(".tmtxcontainer").toggleClass("tmtxcontainerEXPIRED");
            $(".tmtxcontainer").html("EXPIRED");
        }
    }, 1000);
})



// Get the modal
var csClose = document.getElementById("coming-soon");
function closeEvent() {
    csClose.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == csClose) {
        csClose.style.display = "none";
    }
}