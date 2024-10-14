// core version + navigation, pagination modules:
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

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

function showCompletionMessage(currentScore, totalQuestions) {
  document.getElementById('message-container').innerHTML = `  
  <div class="card">
    <div class="card-image waves-effect waves-block waves-light">
      <img class="activator" src="images/office.jpg">
    </div>
    <div class="card-content">
      <span class="card-title activator grey-text text-darken-4">Card Title<i class="material-icons right">more_vert</i></span>
      <p><a href="#">This is a link</a></p>
    </div>
    <div class="card-reveal">
      <span class="card-title grey-text text-darken-4">${currentScore} de ${totalQuestions}<i class="material-icons right">close</i></span>
      <p>Here is some more information about this product that is only revealed once clicked on.</p>
    </div>
  </div>
  `;
}