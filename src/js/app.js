document.addEventListener("DOMContentLoaded", function() {

  var promoSlider = new Swiper('.promo-slider.swiper-container', {
    navigation: {
      nextEl: '.promo-nav-arrow-next.swiper-button-next',
      prevEl: '.promo-nav-arrow-prev.swiper-button-prev',
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
  var compositionsSlider = new Swiper('.compositions-slider.swiper-container', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    slidesPerView: 3,
    spaceBetween: 30,
  });

  $('.photo-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.photo-slider-nav'
  });
  $('.photo-slider-nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.photo-slider',
    dots: false,
    infinite: false,
    vertical: true,
    focusOnSelect: true
  });

  // Amount
  const basketAmount = document.querySelectorAll('.amount');
  basketAmount.forEach(item => {
    const input = item.querySelector('.amount__input');
    input.value = 1;
    item.addEventListener('click', (event) => {
      const target = event.target;
      let count = input.value;
      if (target.closest('.amount__btn-plus')) {
        if (count < 999) {
          count++;
        }
      } else if (target.closest('.amount__btn-minus')) {
        if (count != '0') {
          count--;
        } 
      } 
      input.value = count;
    });
  });
});

