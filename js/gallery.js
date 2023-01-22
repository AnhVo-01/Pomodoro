const xhttp = new XMLHttpRequest();
xhttp.onload = function () {
    myFunction(this)
};
xhttp.open("GET", "getAllImage.xml", true);
xhttp.send();

function myFunction(xml) {
    const xmlDoc = xml.responseXML;
    const x = xmlDoc.getElementsByTagName("IMG");
    const allChild = xmlDoc.getElementsByTagName("CHILD");
    
    let list = "";
    let slideShow = "";

    for (let i = 0; i < x.length; i++) {
        list += '<div class="version"> \n' +
                    '<h4>' + x[i].getElementsByTagName("VERSION")[0].childNodes[0].nodeValue + '</h4> \n <hr> \n' + 
                '</div> \n' +
                '<div class="row"> \n';
        
        var y = x[i].getElementsByTagName("CHILD");
        
        for (let j = 0; j < y.length; j++) {
            list += '<div class="column"> \n' +
                    '<img src="images/gallery/'+ y[j].children[1].textContent +'" style="width:100%" onclick="openModal();currentSlide(' + y[j].children[0].textContent + ')" class="hover-shadow cursor"> \n' +
                    '</div>';

            slideShow += '<div class="mySlides"> \n ' +
                        '<div class="numbertext"> \n' + 
                            '<span id="total">'+ y[j].children[0].textContent + ' / ' + allChild.length +'</span> \n' +
                        '</div> \n' +
                        '<img src="images/gallery/'+y[j].children[1].textContent+'" style="width:100%"> \n' +
                    '</div>'; 
        }
        list += "</div>";
    }
    document.getElementById("listNode").innerHTML = list;
    document.getElementById("slides").innerHTML = slideShow;
}

function openModal() {
    document.getElementById("myModal").style.display = "block";
}

function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

// var slideIndex = 1;
// showSlides(slideIndex);

function plusSlides(n) {
    showSlides((slideIndex += n));
}

function currentSlide(n) {
    showSlides((slideIndex = n));
}

function showSlides(n) {
    var slides = document.getElementsByClassName("mySlides");
    // var captionText = document.getElementById("caption");

    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
    // captionText.innerHTML = dots[slideIndex-1].alt;
}
