(function ($) {
    "use strict";
    const imJs = {
        m: function (e) {
            imJs.d();
            imJs.methods();
        },
        d: function (e) {
            (this._window = $(window)),
                (this._document = $(document)),
                (this._body = $("body")),
                (this._html = $("html"));
        },
        methods: function (e) {
            imJs.initSliderMembers();
        },
        initSliderMembers() {
            const swiperMembers = new Swiper(
                ".members-swiper .swiper-container",
                {
                    slidesPerView: 1,
                    speed: 1000,
                    autoplay: {
                        delay: 2000,
                    },
                    spaceBetween: 0,
                    navigation: {
                        nextEl: ".members-swiper .swiper-button-next",
                        prevEl: ".members-swiper .swiper-button-prev",
                    },
                    breakpoints: {
                        600: {
                            slidesPerView: 2,
                            spaceBetween: 8,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 16,
                        },
                        1200: { spaceBetween: 32, slidesPerView: 4 },
                    },
                },
            );
        },
    };
    imJs.m();
})(jQuery, window);
