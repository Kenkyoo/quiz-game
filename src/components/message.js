export function showCompletionMessage(currentScore, totalQuestions) {
    const message = setResult(currentScore);
    document.querySelector('.swiper').style.display = "none";
    document.getElementById('message-container').innerHTML = `  
    <div class="card card-message animate__animated animate__tada">
      <div class="card-image waves-effect waves-block waves-light">
        <img class="activator" src="https://images.unsplash.com/photo-1576610981602-438b2860eb77?q=80&w=1450&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
      </div>
      <div class="card-content">
        <h2 class="white-text">Congrats!! Do you see your score??</h2>
        <span class="card-title activator white-text text-darken-4">See my score<i class="material-icons right">more_vert</i></span>
      </div>
      <div class="card-reveal">
        <div class="section no-pad-bot">
          <div class="container>
            <div class="row center">
              <h1 class="header center col s12">${currentScore} scores from ${totalQuestions} questions</h1>
            </div>  
            <div class="row center">
              <h5 class="header col s12">${message}</h5>
            </div>
            <div class="row center">
              <a href="http://materializecss.com/getting-started.html" id="download-button" class="btn-large waves-effect waves-light teal lighten-1">Do you try again?</a>
            </div>
            <br><br>
          </div>
        </div>
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