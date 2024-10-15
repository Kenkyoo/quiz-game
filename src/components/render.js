import { cards } from "./cards";
import { initSwiper } from './swiper';

let swiperInstance;
export function renderQuestions(questions) {
  const container = document.getElementById('container');
  let idx = 0;
  container.innerHTML = '';
  console.log(questions.length);
  questions.forEach(question => {
    idx++;
    question.incorrect_answers.push(question.correct_answer);
    question.incorrect_answers.sort(() => Math.random() - 0.5)
    const card = cards(question.question, question.category, question.difficulty, question.incorrect_answers, idx);
    container.innerHTML += card;
  });
  swiperInstance = initSwiper();
}

export { swiperInstance };