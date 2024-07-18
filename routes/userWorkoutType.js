const {
    createUserWorkout,
    getUserWorkout,
  } = require("../controller/userWorkoutController");
  
  const userWorkoutRoutes = (app) => {
    app
      .route("/userWorkout")
      .post(createUserWorkout)
      .get(getUserWorkout);
      
      app
      .route("/userAllWorkouts")
      .get(getUserWorkout);
      

  };
  
  module.exports = { userWorkoutRoutes };