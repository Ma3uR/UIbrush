$('.prev').click(function () {
    i--;
    if (i < 0) {
        i = sliderItem.length - 1;
    }

    sliderItem.eq(i).css({left: 200 + '%'});
    sliderItem.eq(i).animate({left: 20 + '%'}, 1000);

    if (i === (sliderItem.length - 1)) {
        sliderItem.eq(0).animate({left: 120 + '%'}, 1000);
    } else {
        sliderItem.eq(i + 1).animate({left: 120 + '%'}, 1000);
    }
    $('.prev').css({
        transform: 'scale(1.5)'
    });

    if (window.matchMedia('(max-width: 400px)').matches) {
        i--;
        if (i < 0)
            i = sliderItem.length - 1;
        sliderItem.eq(i).css({left: 200 + '%'});
        sliderItem.eq(i).animate({left: 0}, 1000);
        if (i == sliderItem.length - 1)
            sliderItem.eq(0).animate({left: 120 + '%'}, 1000);
        else
            sliderItem.eq(i + 1).animate({left: 120 + '%'}, 1000);
        $('.prev').css({transform: 'scale(1.5)'});
    }


});

var i = 0,
    sliderItem = $('.slideitem');

$('.next').click(function () {
    i++;
    if (i > sliderItem.length - 1)
        i = 0;
    sliderItem.eq(i).css({left: 120 + '%'});
    sliderItem.eq(i).animate({left: 20 + '%'}, 1000)
    sliderItem.eq(i - 1).animate({left: -200 + '%'}, 1000);
    $('.next').css({transform: 'scale(1.5)', color: '#' + 'fff'});
    if (window.matchMedia('(max-width: 400px)').matches) {
        if (i > sliderItem.length - 1)
            i = 0;
        sliderItem.eq(i).css({left: 120 + '%'});
        sliderItem.eq(i).animate({left: 0}, 1000)
        sliderItem.eq(i - 1).animate({left: -200 + '%'}, 1000);
        $('.next').css({transform: 'scale(1.5)', color: '#' + 'fff'});
    }
});

$('.prev').on({
    'mouseenter': function () {
        $('.prev').css({transform: 'scale(1.3)'});
    },
    'mouseleave': function () {
        $('.prev').css({transform: 'scale(1)'});
    }
});


$('.next').on({
    'mouseenter': function () {
        $('.next').css({transform: 'scale(1.3)'});
    },
    'mouseleave': function () {
        $('.next').css({transform: 'scale(1)'});
    }
});
