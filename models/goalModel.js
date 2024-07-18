const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const GoalSchema = new Schema({
  uid: {
    type: String,
  },
  goal: {
    type: String,
  },
  email: {
    type: String,
  }
});

module.exports = {
  GoalSchema,
};