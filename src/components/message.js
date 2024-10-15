export function showCompletionMessage(currentScore, totalQuestions) {
    const message = setResult(currentScore);
    document.querySelector('.swiper').style.display = "none";
    document.getElementById('message-container').innerHTML = `  
    <div class="card animate__animated animate__tada">
      <div class="card-image waves-effect waves-block waves-light">
        <img class="activator" src="images/office.jpg">
      </div>
      <div class="card-content">
        <span class="card-title activator grey-text text-darken-4">Card Title<i class="material-icons right">more_vert</i></span>
        <p><a href="#">This is a link</a></p>
      </div>
      <div class="card-reveal">
        <span class="card-title grey-text text-darken-4">${currentScore} de ${totalQuestions}<i class="material-icons right">close</i></span>
        <p>${message}</p>
      </div>
    </div>
    `;
  }

  function setResult(currentScore) {
    let message;
    switch (true) {
        case (currentScore < 3):
          message = "Siempre puedes volver a intentarlo";
          break;
        case (currentScore < 5):
          message = "No esta tan mal!!";
          break;
        case (currentScore < 8):
          message = "Muy bueno";
          break;
        case (currentScore == 10) :
            message = "Wowww!!!!";
          break;    
        default:
          break;
      }
      return message;
  }