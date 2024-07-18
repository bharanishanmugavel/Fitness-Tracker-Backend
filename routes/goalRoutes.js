const {
    createGoal,
    getGoal,
  } = require("../controller/goalController");
  
  const goalRoutes = (app) => {
    app
      .route("/goal")
      .post(createGoal)
      .get(getGoal);
  };
  
  module.exports = { goalRoutes };