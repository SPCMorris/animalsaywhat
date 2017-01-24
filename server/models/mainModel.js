const db = require('../db/db.js');

const Animal = {};
const User = {};
const Models = {};

Models.Animal = Animal;
Models.User = User;

// Create

Animal.createAnimal = (input) => {
  return new Promise( (resolve, reject) => {
    return db('Animals').insert(input)
      .then( (result) => {
        resolve(result);
      })
      .catch( (err) => (err) );
      });
};

User.createUser = (request) => {
  const response = db('Users').where({
    nickname: request.nickname,
    password: request.password
  })
  .limit(1)
  .then( (rows) => (rows) )
  .catch( (err) => (err) );
};

// Read

Animal.findAllAnimals = () => (
  db('Animals')
  .then( (rows) => (rows) )
  .catch( (err) => (err) )
);

Animal.findAnimal = (request) => (
  db('Animals').where({
    name: request.name
  })
  .limit(1)
  .then( (rows) => (rows) )
  .catch( (err) => (err) )
);

User.findUser = (request) => (
  db('Users').where({
    nickname: request.nickname,
    password: request.password
  })
  .limit(1)
  .then( (rows) => (rows) )
  .catch( (err) => (err) )
);

// Update

// Delete

module.exports = Models;