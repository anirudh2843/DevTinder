const express = require("express");
const connectDB = require("../config/database");
const app = express();
const User = require("../models/user");

app.post("/signup", async (req, res) => {
  const user = new User({
    firstName: "Anirudh",
    lastName: "Domakonda",
    password: "anirudh",
    age: "20",
    gender: "male",
    emailId: "danirud4@gmail.com",
  });
  try {
    user.save();
    res.send("user added successsfully");
  } catch (err) {
    res.status(400).send("Error Saving the user :" + err.message);
  }
});

connectDB()
  .then(() => {
    console.log("connection successfull");
    app.listen(3333, () => {
      console.log("server is successfully listenning  on port  ");
    });
  })
  .catch((err) => {
    console.log("connection failed");
  });
