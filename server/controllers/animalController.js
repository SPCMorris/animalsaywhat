const Models = require('../models/mainModel.js');

const Animal = Models.Animal;
const animalRoutes = {};

const GET = (req, res) => {
  console.log('In GET in animal!', req.url)
};
const POST = (req, res) => {
  console.log('In PUT in Animal', req.url)
};
const PUT = (req, res) => {
  console.log('In PUT in Animal', req.url)
};
const DELETE = (req, res) => {
  console.log('In DELETE in Animal', req.url)
};

animalRoutes['/:type/animal'] = {
  GET, 
  POST,
  PUT,
  DELETE
};

module.exports = animalRoutes;
