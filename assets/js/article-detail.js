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
            imJs.initSliderRelatedPosts();
        },
        initSliderRelatedPosts() {
            const swiperRelatedPosts = new Swiper(
                ".related-posts-swiper .swiper-container",
                {
                    slidesPerView: 1,
                    speed: 1000,
                    autoplay: {
                        delay: 2000,
                    },
                    spaceBetween: 0,
                    navigation: {
                        nextEl: ".related-posts-swiper .swiper-button-next",
                        prevEl: ".related-posts-swiper .swiper-button-prev",
                    },
                    breakpoints: {
                        600: {
                            slidesPerView: 2,
                            spaceBetween: 8,
                        },
                        1200: { spaceBetween: 32, slidesPerView: 3 },
                    },
                },
            );
        },
    };
    imJs.m();
})(jQuery, window);
