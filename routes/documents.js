// middleware
const dbControllerInit = require('../controllers/dbController');

module.exports = (app, pool) => {
  const dbController = dbControllerInit(pool);
  
  // define express routes here...
  
  
};

