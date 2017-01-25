const Animals = require('./animalModel.js');
const Users = require('./userModel.js');

// Aggregates all models to export as one to reduce redundancy and help with debugging
const Models = {
  Animals,
  Users
};

module.exports = Models;