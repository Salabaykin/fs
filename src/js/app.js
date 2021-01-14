document.addEventListener("DOMContentLoaded", function() {

  var promoSlider = new Swiper('.promo-slider.swiper-container', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  var compositeSlider = new Swiper('.composite-slider.swiper-container', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    slidesPerView: 3,
    spaceBetween: 30,
  });
  var monoSlider = new Swiper('.mono-slider.swiper-container', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    slidesPerView: 3,
    spaceBetween: 30,
  });

  $('.compositions-slider').slick({
    slidesToShow: 3,
    speed: 10,
    fade: false,
  });
});

