const Helpers = require('../helpers.js');
const Animals = require('../models/animalModel.js');
const wikiScrapper = require('../scrappers/wikipedia.js');

const animalRoutes = {};

const GET = (req, res) => {
  const url = Helpers.parsedUrl(req.url);
  console.log('In GET in animal!', url);

  switch(url.query) {
    case 'all':
      Animals.findAllAnimals()
      .then( (response) => {
        res.status(200).send(response);
      });
      break;
    default:
      Animals.findAnimal(url.query)
      .then( (response) => {
        console.log("RESPONSE WIKI: ",response);
        res.status(200).send(response);
      });
  }
};

const POST = (req, res) => {
  const url = Helpers.parsedUrl(req.url);
  console.log('In POST in Animal', url)

  const dbReady = wikiScrapper.configAnimalData(url.query)
  /*.then((response) => {
      console.log('SCRAPPER WORKED WITH NO ERRORS');
      const animal = {
        name: 'cat',
        description: 'Cute!'
      };

      Animals.createAnimal(animal)
      .then( (response) => {
        console.log(response);
        res.status(200).send(response);
      })
  })
  .catch((error) => {
    console.log(error);
    return error;
  })*/
};

const PUT = (req, res) => {
  console.log('In PUT in Animal', req.url)
};

const DELETE = (req, res) => {
  console.log('In DELETE in Animal', req.url)
};

animalRoutes['/animal/:type?:name'] = {
  GET, 
  POST,
  PUT,
  DELETE
};

module.exports = animalRoutes;
