const {
    createUserWorkout,
    getUserWorkout,
  } = require("../controller/userFoodController");
  
  const userFoodRoutes = (app) => {
    app
      .route("/userFood")
      .post(createUserWorkout)
      .get(getUserWorkout);
  };
  
  module.exports = { userFoodRoutes };