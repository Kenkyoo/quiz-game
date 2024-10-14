import './style.css';
import axios from 'axios';
import Swal from 'sweetalert2'
import 'materialize-css/dist/css/materialize.min.css'
import { initSwiper } from './components/swiper';
import { cards } from './components/cards';

const score = document.getElementById('score');
const questionsLength = document.getElementById('questions-length');

let correctAnswers = [];
let setScore = 0;

axios.get('https://opentdb.com/api.php?amount=10&type=multiple')
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

  let swiperInstance;
  function renderQuestions(questions) {
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
  
  function alertCorrect() {
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Correct!!!",
      showConfirmButton: false,
      timer: 1500
    });
  }

  function alertIncorrect() {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Incorrect answer!",
      footer: '<a href="#">Why do try again?</a>'
    });
  }
  