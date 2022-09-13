$(document).ready(function() {


  // Зацикливание галлереи fancybox

  $("[data-fancybox]").fancybox({
    loop: true
  });


  // Плавный скролл
  
  if ($(window).width() > 992) {
    $('.smooth-scroll').on('click', function (e) {
      e.preventDefault();
      smoothScroll('product-card', 100);
    });
  } else {
    $('.smooth-scroll').on('click', function (e) {
      e.preventDefault();
      smoothScroll('product-card__form', ($(window).height() - 370));
    });
  }

  function smoothScroll(classOfName, topSmooth) {
    $('html, body').animate({
      scrollTop: $("." + classOfName).offset().top - topSmooth
    }, 1500);
  }


  // Добавление нуля, если число < 10

  function addZero(num) {
    return (num > 9) ? num : '0' + num;
  }


  // Динамическая дата, от сегодняшней + 2 дня с добавлением нулей, если день или месяц меньше 10

  function addDays(days) {
    var result = new Date();
    result.setDate(result.getDate() + days);
    return result;
  }

  $('.sale-date').text(addZero(addDays(2).getDate()) + '.' + (addZero(addDays(2).getMonth() + 1)) + '.' + (addDays(2).getFullYear()));


  // Выбор звёздочек при написании отзыва

  function feedbackStar(e) {
    const target = e.target;
    let index;


    $('.feedback-modal__dialog-star').each(function (i, key) {
      if (target == key) {
        index = i;
      }
    });

    $('.feedback-modal__dialog-star').each(function (i, key) {
      $(key).removeClass('feedback-modal__dialog-star--active');

      if (i <= index) {
        $(key).addClass('feedback-modal__dialog-star--active');
      }
    });
  }

  $('.feedback-modal__dialog-star').on('click', function (e) {
    feedbackStar(e);
  });

  $('.feedback-modal__dialog-star').on('touchstart', function (e) {
    feedbackStar(e);
  });


  // Скрытие модалки с отзывом, после нажатия кнопки отправить

  $.fancybox.defaults.closeExisting = true;


  // Отключение возвращения fancybox картинки при выходе

  $.fancybox.defaults.backFocus = false;


  // Инициальизация библиотеки с анимацияи

  // AOS.init();
  

  // Слайдер в секции 'gallery'

  const gallerySwiper = new Swiper('.gallery-swiper', {
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 29,
    centeredSlides: true,
    initialSlide: 2,
  
    pagination: {
      el: '.gallery-swiper__pagination',
      clickable: true,
    },

    breakpoints: {
      320: {
        spaceBetween: 20,
        slidesPerView: 1,
      },
      480: {
        spaceBetween: 29,
        slidesPerView: 'auto',
      },
    }
  });


  // Переключение размеров в секции 'product'

  $('.product-card__size').on('click', function() {
    const size = this;

    $(this).parents('.product-card__sizes').children('.product-card__size').each(function(i, key) {
      $(key).removeClass('product-card__size--active');

      if (size == key) {
        $(size).addClass('product-card__size--active');
      }
    });
  });


  // Слайдер в секции 'feedback'

  const feedbackSwiper = new Swiper('.feedback-swiper', {
    loop: true,
    spaceBetween: 30,

    navigation: {
      prevEl: '.feedback__swiper-button--prev',
      nextEl: '.feedback__swiper-button--next',
    },
  });
});