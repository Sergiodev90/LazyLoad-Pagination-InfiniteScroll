const apiKey = import.meta.env.VITE_API_KEY;
import { Welcome } from "./Types";

function getCats(): Promise<Welcome[]> {
  return fetch('https://api.thecatapi.com/v1/images/search?limit=15', {
    headers: {
      "x-api-key": apiKey
    }
  })
  .then(response => {
    if (!response.ok) {
      return Promise.reject(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then((data: Welcome[]) =>  data)
  .catch(error => {
    console.error('Error fetching cats:', error);
    throw error; // Propagate the error
  });
}

export { getCats };
