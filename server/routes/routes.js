const router = require('express').Router();
const controllers = require('../controllers/mainController.js');

// Building routes array to handle all routes
const userCtrl = controllers.UserCtrl;
const animalCtrl = controllers.AnimalCtrl;

const allRoutes = [];
allRoutes.push(userCtrl);
allRoutes.push(animalCtrl);


// Middleware for all routes
const routerMiddleware = (req, res, next) => {
  console.log("Request Method: ", req.method);
  console.log("Request URL: ", req.url);
  console.log("Request Body: ", req.body);
  next();
};

router.use(routerMiddleware);

// Routing
allRoutes.map( (ctrl) => {
  for (let route in ctrl) {
    router.route(route)
      .get(ctrl[route].GET)
      .post(ctrl[route].POST)
      .put(ctrl[route].PUT)
      .delete(ctrl[route].DELETE);
  }
});


module.exports = router;
