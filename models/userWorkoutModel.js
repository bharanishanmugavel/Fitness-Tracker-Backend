const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserWorkoutSchema = new Schema({
  uid: {
    type: String,
  },
  duration: {
    type: String,
  },
  intensity: {
    type: String,
  },
  caloriesBurnt: {
    type: String,
  },
  type: {
    type: String,
  },
  email: {
    type: String,
  },
  date: {
    type: String,
  }
});

module.exports = {
  UserWorkoutSchema,
};