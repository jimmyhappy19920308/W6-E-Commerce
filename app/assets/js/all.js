$(document).ready(() => {
  $('[data-toggle="offcanvas"]').on('click', function (e) {
    e.preventDefault();
    $('.offcanvas-collapse').toggleClass('open')
  });

  var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 16,
    // init: false,
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 16,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 16,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    }
  });
});

