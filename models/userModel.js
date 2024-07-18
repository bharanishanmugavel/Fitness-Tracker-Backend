const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  uid: {
    type: String,
  },
  name: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
}, { timestamps: true });

module.exports = {
  UserSchema,
};