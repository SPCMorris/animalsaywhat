const AnimalCtrl = require('./animalController.js');
const UserCtrl = require('./userController.js');

// Aggregates all controllers to export as one to reduce redundancy and help with debugging
const Routes = {
  AnimalCtrl,
  UserCtrl
};

module.exports = Routes;
