const db = require('../db/db.js');

const Animals = module.exports;

// Create
Animals.createAnimal = (input) => {
  return new Promise( (resolve, reject) => {
    return db('Animals').insert(input)
      .then( (result) => {
        resolve(result);
      })
      .catch( (err) => (err) );
      });
};

// Read
Animals.findAllAnimals = () => (
  db('Animals')
  .then( (rows) => (rows) )
  .catch( (err) => (err) )
);

Animals.findAnimal = (request) => (
  db('Animals').where({
    name: request
  })
  .then( (rows) => (rows) )
  .catch( (err) => (err) )
);


// Update

// Delete

