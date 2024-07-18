const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userFoodSchema = new Schema({
  uid: {
    type: String,
  },
  nutritionIntake: {
    type: String,
  },
  meals: {
    type: String,
  },
  calorieConsumption: {
    type: String,
  }, date: {
    type: String,
  }, email: {
    type: String,
  }
});

module.exports = {
  userFoodSchema,
};