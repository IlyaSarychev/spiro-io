$(document).ready(function() {

    // if ($('#video-bg').get(0)) {
    //     $('#video-bg').find('video').get(0).play();
    // }

    $('.preloader__sphere').removeClass('animated');
    $('.preloader__sphere').animate({
        width: 0,
        height: 0,
        opacity : .2
    }, 600, function() {
        $('html').removeClass('preload');
        $('.preloader').fadeOut(200);
    });

    let st = 0;
    let vh = $(window).height();

    $(window).resize(function() {
        vh = $(window).height();
    })

    if (vh > 800) {
        $('.dots-wrapper').css('padding', '200px 0')
    }

    if (vh > 800) {
        $('.dots-wrapper .message').css('top', '200px')
    }

    if ($(window).scrollTop() > vh) {
        $('.dots-wrapper').addClass('show');
    }

    $(window).scroll(function() {

        if ($(this).scrollTop() >= vh) {
            $('.dots-wrapper').addClass('show');
        } else {
            $('.dots-wrapper').removeClass('show');
        }
    })

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
