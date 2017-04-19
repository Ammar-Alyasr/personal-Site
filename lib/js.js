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

/*
$("i.fa-facebook-square").hover(
  function () {
      $( "i.fa-facebook-square" ).removeClass( "fa fa-facebook-square fa-4x" ).addClass( "fa fa-facebook-square fa-4x fa-spin" );
  }
);
*/

$( "i.fa-facebook-square" ).hover(
    function() {
        $( this ).addClass( "fa fa-facebook-square fa-4x fa-spin" );
    }, function() {
        $( this ).removeClass( "fa-spin" );
    }
);


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
