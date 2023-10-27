

$(document).ready(function () {

  $(window).scroll(function () {
    if ($(window).scrollTop() > 800) {
      $('#sidebar').css('position', 'fixed');
      $('#sidebar').css('top', '160px');
      $('#sidebar').css('width', '320px');
    }
    else if ($(window).scrollTop() <= 300) {
      $('#sidebar').css('position', '');
      $('#sidebar').css('top', '');
      $('#sidebar').css('left', 'auto');
      $('#sidebar').css('width', 'auto');
    }
    if ($('#sidebar').offset().top + $("#sidebar").height() >= $("#bottomwithsidebar").offset().top) {
      $('#sidebar').css('top', -($("#sidebar").offset().top + $("#sidebar").height() - $("#bottomwithsidebar").offset().top));
    }
  });

});

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})