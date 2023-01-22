$(window).on("load", function () {
    const element = document.getElementById("myBar"),
        welCome = document.getElementById("wel-page");

    var csDate = new Date("Jan 22, 2023 00:01").getTime();
    var Now = new Date().getTime();
    var EXPIRED = csDate - Now;

    let width = 0;
    const id = setInterval(frame, 10);
    function frame() {
        if (width === 100) {
            clearInterval(id);
            welCome.style.display = "none";

            if (EXPIRED > -432000000) {
                document.getElementById("coming-soon").style.display = "block";
            }
        } else {
            width++;
            element.style.width = width + "%";
        }
    }

    includeHTML();
});
