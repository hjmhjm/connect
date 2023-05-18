(function($) {
  
  "use strict";

  // Preloader
  function stylePreloader() {
    $('body').addClass('preloader-deactive');
  }

  // Background Image
  $('[data-bg-img]').each(function() {
    $(this).css('background-image', 'url(' + $(this).data("bg-img") + ')');
  });

  // Off Canvas JS
  var canvasWrapper = $(".off-canvas-wrapper");
  $(".btn-menu").on('click', function() {
    canvasWrapper.addClass('active');
    $("body").addClass('fix');
  });

  $(".close-action > .btn-close, .off-canvas-overlay").on('click', function() {
    canvasWrapper.removeClass('active');
    $(this).removeClass('fix');
  });

    var brandLogoSlider = new Swiper('.brand-logo-slider-container', {
      slidesPerView : 5,
      loop: true,
      speed: 1000,
      spaceBetween : 30,
      autoplay: false,
      breakpoints: {
        1200:{
            slidesPerView : 5,
            spaceBetween : 100
        },

        992:{
            slidesPerView : 4,
            spaceBetween : 90
        },

        768:{
            slidesPerView : 3,
            spaceBetween : 110

        },

        576:{
            slidesPerView : 3,
            spaceBetween : 60
        },

        380:{
            slidesPerView : 3,
            spaceBetween : 30
        },

        0:{
            slidesPerView : 2,
            spaceBetween : 30
        }
      }
    });

    /* ----------------------------
        Portfolio Masonry Activation
    -------------------------------*/
    $(window).load(function () {
      $('.portfolio-default-area').imagesLoaded(function () {

          // filter items on button click
          $('.messonry-button, .blog-filter-menu').on('click', 'button', function () {
              var filterValue = $(this).attr('data-filter');
              $(this).siblings('.is-checked').removeClass('is-checked');
              $(this).addClass('is-checked');
              $grid.isotope({
                  filter: filterValue
              });
          });

          // init Isotope
          var $grid = $('.portfolio-list, .masonryGrid').isotope({
              percentPosition: true,
              transitionDuration: '0.7s',
              layoutMode: 'masonry',
              masonry: {
                  columnWidth: '.resizer',
              }
          });
      });
  })


  

 

  

  //Scroll To Top
  $('.scroll-to-top').on('click', function(){
    $('html, body').animate({scrollTop : 0},800);
    return false;
  });

  // Reveal Footer JS
  let revealId = $(".reveal-footer"),
    footerHeight = revealId.outerHeight(),
    windowWidth = $(window).width(),
    windowHeight = $(window).outerHeight();

  if (windowWidth > 991 && windowHeight > footerHeight) {
    $(".site-wrapper-reveal").css({
      'margin-bottom': footerHeight + 'px'
    });
  }

/*--
    Magnific Popup
-----------------------------------*/
  $('.gallery-popup').magnificPopup({
    type: 'image',
    gallery: {
        enabled: true,
    },
  });

  //Video Popup
  $('.play-video-popup').magnificPopup({
      type: 'iframe',
  });
  
  

  /* ----------------------------
      AOS Scroll Animation 
  -------------------------------*/
  $(window).on('scroll', function(){
    AOS.init({
            offset: 80,
            duration: 1000,
            once: true,
            easing: 'ease',
        });
    });
    
    AOS.init({
        offset: 80,
        duration: 1000,
        once: true,
        easing: 'ease',
    });

  
  

/* ==========================================================================
   When Window is resizing, do
   ========================================================================== */
  
  $(window).on('resize', function() {
  });
  

})(window.jQuery);
