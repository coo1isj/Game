$(document).ready(function () {

    var startTop = $('#attack').css("top");
    var isMoving = false;

    $('#attackbox').mouseenter(function () {
        if (!isMoving) {
            isMoving = true;
            $('#attack').animate({
                top: '100px'
            }, 1000, function () {
                isMoving = false;
            });
        }

    });
    $('#attackbox').mouseleave(function () {
        if (!isMoving || isMoving) {
            isMoving = true;
            $('#attack').animate({
                top: startTop
            }, 1000, function() {
                isMoving = false;
            });
        }
    });
});
