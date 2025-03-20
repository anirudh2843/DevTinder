const express = require("express");
const profileRouter = express.Router();
const userAuth= require("../middleWares/auth");

profileRouter.get("/profile", userAuth, async (req, res) => {
  try {
    const user = req.user;
    res.send(user);
  } catch (err) {
    throw new Error("Error to get profile");
  }
});

module.exports = profileRouter;
