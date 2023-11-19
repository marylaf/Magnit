import Swiper from 'swiper';
import 'swiper/swiper-bundle.min.css';
import 'swiper/css/navigation';

const swiper = new Swiper('.swiper', {
    spaceBetween: 30,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.slider__icon_type_left',
      },
    mousewheel: true,
    keyboard: true,
  });