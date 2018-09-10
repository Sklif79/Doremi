$(document).ready(function () {
    //sliders
    $('.js_product-slider').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        infinite: true,
        arrows: true
    });

    $('.js_articles-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        arrows: true
    });

    $('.js_brands-slider').slick({
        slidesToShow: 7,
        slidesToScroll: 1,
        infinite: true,
        arrows: true,
        rows: 2
    });

    //custom select
    $('.js_custom-select').select2({
        width: "100%",
        theme: 'classic',
        minimumResultsForSearch: Infinity
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
    miniCard();
    toUp();
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

function miniCard() {
    var leaveBasket = false;

    if ($('.header-basket-minicard__item').length) {
        $('body').on('mouseenter', '.header-basket, .header-basket-minicard', function () {
            leaveBasket = false;
            $('.header-basket-minicard').addClass('active');
        });

        $('body').on('mouseleave', '.header-basket, .header-basket-minicard', function () {
            leaveBasket = true;
            checkLeaveBasket();
        });
    }

    function checkLeaveBasket() {
        setTimeout(function () {
            if (leaveBasket) {
                $('.header-basket-minicard').removeClass('active');
            }
        }, 500);
    }
}

function toUp() {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.up-btn').show();
        } else {
            $('.up-btn').hide();
        }
    });

    $(document).on('click', '.up-btn', function () {
        $('html, body').animate({scrollTop: 0}, 500);
    });
}

$.fn.setMaxHeights = function() {
    var maxHeight = this.map(function(i,e) {
        return $(e).height();
    }).get();

    return this.height( Math.max.apply(this, maxHeight) );
};