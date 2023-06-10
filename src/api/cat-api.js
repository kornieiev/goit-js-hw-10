const BASE_URL = 'https://api.thecatapi.com/v1/breeds/?';
const API_KEY =
  'live_D926Uhee2exXrC31Gao4Ns1lF8BgZxM0Gd2ta4fRblFZ0yEBKDmqC1tcn4MX6tjD';

const ref = `${BASE_URL}x-api-key=${API_KEY}`;
console.log(ref);

export function fetchBreeds(param) {
  return fetch(ref).then(resp => {
    console.log(resp);

    if (!resp.ok) {
      throw new Error(resp.statusText || resp.status);
    }
    console.log(resp);

    return resp.json();
  });
  // .then(data => console.log(data));
}
