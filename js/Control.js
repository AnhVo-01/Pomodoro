// Get the modal
var modal = document.getElementById("myModal");
var csClose = document.getElementById("coming-soon");
var vs = document.getElementById("version");
var about = document.getElementById("about");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");
var btn1 = document.getElementById("myBtn1");
var btn2 = document.getElementById("myBtn2");
var btns = document.getElementById("save");

// Get the <span> element that closes the modal
var span = document.getElementById("close-set");
var spanE = document.getElementById("close-event");


// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

btn1.onclick = function() {
    vs.style.display = "block";
}

btn2.onclick = function() {
    about.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}
spanE.onclick = function() {
    csClose.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
    else if (event.target == about) {
        about.style.display = "none";
    }else if (event.target == vs) {
        vs.style.display = "none";
    }
}