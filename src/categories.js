document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('select');
  var instances = M.FormSelect.init(elems);
});

import axios from 'axios';

axios.get('https://opentdb.com/api_category.php')
  .then(function (response) {
    // handle success
    const categories = response.data.trivia_categories;
    renderCategories(categories);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  });

function renderCategories(array) {
  const select = document.getElementById('select-categories');
  array.forEach(element => {
    const option = document.createElement('option');
    option.value = element.id;
    option.textContent = element.name;
    select.appendChild(option);
  });

  // Re-inicializa el select después de agregar las opciones dinámicamente
  M.FormSelect.init(select);
}
