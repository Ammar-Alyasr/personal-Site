/**
 * Created by yapı123 on 10.04.2017.
 */

$(document).ready(function(){
    $("div.kutu").fadeIn(2000);
    
    $(".owl-carousel").owlCarousel();


    $("div.flex-container").animate({
        opacity:"1"
    },1000);
    
    $("div.ikinciIcerik").animate({
        opacity:"1"
    },1000);

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

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,  
    stagePadding: 50,
    autoplay: true,
    lazyLoad:true,
    merge:true,
    autoplayTimeout:1000,
    nav:true,
    
    
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
})




$( "i.fa-facebook-square" ).hover(
    function() {
        $( this ).addClass( "fa fa-facebook-square fa-4x fa-spin" );
    }, function() {
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


$(function() {

    function abso() {

        $('div.dorduncuIcerik').css({
            width: $(window).width(),
            height: $(window).height()
        });

    }

    $(window).resize(function() {
        abso();
    });

    abso();

});



