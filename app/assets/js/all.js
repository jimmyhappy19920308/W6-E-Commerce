$(document).ready(() => {
  $('[data-toggle="offcanvas"]').on('click', function (e) {
    e.preventDefault();
    $('.offcanvas-collapse').toggleClass('open')
  });
});