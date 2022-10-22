(function($) {

    $(document).ready(function() {
        $(window).scroll(function() {

            var height = $(window).scrollTop();

            if (height > 100) {
                $(".header").addClass('fix-header');
            } else {
                $(".header").removeClass('fix-header');
            }   
        });

        $(window).scroll(function() {
          var height = $(window).scrollTop();

          if (height > 100) {
              $(".scrolltoTop").fadeIn();
          } else {
              $(".scrolltoTop").fadeOut();
          }   
        });
        $('.header-bottom-ipad li').click(function(){
          $(this).find('.sub-menu').slideToggle();
        })
        $('.humberger').click(function(){
          // $(this).
          $(this).closest('.header-right').find('.header-bottom-ipad  ').slideToggle();
        })
    })
   
})(jQuery);

new Swiper('.home-banner-swiper', {
  spaceBetween: 20,
  slidesPerView: 1,
  // autoplay: {
  //     delay: 5000,
  // },
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },
 
 
});
 new Swiper('.invest-field-swiper', {
  spaceBetween: 20,
  slidesPerView: 4,
  // autoplay: {
  //     delay: 5000,
  // },
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },
 
 
});

new Swiper('.news-project-swiper', {
      slidesPerView: 2,
      // slidesPerView: "auto",

      spaceBetween: 20,

      pagination: {
        el: '#project-tab-1 .pagination-page',
        clickable: true,
      },
      breakpoints: {

        320: {
          slidesPerView: 1,
          slidesPerColumn: 1,
        },
        480: {
          slidesPerView: 1,
          slidesPerColumn: 1,
        },
        768: {
          slidesPerView: 1,
          slidesPerColumn: 1,
        },
      }
});

new Swiper('.news-thumbnail-swiper', {
  slidesPerView: 4,
  // slidesPerView: "auto",

  spaceBetween: 20,

  pagination: {
    el: '#project-tab-1 .pagination-page',
    clickable: true,
  },
  breakpoints: {

    320: {
      slidesPerView: 1,
      slidesPerColumn: 1,
    },
    480: {
      slidesPerView: 1,
      slidesPerColumn: 1,
    },
    768: {
      slidesPerView: 1,
      slidesPerColumn: 1,
    },
  }
});
 new Swiper('.news-project-swiper', {
  slidesPerView: 1,
  // slidesPerView: "auto",
  
  spaceBetween: 20,
  // pagination: {
  //   el: '#project-tab-1 .pagination-page',
  //   clickable: true,
  // },
  navigation: {
      nextEl: '.news-project-button-next',
      prevEl: '.news-project-button-prev',
  },
    
});
