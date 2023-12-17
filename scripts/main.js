//start Swiper
new Swiper('.slider', {
  autoplay: {
    delay: 5000,
  },

  speed: 800,
});

new Swiper('.slider-testimonials', {
  breakpoints: {
    380: {
      slidesPerView: 1,
    },

    740: {
      slidesPerView: 2,
    },

    1180: {
      slidesPerView: 3,
    },
  },
  autoplay: {
    delay: 5000,
  },
  speed: 800,
  spaceBetween: 100,
  loop: true,
});

