'use strict';

$(document).ready(function () {

  $('#fullpage').fullpage({
    anchors: ['page1', 'page2', 'page3'],
    verticalCentered: false
  });

  $('.to-top').on('click', function () {
    $("html, body").animate({ scrollTop: 0 }, "slow");
  });

  var windowScroll = 0;
  var delta = 0;

  var scroll = 0;

  $('.super-gallery__col').addClass('for-copy');

  function addNewElems() {
    $('.super-gallery__row').find('.for-copy').each(function () {
      var parent = $(this).parent();
      $(this).clone().removeClass('for-copy').appendTo(parent);
    });
  }

  addNewElems();
  var scrollCounter = 0;

  $('body').on('mousewheel', function (event) {
    if ($(event.target).closest('.super-gallery').length) {
      $.fn.fullpage.setAllowScrolling(false);
    } else {
      $.fn.fullpage.setAllowScrolling(true);
    }
  });

  $('.super-gallery').on('mousewheel', function (event) {
    scroll = scroll + event.deltaY;
    scrollCounter = scrollCounter - event.deltaY;

    // console.log('scroll', -scroll * 15, 'height', $(window).height())

    // if ( event.deltaY === 1 ) {
    //   $.fn.fullpage.setAllowScrolling(false);
    // }

    if (scroll >= 0) {
      scroll = 0;
    }

    if (scrollCounter >= 20) {
      addNewElems();
      scrollCounter = 0;
      $('.super-gallery__row').each(function () {
        var width = $(this).width();
        var windowWidth = $(window).width();
        $(this).css({
          'width': '' + (width + windowWidth)
        });
      });
    }

    $('.super-gallery__row--first .super-gallery__col').css({
      'transform': 'translate3d(' + scroll * 30 + 'px, 0, 0)'
    });
    $('.super-gallery__row--second .super-gallery__col').css({
      'transform': 'translate3d(' + scroll * 60 + 'px, 0, 0)'
    });
  });

  // Анимация открытия проекта
  $('.next-project').on('click', function () {
    $('.next-project').toggleClass('next-project--active');
  });
});

$(window).on("load", function () {
  $('.fullpage').addClass('fullpage--is-load');
  $('.i').addClass('i--animation');
});