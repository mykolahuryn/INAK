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



document.addEventListener("DOMContentLoaded", function () {
  var navLinkPAside = document.querySelector('.aside__nav .nav__link--p');
  var subMenuAside = document.querySelector('.aside__nav .nav__item--sub-menu');

  var navLinkPHeader = document.querySelector('.header__nav .nav__link--p');
  var subMenuHeader = document.querySelector('.header__nav .nav__item--sub-menu');

  var clickCountAside = 0;
  var clickCountHeader = 0;

  navLinkPAside.addEventListener("click", function (e) {
    clickCountAside++;
    updateSubMenuStyles(subMenuAside, clickCountAside);
    e.preventDefault();
  });

  navLinkPHeader.addEventListener("click", function (e) {
    clickCountHeader++;
    updateSubMenuStyles(subMenuHeader, clickCountHeader);
    e.preventDefault();
  });

  document.addEventListener("wheel", function () {
    clickCountAside = 0;
    clickCountHeader = 0;

    updateSubMenuStyles(subMenuAside, clickCountAside);
    updateSubMenuStyles(subMenuHeader, clickCountHeader);
  });

  function updateSubMenuStyles(subMenu, clickCount) {
    subMenu.style.opacity = clickCount % 2 === 1 ? 1 : 0;
    subMenu.style.maxHeight = clickCount % 2 === 1 ? "200px" : "0";
  }
});


document.addEventListener('DOMContentLoaded', function () {
  var newsPerPage = 2;
  var newsBlocks = document.querySelectorAll('.newses__news');
  var totalPages = Math.ceil(newsBlocks.length / newsPerPage);
  var paginationContainer = document.querySelector('.pagination');

  showPage(1);

  function showPage(pageNumber) {

    window.scrollTo(0, 0);

    newsBlocks.forEach(function (block) {
      block.classList.remove('active');
    });

    var startIndex = (pageNumber - 1) * newsPerPage;
    var endIndex = startIndex + newsPerPage;

    for (var i = startIndex; i < endIndex && i < newsBlocks.length; i++) {
      newsBlocks[i].classList.add('active');
    }
  }

  for (var i = 1; i <= totalPages; i++) {
    var pageLink = document.createElement('a');
    pageLink.href = '#';
    pageLink.textContent = i;

    pageLink.addEventListener('click', function (event) {
      event.preventDefault();
      showPage(parseInt(event.target.textContent));
    });

    paginationContainer.appendChild(pageLink);
  }
});

$(document).ready(function() {

	//E-mail Ajax Send
	$(".footer__form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});