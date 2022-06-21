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
            imJs.initSliderPackages();
            imJs.initSliderScreenShot();
        },
        initSliderPackages() {
            const swiperPackages = new Swiper(
                ".packages-swiper .swiper-container",
                {
                    slidesPerView: 1,
                    speed: 1000,
                    spaceBetween: 8,
                    autoplay: {
                        delay: 2000,
                    },
                    navigation: {
                        nextEl: ".packages-swiper .swiper-button-next",
                        prevEl: ".packages-swiper .swiper-button-prev",
                    },
                    pagination: {
                        el: ".packages-swiper .swiper-pagination",
                        dynamicBullets: true,
                    },
                    breakpoints: {
                        600: {
                            slidesPerView: 2,
                        },
                        768: {
                            slidesPerView: 3,
                        },
                        1200: { spaceBetween: 22, slidesPerView: 4 },
                    },
                },
            );
        },
        initSliderScreenShot() {
            const swiperScreenShot = new Swiper(
                ".screenshot-swiper .swiper-container",
                {
                    slidesPerView: 1,
                    speed: 2000,
                    autoplay: {
                        delay: 2000,
                    },
                    centeredSlides: true,
                    loop: true,
                },
            );
        },
    };
    imJs.m();
})(jQuery, window);
