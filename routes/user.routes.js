const router = require("express").Router();
const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const verifyToken = require("../middlewares/verifyToken");

router.get("/authcheck", verifyToken, async (req, res) => {
  try {
    const user = await User.findById(req.verifiedUser.id);
    return res.status(200).json({ user: user });
  } catch (error) {
    return res.status(500).json({ message: message.error });
  }
});

router.post("/register", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      return res.status(422).json({ message: "Email already exist" });
    }
    const salt = await bcrypt.genSalt(16);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const newUser = new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      phoneNumber: req.body.phoneNumber,
      email: req.body.email,
      password: hashedPassword,
    });
    const savedUser = await newUser.save();
    return res.status(201).json({ user: savedUser });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(403).json({ message: "Wrong Email/password" });
    }
    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!validPassword) {
      return res.status(403).json({ message: "Wrong Email/password" });
    }
    const token = jwt.sign(
      { id: user.id, isHost: user.isHost },
      process.env.TOKEN_KEY,
      {
        expiresIn: "2 days",
      }
    );
    return res.status(200).json({ token: token, user: user });
  } catch (err) {
    return res.status(500).json({ message: err });
  }
});

router.get("/userList", async (req, res) => {
  try {
    const userList = await User.find().sort("-createdAt");

    return res.status(200).json({ users: userList });
  } catch (err) {
    return res.status(500).json({ message: err });
  }
});

module.exports = router;
