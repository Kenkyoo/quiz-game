import 'materialize-css'

export function cards(title, category, difficulty, answers, idx) {
return `  
    <div class="swiper-slide z-depth-5">
      <div class="card blue-grey darken-1">
        <div class="card-content white-text">
          <span class="card-title">${title}</span>
          <p>${category}</p>
          <p>${difficulty}</p>
          <p>Question number: ${idx}</p>
        </div>
        <div class="card-action">
          ${answers.map(answer => `<a data-answer="${answer}" onclick="getAnswers(this)" href="#">${answer}</a>`).join('')}
        </div>
      </div>
    </div>  
  `;
}