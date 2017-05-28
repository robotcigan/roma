'use strict';

$(document).ready(function () {

  // $('.super-gallery__row--first .super-gallery__col').css({
  //   'width': $(window).width() / 2,
  // });

  // $('.super-gallery__row--second .super-gallery__col').css({
  //     'width': $(window).width() / 4,
  // });

  var scroll = 0;

  $('.super-gallery__row').find('.super-gallery__col').each(function () {
    var parent = $(this).parent();
    $(this).clone().appendTo(parent);
  });

  $('body').mousewheel(function (event) {
    scroll = scroll + event.deltaY;
    console.log(scroll);
    $('.super-gallery__row--first .super-gallery__col').css({
      'transform': 'translate3d(' + scroll * 30 + 'px, 0, 0)'
    });

    $('.super-gallery__row--second .super-gallery__col').css({
      'transform': 'translate3d(' + scroll * 60 + 'px, 0, 0)'
    });
  });
});