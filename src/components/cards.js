import 'materialize-css'

export function cards(title, category, difficulty, answers, idx) {
return `  
    <div class="swiper-slide z-depth-5">
      <div class="card">
        <div class="card-content white-text">
          <span class="card-title">${title}</span>
          <p>Category: ${category}</p>
          <p>Difficulty: ${difficulty}</p>
          <p>Question number: ${idx}</p>
        </div>
        <div class="card-action">
          Options: 
          ${answers.map(answer => `<a data-answer="${answer}" onclick="getAnswers(this)" href="#">${answer}</a>`).join('')}
        </div>
      </div>
    </div>  
  `;
}