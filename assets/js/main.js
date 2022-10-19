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
    })
  

    var bannerSwiper = new Swiper('.home-banner-swiper', {
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
    var investSwiper = new Swiper('.invest-field-swiper', {
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
   
    
})(jQuery);
