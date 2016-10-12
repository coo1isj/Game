$(document).ready(function () {
    var startTop = $('#attack').css("top");
    var isMoving = false;
    document.getElementById("attbtn2").style.visibility = "hidden";
    document.getElementById("attp").style.visibility = "hidden";
    document.getElementById("attpbox").style.visibility = "hidden";
});

function attMove() {
    $('#attack').animate({
        top: 100
    }, 1000);
    $('#attbtn1').animate({
        top: 550
    }, 1000, function () {
        document.getElementById("attbtn1").style.visibility = "hidden";
        document.getElementById("attbtn2").style.visibility = "visible";
        document.getElementById("attp").style.visibility = "visible";
        document.getElementById("attpbox").style.visibility = "visible";
    });
}