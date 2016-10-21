$(document).ready(function () {
    document.getElementById("map1").style.visibility = "visible";
    document.getElementById("map2").style.visibility = "hidden";
    document.getElementById("map3").style.visibility = "hidden";
});

function map1Click() {
    document.getElementById("map1").style.visibility = "visible";
    document.getElementById("map2").style.visibility = "hidden";
    document.getElementById("map3").style.visibility = "hidden";
}

function map2Click() {
    document.getElementById("map1").style.visibility = "hidden";
    document.getElementById("map2").style.visibility = "visible";
    document.getElementById("map3").style.visibility = "hidden";
}

function map3Click() {
    document.getElementById("map1").style.visibility = "hidden";
    document.getElementById("map2").style.visibility = "hidden";
    document.getElementById("map3").style.visibility = "visible";
}
