const Models = require('../models/mainModel.js');

const User = Models.User;
const userRoutes = {};

const GET = (req, res) => {
  console.log('In GET in User!', req.url)
};
const POST = (req, res) => {
  console.log('In PUT in User', req.url)
};
const PUT = (req, res) => {
  console.log('In PUT in User', req.url)
};
const DELETE = (req, res) => {
  console.log('In DELETE in User', req.url)
};

userRoutes['/:type/user'] = {
  GET, 
  POST,
  PUT,
  DELETE
};

module.exports = userRoutes;
