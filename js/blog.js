$(document).ready(function() {

    $('.preloader__sphere').removeClass('animated');
    $('.preloader__sphere').animate({
        width: 0,
        height: 0,
        opacity : .2
    }, 600, function() {
        $('html').removeClass('preload');
        $('.preloader').fadeOut(200);
    });


    $('.mobile-menu').on('wheel', function(e) {
        e.preventDefault();
    })

    $('.close-menu').click(function() {
        $('.mobile-menu').slideUp(200);
    })

    $('.show-menu').click(function() {
        $('.mobile-menu').slideDown(200);
    })
})