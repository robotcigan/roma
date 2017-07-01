'use strict';

$(document).ready(function () {

  // $('.to-top').on('click', function() {
  //   $(".page").mCustomScrollbar("scrollTo", "top");
  // });

  // кастомный скрол
  // $('.page').mCustomScrollbar({
  //   // updateOnWindowResize: true,
  //   mouseWheelPixels: 350
  // });

  var nameScroll = 0;
  var name = $('.roma__name');

  // $('body').mousewheel(function(event) {
  //   if ($('.roma').length) {
  //     nameScroll = nameScroll + (event.deltaY * 100);
  //     if(nameScroll >= 0) nameScroll = 0;
  //     $('.roma__name').css({
  //       'transform': `translateX(${nameScroll}px)`
  //     });
  //     // console.log(name.position().left < -name.width())
  //     console.log('width', name.width(), 'position', -parseInt(Math.round(name.position().left)))
  //     if( -parseInt(Math.round(name.position().left)) > ( parseInt(name.width()) - 2500 ) ) {
  //       $('.page').removeClass('page--scrolling');
  //     } else {
  //       $('.page').addClass('page-scrolling');
  //     }
  //   }
  // });


  var windowScroll = 0;
  var delta = 0;

  if ($('.roma').length) {
    $('.page').addClass('page--scrolling');
  }

  $(window).on('mousewheel', function (event) {
    windowScroll = windowScroll + event.deltaY;

    if (windowScroll >= 0) {
      windowScroll = 0;
    }
    if (windowScroll < -36) {
      $('.page').removeClass('page--scrolling');
    } else {
      $('.page').addClass('page--scrolling');
    }

    if (-(windowScroll * 15) >= $(window).height()) {
      windowScroll = -($(window).height() / 15);
    }

    if ($('.roma').length) {
      $('.roma__name').css({
        'transform': 'translateX(' + windowScroll * 70 + 'px)'
      });
    }
  });

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
    scroll = scroll + event.deltaY;
    scrollCounter = scrollCounter - event.deltaY;

    console.log('scroll', -scroll * 15, 'height', $(window).height());

    if (-scroll * 15 >= $(window).height()) {
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
    }
  });

  // Анимация открытия проекта
  $('.next-project').on('click', function () {
    $('.next-project').toggleClass('next-project--active');
  });
});