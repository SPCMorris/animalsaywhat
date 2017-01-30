import axios from 'axios';

const wikiApiCall = (request) => {
  const response = axios.get('https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro=&explaintext=&titles=' + request);

  return response;
};

const storeApiResponse = (response) => {
  console.log(response);
}

const WikiActions = {
  wikiApiCall: wikiApiCall,
  storeApiResponse: storeApiResponse
};


export default WikiActions;