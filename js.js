/**
 * Created by yapı123 on 10.04.2017.
 */
/*
global $

$(function () {
    $("icerikSayifasi").height($(window).height());
});
 */


$(function() {

    function abso() {

        $('#icerikSayifasi').css({
            width: $(window).width(),
            height: $(window).height()
        });

    }

    $(window).resize(function() {
        abso();
    });

    abso();

});


$(function() {

    function abso() {

        $('#ikin').css({
            width: $(window).width(),
            height: $(window).height()
        });

    }

    $(window).resize(function() {
        abso();
    });

    abso();

});


$(function() {

    function abso() {

        $('#ucuncu').css({
            width: $(window).width(),
            height: $(window).height()
        });

    }

    $(window).resize(function() {
        abso();
    });

    abso();

});
