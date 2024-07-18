// createUserWorkout,
//     getuserWorkoutWorkout,
const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");

const { UserWorkoutSchema } = require("../models/userWorkoutModel");

const UserWorkout = mongoose.model("user-workout", UserWorkoutSchema);


const createUserWorkout = async (req, res) => {
  const {  
    duration,
    intensity,
    caloriesBurnt,
    type,
    email,
    date } =
    req.body;

  try {
    const newUser = new UserWorkout({
        duration,
        intensity,
        caloriesBurnt,
        type,
        email,
        date
    });


    await newUser.save();

    // Respond to the client
    res.status(201).json({
      success: true,
      message: "User workout saved successfully",
      userDetails: newUser,
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