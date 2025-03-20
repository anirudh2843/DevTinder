const express = require("express");
const requestRouter = express.Router();
const userAuth = require("../middleWares/auth");

requestRouter.post("/sendConnectionRequest", userAuth, async (req, res) => {
  const user = req.user;
  console.log("sending the connection request");

  res.send(user.firstName + " Sent the connection request");
});

module.exports = requestRouter;
