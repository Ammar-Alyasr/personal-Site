/**
 * smoothScroll
 * Created by yapı123 on 17.03.2017.
 */

$(function () {
    $("icerikSayifasi").height($(window).height())
    $("ikinciIcerik").height($(window).height())

    smoothScroll.init({
        speed : 2000
    });


})