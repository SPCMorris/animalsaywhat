const Models = require('../models/mainModel.js');

const Animal = Models.Animal;
const animalRoutes = {};

animalRoutes['/:type/animal'] = {
  GET: (req, res) => {
    console.log('In GET in animal!', req.url)
  }, 
  POST: (req, res) => {
    console.log('In POST in Animal', req.url)
  },
  PUT: (req, res) => {
    console.log('In PUT in Animal', req.url)
  },
  DELETE: (req, res) => {
    console.log('In DELETE in Animal', req.url)
  }
};

module.exports = animalRoutes;
