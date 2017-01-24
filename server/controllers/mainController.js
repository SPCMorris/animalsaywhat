const Models = require('../models/mainModel.js');

const Animal = Models.Animal;
const User = Models.User;


module.exports = {
  '/': {
    get: (req, res) => {
      console.log('IN GET SEARCH/ANIMALS')
      Animal.findAllAnimals()
        .then( (animals) => {
          if(!animals) {
            res.send('There are no animals');
          } else {
            res.send(animals);
          }
        })
    },

    post: (req, res) => {
      console.log('IN POST SEARCH/ANIMALS/:NAME');
      let user = {
        name: 'Kangaroo',
        description: 'Jumpy!!!'
      };

      Animal.createAnimal(user)
        .then( (result) => {
          console.log("Test log in createAnimal")
          res.send(result);
        })
        .catch( (err) => (err) )
    }
  }
};