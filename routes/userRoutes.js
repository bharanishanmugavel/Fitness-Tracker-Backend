const {
    createUser,
    getUser,
  } = require("../controller/userController");
  
  const userRoutes = (app) => {
    app
      .route("/user")
      .post(createUser)
      .get(getUser);
  };
  
  module.exports = { userRoutes };