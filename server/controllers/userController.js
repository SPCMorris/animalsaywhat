const Models = require('../models/mainModel.js');

const User = Models.User;
const userRoutes = {};

userRoutes['/:type/user'] = {
  GET: (req, res) => {
    console.log('In GET in User!', req.url)
  }, 
  POST: (req, res) => {
    console.log('In POST in User', req.url)
  },
  PUT: (req, res) => {
    console.log('In PUT in User', req.url)
  },
  DELETE: (req, res) => {
    console.log('In DELETE in User', req.url)
  }
};

module.exports = userRoutes;
