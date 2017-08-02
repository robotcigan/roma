$(document).ready(function() {

  // Кастомный сколл
  // $('.page--inner').mCustomScrollbar({
  //   theme: "dark",
  //   mouseWheelPixels: 350
  // });

  $('#fullpage').fullpage({
    anchors: ['page1', 'page2', 'page3'],
    verticalCentered: false,
    responsiveWidth: 0,
    responsiveHeight: 0,
    responsiveSlides: true
  });

  $('.number').on('click', function() {
    $('.number').removeClass('number--active');
    $(this).addClass('number--active');
  });

  $(window).on('hashchange', function() {
    let hash = window.location.hash;
    let index = Number(hash.match(/(\d)/g)[0]);
    $('.number').removeClass('number--active');
    $('.numbers .number').eq(index - 1).addClass('number--active');
  });

  $('.down').on('click', function() {
    $.fn.fullpage.moveSectionDown();
  });

  $('.to-top').on('click', function() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
  });

  let windowScroll = 0;
  let delta = 0;

  let scroll = 0;

  $('.super-gallery__col').addClass('for-copy');

  function addNewElems() {
    $('.super-gallery__row').find('.for-copy').each(function() {
      let parent = $(this).parent();
      $(this).clone().removeClass('for-copy').appendTo(parent);
    });
  }

  addNewElems();
  let scrollCounter = 0;

  $('body').on('mousewheel', function(event) {
    if ( $(event.target).closest('.super-gallery').length ) {
      $.fn.fullpage.setAllowScrolling(false);
    } else {
      $.fn.fullpage.setAllowScrolling(true);
    }
  });

  $('.super-gallery').on('mousewheel', function(event) {
    scroll = scroll + event.deltaY;
    scrollCounter = scrollCounter - event.deltaY;

    // console.log('scroll', -scroll * 15, 'height', $(window).height())

      // if ( event.deltaY === 1 ) {
      //   $.fn.fullpage.setAllowScrolling(false);
      // }

      if(scroll >= 0) {
        scroll = 0;
      }

      if(scrollCounter >= 20) {
        addNewElems();
        scrollCounter = 0;
        $('.super-gallery__row').each(function() {
          let width = $(this).width();
          let windowWidth = $(window).width();
          $(this).css({
            'width': `${width + windowWidth}`
          });
        });
      }


      $('.super-gallery__row--first .super-gallery__col').css({
        'transform': `translate3d(${scroll * 50}px, 0, 0)`
      });
      $('.super-gallery__row--second .super-gallery__col').css({
        'transform': `translate3d(${scroll * 25}px, 0, 0)`
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