// core version + navigation, pagination modules:
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { showCompletionMessage } from './message';

export function initSwiper () {
  const swiperInstance =   new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      type: "progressbar",
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    on: {
      reachEnd: function() {
        const currentScore = document.getElementById('score').innerText;  // Obtener el puntaje actual del DOM
        const totalQuestions = document.getElementById('questions-length').innerText;  // Obtener el número total de preguntas
        showCompletionMessage(currentScore, totalQuestions);
      },
    },    
  });
  return swiperInstance;
}