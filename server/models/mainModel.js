const db = require('../db/db.js');
const { Animal, User } = module.exports;

// Create

Animal.createAnimal = (request) => {
  const response = db('Animal').where({
    name: request.name,
    description: request.description
  })
  .limit(1)
  .then( (rows) => rows )
  .catch( (err) => err );
};

User.createUser = (request) => {
  const response = db('User').where({
    nickname: request.nickname,
    password: request.password
  })
  .limit(1)
  .then( (rows) => rows )
  .catch( (err) => err );
};

// Read

Animal.findAllAnimals = () => (
  db('Animals')
  .then( (rows) => rows )
  .catch( (err) => err );
);

Animal.findAnimal = (request) => (
  db('Animals').where({
    name: request.name
  })
  .limit(1)
  .then( (rows) => rows )
  .catch( (err) => err );
);

User.findUser = (request) => (
  db('Users').where({
    nickname: request.nickname,
    password: request.password
  })
  .limit(1)
  .then( (rows) => rows )
  .catch( (err) => err );
);

// Update

// Delete