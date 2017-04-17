/**
 * Created by yapı123 on 10.04.2017.
 */

$(document).ready(function(){
    $("a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 1000, function(){


                window.location.hash = hash;
            });
        }
    });
});

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
