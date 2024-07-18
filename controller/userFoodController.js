// createUserWorkout,
//     getuserWorkoutWorkout,
const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");

const { userFoodSchema } = require("../models/userFoodModel");

const UserWorkout = mongoose.model("user-food", userFoodSchema);
const createUserWorkout = async (req, res) => {
  const {  
    nutritionIntake,
    meals,
    calorieConsumption, date, email } =
    req.body;

  try {
    const newUser = new UserWorkout({
      nutritionIntake,
      meals,
      calorieConsumption, date, email
    });


    await newUser.save();

    // Respond to the client
    res.status(201).json({
      success: true,
      message: "User food saved successfully",
      userFoodDetails: newUser,
    });
  } catch (error) {
    res.json(error);
  }
};



const getUserWorkout = async(req, res) => {

  const user = await UserWorkout.find({ email: req.query.email });
    res.json(user);
};

module.exports = {
  createUserWorkout,
  getUserWorkout
};