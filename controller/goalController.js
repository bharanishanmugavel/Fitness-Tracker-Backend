const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");

const { GoalSchema } = require("../models/goalModel");

const Goal = mongoose.model("goals", GoalSchema);

const createGoal = async (req, res) => {
  const { email, goal } =
    req.body;

  try {
    const newGoal = new Goal({
        goal,
      email,
      
    });


    await newGoal.save();

    // Respond to the client
    res.status(201).json({
      success: true,
      message: "Goal created successfully",
      goalDetails: newGoal,
    });
  } catch (error) {
    res.json(error);
  }
};


const getGoal = async(req, res) => {
  const userGoal = await Goal.findOne({ email: req.query.email });
    res.json(userGoal);
};

module.exports = {
  createGoal,
  getGoal
};