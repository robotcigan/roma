'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

$(document).ready(function () {
  var _$$fullpage;

  // Кастомный сколл
  // $('.page--inner').mCustomScrollbar({
  //   theme: "dark",
  //   mouseWheelPixels: 350
  // });

  $('.next-project a').on('click', function (e) {
    e.preventDefault();
    var link = $(this).attr('href');
    setTimeout(function () {
      window.location.replace(link);
    }, 800);
  });

  $('.next-project').on('click', function () {
    $(this).addClass('next-project--clicked');
    $('.portfolio').addClass('portfolio--dark');
    $('.main-header').addClass('main-header--dark');
    $('.to-top').hide();
  });
  // // Анимация открытия проекта
  // $('.next-project').on('click', function () {
  //   $('.next-project').toggleClass('next-project--active');
  // });


  $(window).scroll(function () {
    if ($(window).scrollTop() > 500) {
      $('.to-top').addClass('to-top--active');
    } else {
      $('.to-top').removeClass('to-top--active');
    }
  });

  $("html").easeScroll();

  function superGallery() {
    if ($(window).width() > 1200) {
      $('.super-gallery').addClass('super-gallery--desctop');
    } else {
      $('.super-gallery').removeClass('super-gallery--desctop');
    }
  }
  superGallery();
  $(window).on('resize', function () {
    superGallery();
  });

  $(window).on('scroll', function () {
    if ($(window).scrollTop() >= $('.page').height() - 1000) {
      $('.next-project').addClass('next-project--active');
    } else {
      $('.next-project').removeClass('next-project--active');
    }
  });

  // let delay = 2000; //milliseconds
  // let timeoutId;
  // let animationIsFinished = false;

  var some = true;

  $('#fullpage').fullpage((_$$fullpage = {
    anchors: ['page1', 'page2', 'page3'],
    verticalCentered: false,
    responsiveWidth: 0,
    responsiveHeight: 0,
    responsiveSlides: true,
    scrollingSpeed: 0,
    fitToSection: true,
    interlockedSlides: false,
    fitToSectionDelay: 2000
  }, _defineProperty(_$$fullpage, 'responsiveWidth', 1200), _defineProperty(_$$fullpage, 'onLeave', function onLeave(index, nextIndex, direction) {
    if (!some) {
      return false;
    } else {
      some = false;
    }

    $('.animation-block').removeClass('animation-block--up');
    $('.animation-block').removeClass('animation-block--down');

    if (direction === "up") {
      $('.animation-block').addClass('animation-block--up');
      $('.animation-block').addClass('animation-block--active');
    } else {
      $('.animation-block').addClass('animation-block--down');
      $('.animation-block').addClass('animation-block--active');
    }

    setTimeout(function () {
      $('.animation-block').removeClass('animation-block--active');
      some = true;
    }, 800);
  }), _$$fullpage));

  $('.number').on('click', function () {
    $('.number').removeClass('number--active');
    $(this).addClass('number--active');
  });

  $(window).on('hashchange', function () {
    var hash = window.location.hash;
    var index = Number(hash.match(/(\d)/g)[0]);
    $('.number').removeClass('number--active');
    $('.numbers .number').eq(index - 1).addClass('number--active');
  });

  $('.down').on('click', function () {
    $.fn.fullpage.moveSectionDown();
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

  $('.fullpage').on('mousewheel', function (event) {
    if ($(event.target).closest('.super-gallery').length) {
      $.fn.fullpage.setAllowScrolling(false);
    } else {
      $.fn.fullpage.setAllowScrolling(true);
    }
  });

  $('.super-gallery.super-gallery--desctop').on('mousewheel', function (event) {
    scroll = scroll + event.deltaY;
    scrollCounter = scrollCounter - event.deltaY;

    // console.log('scroll', -scroll * 15, 'height', $(window).height())

    // if ( event.deltaY === 1 ) {
    //   $.fn.fullpage.setAllowScrolling(false);
    // }

    if (scroll >= 0) {
      scroll = 0;
    }

    if (scrollCounter >= 32) {
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
      'transform': 'translate3d(' + scroll * 50 + 'px, 0, 0)'
    });
    $('.super-gallery__row--second .super-gallery__col').css({
      'transform': 'translate3d(' + scroll * 25 + 'px, 0, 0)'
    });
  });
});

$(window).on("load", function () {
  $('.fullpage').addClass('fullpage--is-load');
  $('.i').addClass('i--animation');
});