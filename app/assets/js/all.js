$(document).ready(() => {
  $('[data-toggle="offcanvas"]').on('click', function (e) {
    e.preventDefault();
    $('.offcanvas-collapse').toggleClass('open');
  });

  $('.goBack').on('click', function (e) {
    e.preventDefault();
    $('.offcanvas-collapse').removeClass('open');
  });

  $('.menuItemExpand').on('click', function (e) {
    e.preventDefault();
    $('.menuItemSubList').slideToggle(500);
    $('.menuItemSubList').toggleClass('expand');
    $(this).toggleClass('active');
  });

  $('.keyboard_arrow_down').on('click', function(e) {
    e.preventDefault();
    $('.orderSummaryDetail').slideToggle(600);
    $(this).toggleClass('active');
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

