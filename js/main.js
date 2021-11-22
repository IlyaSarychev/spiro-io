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

    let startPosition = $('.dish').offset().top;
    let endPosition = $('.end-position').offset().top + ($('.end-position').height() / 2);
    if ($(window).width() < 992) {
        endPosition = $('#section-philosophy .description').offset().top + (($('.end-position').offset().top - $('#section-philosophy .description').offset().top) / 2) + ($('#section-philosophy .description').height() / 2);
    }

    $(window).resize(function() {
        startPosition = $('.dish').offset().top;
        endPosition = $('.end-position').offset().top + ($('.end-position').height() / 2);
        if ($(window).width() < 992) {
            endPosition = $('#section-philosophy .description').offset().top + (($('.end-position').offset().top - $('#section-philosophy .description').offset().top) / 2) + ($('#section-philosophy .description').height() / 2);
        }
    })
    
    let path = Math.round(endPosition - startPosition);

    let oneFrameLength = Math.round(path / 4);

    let point1 = startPosition + oneFrameLength + 100;
    let point2 = startPosition + oneFrameLength * 2 + 100;
    let point3 = startPosition + oneFrameLength * 3;

    $(window).resize(function() {
        $('#player2').height($('#player2').width() / 2);
    })

    let st = 0;
    $(window).scroll(function() {
        let windowMiddle = $(window).scrollTop() + ($(window).height() / 2);

        if ($(window).scrollTop() > st) {
            if (windowMiddle > startPosition && windowMiddle < endPosition) {

                $('.dish-body__package').css({
                    'opacity' : 0
                })

                $('.dish-body__cover').css({
                    'opacity' : 0
                })

                $('.dish-body__hz').css({
                    'opacity' : 0
                })
            }

            if (windowMiddle > point1 && windowMiddle < endPosition) {

                $('.dish').css({
                    'top' : path - ($('.dish').height() / 2),
                    'transform' : 'rotate(90deg)'
                })
            }
        } else {

            if (windowMiddle < point3 && windowMiddle > startPosition) {

                $('.dish').css({
                    'top' : 0,
                    'transform' : 'rotate(0deg)'
                })
            }

            if (windowMiddle < point2 && windowMiddle > startPosition) {
                $('.dish-body__package').css({
                    'opacity' : 1
                })

                $('.dish-body__cover').css({
                    'opacity' : 1
                })

                $('.dish-body__hz').css({
                    'opacity' : 1
                })
            }

        }

        st = $(window).scrollTop();

    })


})

$(document).ready(function() {


    const slider1 = $('.dish-slider');

    slider1.slick({
        infinite: false,
        speed: 1200,
        dots: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    dots: false,
                    arrows: false
                }
            }
            // {
            //     breakpoint: 576,
            //     settings: {
            //         dots: false
            //     }
            // }
        ]
    })

    slider1.on('beforeChange', function(slick, currentSlide, nextSlide) {
        $('#section-steps .arrows').css({
            'z-index' : 5
        })
        $('#section-steps .slick-list').css({
            'z-index' : 20
        })
    })

    slider1.on('afterChange', function(slick, currentSlide, nextSlide) {
        $('#section-steps .arrows').css({
            'z-index' : 20
        })

        $('#section-steps .slick-list').css({
            'z-index' : 1
        })
    })

    $('#section-steps .reviews-prev').click(function() {
        slider1.slick('slickPrev');
    })
    $('#section-steps .reviews-next').click(function() {
        slider1.slick('slickNext');
    })

    slider1.on('wheel', function(e) {
        // $(this).on('edge', function(event, slick, direction){
        //     return;
        // });
        // e.preventDefault();
        // if (e.originalEvent.deltaY < 100) {
        //   $(this).slick('slickPrev');
        // } else if (e.originalEvent.deltaY > 100) {
        //   $(this).slick('slickNext');
        // }
    });

    const slider2 = $('.reviews-slider');

    slider2.slick({
        dots: true,
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        swipeToSlide: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 390,
                settings: {
                    slidesToShow: 1,
                    arrows: false
                }
            }
        ]
    })

    $('#section-reviews .reviews-prev').click(function() {
        slider2.slick('slickPrev');
    })
    $('#section-reviews .reviews-next').click(function() {
        slider2.slick('slickNext');
    })

    const slider3 = $('.team-slider');

    slider3.slick({
        dots: true,
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        responsive: [
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1.5,
                    infinite: false,
                    arrows: false
                }
            },
            {
                breakpoint: 455,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    })

    $('#section-team .reviews-prev').click(function() {
        slider3.slick('slickPrev');
    })
    $('#section-team .reviews-next').click(function() {
        slider3.slick('slickNext');
    })

    $(".select-js").each(function() {
        let firstElemText = $(this).find('.dropdown-item:first-child').text();
        let firstElemVal = $(this).find('.dropdown-item:first-child').attr('data-date');
        $(this).find('.dropdown-toggle span').text(firstElemText);
        $(this).find('input[type="hidden"]').val(firstElemVal);
    })

    $('.select-item-js').click(function() {
        let dataDate = $(this).attr('data-date');
        let itemTxt = $(this).text();
        let parent = $(this).closest('.select-js');
        parent.find('input').val(dataDate);
        parent.find('.dropdown-toggle span').text(itemTxt);
    })

    $('.address input').on('input', function() {
        if ($('.address-select-js').length > 0 && $(this).val().length > 0) {
            $('.address-js .dropdown-menu').addClass('show');
        } else {
            $('.address-js .dropdown-menu').removeClass('show');
        }
    })

    let slider4 = $('.app-slider .slick-slider');

    slider4.slick({
        dots: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    dots: false
                }
            }
        ]
    })

    $('#section-app .reviews-prev').click(function() {
        slider4.slick('slickPrev');
    })
    $('#section-app .reviews-next').click(function() {
        slider4.slick('slickNext');
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

    $('.history-overlay').click(function() {
        $('#section-history').addClass('visible');
        $(this).hide();
    })

    $('.toSubscribe').click(function(e) {
        e.preventDefault()
        $([document.documentElement, document.body]).animate({
            scrollTop: $('#section-subscribe').offset().top
        }, 2000);
    })

    $('.toMenu').click(function(e) {
        e.preventDefault()
        $([document.documentElement, document.body]).animate({
            scrollTop: $('#section-menu').offset().top
        }, 2000);
    })

    let slider5 = $('.menu-slider');

    $('#dishMenuModal').on('show.bs.modal', function (event) {
        setTimeout(function() {
            slider5.slick({
                slidesToShow: 1,
                infinite: false,
                fade: true,
                dots: false,
                arrows: false
            })
        }, 200);
    });

    $('#videoModal').on('show.bs.modal', function (event) {
        setTimeout(function() {
            $('#player2').height($('#player2').width() / 2);
        }, 200);
    });

    $('#dishMenuModal .close').click(function() {
        $('#dishMenuModal').modal('hide');
    })

    $('#dishMenuModal .prev').click(function() {
        slider5.slick('slickPrev');
    })
    $('#dishMenuModal .next').click(function() {
        slider5.slick('slickNext');
    })

    $('.checkbox--male input').change(function() {
        if ($(this).is(":checked")) {
            $(this).closest('form').removeClass('skin-woman');
            $(this).closest('form').addClass('skin-man');
        }
    });
    $('.checkbox--female input').change(function() {
        if ($(this).is(":checked")) {
            $(this).closest('form').removeClass('skin-man');
            $(this).closest('form').addClass('skin-woman');
        }
    });

    $('#videoModal').on('hidden.bs.modal', function (e) {
        player2.pauseVideo();
    })

    
})
