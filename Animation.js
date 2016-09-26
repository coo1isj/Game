$(document).ready(function () {

    var startTop = $('#attack').css("top");
    var isMoving = false;
    /*
                       $('#attackbox').mouseenter(function () {
                           if (isMoving == false) {
                               isMoving = true;
                               $('#attack').animate({
                                   top: '100px'
                               }, function () {
                                   isMoving = false;
                               });
                           };
                       });
                       $('#attackbox').mouseenter(function () {
                           $('#defend').animate({
                               top: startTop
                           });
                       });
                       $('#defendbox').mouseenter(function () {
                           if (isMoving == false) {
                               isMoving = true;
                               $('#defend').animate({
                                   top: '100px'
                               }, function () {
                                   isMoving = false;

                               });
                           }
                       });
                       $('#defendbox').mouseenter(function () {
                           $('#attack').animate({
                               top: startTop
                           });
                       });
                   }); */
    $('#attackbox').hover(function () {
        if (isMoving == false) {
            isMoving = true;
            $('#attack').animate({
                top: '100px'
            }, function () {
                isMoving = false;
            });
        }
    });
    $('#defendbox').hover(function () {
        $('#attack').animate({
            top: startTop
        });
    });
});
