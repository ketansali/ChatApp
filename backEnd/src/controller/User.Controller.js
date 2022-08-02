const asyncHandler = require("express-async-handler");
const generateToken = require("../config/generateToken");
const User = require("../models/userModel");
exports.signUp = asyncHandler(async (req, res) => {
  try {
    const { name, email, password, pic } = req.body;

    if (!name || !email || !password) {
      res.status(400);
      throw new Error("Please Enter all the field");
    }

    const userExists = await User.findOne({ email });

    if (userExists) {
      res.status(400).json("User already exists");
    }
    const user = await User.create({
      name,
      email,
      password,
      pic,
    });

    if (user) {
      res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        pic: user.pic,
        token: generateToken(user._id),
      });
    } else {
      res.status(400);
      throw new Error("User not found");
    }
  } catch (err) {
    res.status(400);
    throw new Error(err);
  }
});
exports.signIn = asyncHandler(async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(400);
      throw new Error("Please Enter all the Feilds");
    }

    const user = await User.findOne({ email });

    if (user && (await user.matchPassword(password))) {
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        pic: user.pic,
        token: generateToken(user._id),
      });
    } else {
      res.status(401);
      throw new Error("Invalid Email or Password");
    }
  } catch (err) {
    res.status(400);
    throw new Error(err);
  }
});
