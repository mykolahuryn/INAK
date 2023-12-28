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

(function () {
  var items = document.querySelectorAll(".timeline li");

  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function callbackFunc() {
    for (var i = 0; i < items.length; i++) {
      if (isElementInViewport(items[i])) {
        items[i].classList.add("in-view");
      }
    }
  }

  window.addEventListener("load", callbackFunc);
  window.addEventListener("resize", callbackFunc);
  window.addEventListener("scroll", callbackFunc);
})();









