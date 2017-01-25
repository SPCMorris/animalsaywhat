const router = require('express').Router();
const controllers = require('../controllers/mainController.js');

// Building routes array to handle all routes
const buildRoutesArr = (main_ctrl) => {
  const allRoutes = [];
  for(let ctrl in main_ctrl) {
    allRoutes.push(main_ctrl[ctrl]);
  }

  return allRoutes;
};

// Middleware for all routes
const routerMiddleware = (req, res, next) => {
  console.log("Request Method: ", req.method);
  console.log("Request URL: ", req.url);
  console.log("Request Body: ", req.body);
  next();
};

router.use(routerMiddleware);

// Routing
buildRoutesArr(controllers).map( (ctrl) => {
  for (let route in ctrl) {
    router.route(route)
      .get(ctrl[route].GET)
      .post(ctrl[route].POST)
      .put(ctrl[route].PUT)
      .delete(ctrl[route].DELETE);
  }
});

module.exports = router;
