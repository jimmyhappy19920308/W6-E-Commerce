$(document).ready(() => {
  $('[data-toggle="offcanvas"]').on('click', function (e) {
    e.preventDefault();
    $('.offcanvas-collapse').toggleClass('open');
  });

  $('.goBack').on('click', function (e) {
    e.preventDefault();
    $('.offcanvas-collapse').removeClass('open');
  });

  $('.productDetailsExpand').on('click', function (e) {
    e.preventDefault();
    $('.productList').slideToggle(500);
    $('.productList').toggleClass('expand');
    $(this).toggleClass('active');
  })

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

