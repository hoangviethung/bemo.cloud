const initSliderPackages = () => {
    const swiperPackages = new Swiper(".packages-swiper .swiper-container", {
        slidesPerView: 4,
        speed: 1000,
        spaceBetween: 22,
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
        breakpoints: {},
    });
};

const initSliderScreenShot = () => {
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
};

(function ($) {
    "use strict";
    initSliderPackages();
    initSliderScreenShot();
})(jQuery, window);
