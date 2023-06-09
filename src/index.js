import { fetchBreeds } from '../src/api/cat-api';

const selectEL = document.querySelector('.breed-select');
console.log(selectEL);

fetchBreeds();
