const router = require('express').Router();
const controllers = require('../controllers/mainController.js');


const userCtrl = controllers.userCtrl;
const animalCtrl = controllers.AnimalCtrl;

const routerMiddleware = (req, res, next) => {
  console.log("Request Method: ", req.method);
  console.log("Request URL: ", req.url);
  console.log("Request Body: ", req.body);
  next();
};

router.use(routerMiddleware);

for (let route in animalCtrl) {
  router.route(route)
    .get(animalCtrl[route].GET)
    .post(animalCtrl[route].POST)
    .put(animalCtrl[route].PUT)
    .delete(animalCtrl[route].DELETE);
}


module.exports = router;
