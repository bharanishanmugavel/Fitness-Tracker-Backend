const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");

const { UserSchema } = require("../models/userModel");

const User = mongoose.model("users", UserSchema);

const createUser = async (req, res) => {
  const { name, email, password } =
    req.body;

  try {
    const newUser = new User({
      name,
      email,
      password
    });


    await newUser.save();

    // Respond to the client
    res.status(201).json({
      success: true,
      message: "User created successfully",
      userDetails: newUser,
    });
  } catch (error) {
    res.json(error);
  }
};


const getUser = async(req, res) => {

  const user = await User.findOne({ email: req.query.email });
    res.json(user);
};

module.exports = {
  createUser,
  getUser
};