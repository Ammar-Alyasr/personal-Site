/**
 * Created by yapı123 on 10.04.2017.
 */

$(document).ready(function(){
    $("div.kutu").fadeIn(1500);


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

$( "i.fa-facebook-square" ).hover(
    function() {
        $(this).css("color","red");
        $( this ).addClass( "fa fa-facebook-square fa-4x fa-spin" );
    }, function() {
        $(this).css("color","skyblue");
        $( this ).removeClass( "fa-spin" );

    }
);

$( "i.fa-stack-overflow" ).hover(
    function() {
        $( this ).addClass( "fa fa-stack-overflow fa-4x fa-spin" );
    }, function() {
        $( this ).removeClass( "fa-spin" );
    }
);

$( "i.fa-linkedin" ).hover(
    function() {
        $( this ).addClass( "fa fa-linkedin fa-4x fa-spin" );
    }, function() {
        $( this ).removeClass( "fa-spin" );
    }
);

$( "i.fa-github-square" ).hover(
    function() {
        $( this ).addClass( "fa fa-github-square fa-4x fa-spin" );
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
