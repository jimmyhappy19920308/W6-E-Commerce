"use strict";

$(document).ready(function () {
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
  $('.orderSummaryIcon').on('click', function (e) {
    e.preventDefault();
    $('.orderSummaryDetail').slideToggle(600);
    $(this).toggleClass('active');
  });
  $('.contactIcon').on('click', function (e) {
    e.preventDefault();
    $('.contactDetail').slideToggle(600);
    $('.contactDetail').toggleClass('d-flex');
    $('.infoContactShirk').toggleClass('d-none');
    $(this).parent().toggleClass('ml-auto');
    $(this).toggleClass('active');
  });
  $('.shippingIcon').on('click', function (e) {
    e.preventDefault();
    $('.shippingDetail').slideToggle(600);
    $('.shippingDetail').toggleClass('d-flex');
    $('.infoShippingShirk').toggleClass('d-none');
    $(this).parent().toggleClass('ml-auto');
    $(this).toggleClass('active');
  });
  var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 16,
    // init: false,
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 16
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 16
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30
      }
    }
  });
});
//# sourceMappingURL=all.js.map
