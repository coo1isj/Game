$(document).ready(function () {
    document.getElementById("usa").style.visibility = "hidden";
    document.getElementById("togame").style.visibility = "hidden";
    document.getElementById("defusa").style.visibility = "hidden";
});

function usaClick() {
    document.getElementById("usa").style.visibility = "visible";
    document.getElementById("togame").style.visibility = "visible";
    document.getElementById("defusa").style.visibility = "visible";
}
