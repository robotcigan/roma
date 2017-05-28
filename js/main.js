$(document).ready(function() {

  let nameScroll = 0;
  let name = $('.roma__name');

  $('body').mousewheel(function(event) {
    nameScroll = nameScroll + (event.deltaY * 100);
    if(nameScroll >= 0) nameScroll = 0;
    $('.roma__name').css({
      'transform': `translateX(${nameScroll}px)`
    });
    // console.log(name.position().left < -name.width())
    console.log('width', name.width(), 'position', -parseInt(Math.round(name.position().left)))
    if( -parseInt(Math.round(name.position().left)) > ( parseInt(name.width()) - 2500 ) ) {
      $('.page').removeClass('page--scrolling');
    } else {
      $('.page').addClass('page-scrolling');
    }
  });




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

  $('body').mousewheel(function(event) {
    scroll = scroll + event.deltaY;
    scrollCounter = scrollCounter - event.deltaY;


    if(scroll >= 0) scroll = 0;

    // console.log('scrollCounter -> ', scrollCounter)

    if(scrollCounter >= 20) {
      addNewElems();
      scrollCounter = 0;
      $('.super-gallery__row').each(function() {
        let width = $(this).width();
        let windowWidth = $(window).width();
        $(this).css({
          'width': `${width + windowWidth}`
        })
      })

    }


    $('.super-gallery__row--first .super-gallery__col').css({
      'transform': `translate3d(${scroll * 30}px, 0, 0)`
    });
    $('.super-gallery__row--second .super-gallery__col').css({
      'transform': `translate3d(${scroll * 60}px, 0, 0)`
    })


    // if( scroll * 15 <= (-$(window).width()) ) {
    //   console.log('rock')
    //   $('.super-gallery__row--first .first-wave').each(function() {
    //     let anotherScroll = (scroll * 30) + ($(window).width() * 3);
    //     $(this).css({
    //       'transform': `translate3d(${anotherScroll}px, 0, 0)`
    //     });
    //   });
    // }


    // if( scroll * 30 <= (-$(window).width()) ) {
    //   console.log('rock')
    //   $('.super-gallery__row--second .first-wave').each(function() {
    //     let anotherScroll = (scroll * 60) + ($(window).width() * 2);
    //     $(this).css({
    //       'transform': `translate3d(${anotherScroll}px, 0, 0)`
    //     });
    //   });
    // }


  })


})