const initSliderPackages = () => {
    let packagesSlider = new Swiper(".packages-index .swiper-container", {
        slidesPerView: 4,
        speed: 2000,
        spaceBetween: 30,
        autoplay: {
            delay: 2000,
        },
        breakpoints: {},
    });
};

(function ($) {
    "use strict";
    initSliderPackages();
})(jQuery, window);
