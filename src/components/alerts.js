import Swal from 'sweetalert2'

export function alertCorrect() {
    Swal.fire({
      icon: "success",
      title: "Correct!!!",
      showConfirmButton: false,
      timer: 1500
    });
  }

export  function alertIncorrect() {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Incorrect answer!",
      footer: '<a href="#">Why do try again?</a>'
    });
  }