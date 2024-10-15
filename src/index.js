import axios from 'axios';
import './style.css';
import 'materialize-css/dist/css/materialize.min.css'
import { initSwiper } from './components/swiper';
import { renderQuestions } from './components/render';
import { alertCorrect, alertIncorrect } from './components/alerts';

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('select');
  var instances = M.FormSelect.init(elems);
});

const score = document.getElementById('score');
const questionsLength = document.getElementById('questions-length');

let correctAnswers = [];
let setScore = 0;

document.getElementById('form').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const form = event.target; 
  const amount = form.elements['amount'].value;
  const difficulty = form.elements['difficulty'].value;
  const categories = form.elements['categories'].value;
  console.log(amount);
  console.log(difficulty);
  console.log(categories);
  fetchData(amount, difficulty, categories)
});

function fetchData(amount, difficulty, categories) {
axios.get('https://opentdb.com/api.php?', {
  params: {
    amount: amount,
    type: "multiple",
    difficulty: difficulty,
    category: categories, 
  }
})
  .then(function (response) {
    // manejar respuesta exitosa
    const results = response.data.results;
    questionsLength.innerHTML = results.length;
    correctAnswers = results.map(item => item.correct_answer);
    renderQuestions(results)
  })
  .catch(function (error) {
    // manejar error
    console.log(error);
  })
  .finally(function () {
    // siempre sera executado
  });
}

  let swiperInstance;

  window.getAnswers = function(value) {
    let selectAnswer = value.getAttribute("data-answer");
    let answer = correctAnswers.includes(selectAnswer);
    if (answer) {
      value.style.color = 'green';
      alertCorrect()
      setScore++;
      score.innerHTML = setScore;      
      swiperInstance.slideNext();
    } else {
      value.style.color = 'red';
      alertIncorrect()
      swiperInstance.slideNext();
    }
  };
  