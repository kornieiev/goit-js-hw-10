import { fetchBreeds } from '../src/api/cat-api';

const selectEL = document.querySelector('.breed-select');
console.log(selectEL);

window.addEventListener('load', onLoad);

function onLoad() {
  fetchBreeds('cats')
    .then(resp => {
      const markup = makeSelectMarkup(resp);
      addMarkup(selectEL, markup);
    })
    .catch(error => console.log(error.message));
}

function makeSelectMarkup(items = []) {
  return items
    .map(({ id, name }) => {
      return `<option value="${id}">${name}</option>
    `;
    })
    .join('');
}

function addMarkup(ref, markup) {
  ref.innerHTML = markup;
}
