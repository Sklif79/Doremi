$(document).ready(function () {
    //sliders

    //кастомное управление для cost-learning-slider
    // $('.cost-learning-slider-wrap .slider-next').on('click', function() {
    //     $('.cost-learning-slider').slick('slickNext');
    // });
    // $('.cost-learning-slider-wrap .slider-prev').on('click', function() {
    //     $('.cost-learning-slider').slick('slickPrev');
    // });

    $('.js_product-slider').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        infinite: true,
        // nextArrow: '<div class="our-service-slider__next"></div>',
        // prevArrow: '<div class="our-service-slider__prev"></div>',
        arrows: true
    });

    //fancybox
    $('a.fancybox').fancybox({
        closeBtn: true,
        padding: [20, 20, 18, 20],
        helpers: {
            overlay: {
                css: {
                    'background': 'rgba(51,51,51,0.8)'
                },

            },
            title: {type: 'inside'},
        }
    });


    clearSearchField();
    productSliderHeight();
});

function clearSearchField() {
    var $resetBtn = $('.search__reset');

    $('.search__field').on('keyup', function () {
        if ($(this).val()) {
            $resetBtn.css({"visibility": "visible"});
        } else {
            $resetBtn.css({"visibility": "hidden"});
        }
    });

    $resetBtn.on("click", function () {
        $(this).css({"visibility": "hidden"});
    });
}

function productSliderHeight() {
    $('.product-slider__brand').setMaxHeights();
    $('.product-slider__title').setMaxHeights();
}

$.fn.setMaxHeights = function() {
    var maxHeight = this.map(function(i,e) {
        return $(e).height();
    }).get();

    return this.height( Math.max.apply(this, maxHeight) );
};