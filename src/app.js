const express = require("express");

const { adminAuth, userAuth } = require("./middleWares/auth");

const app = express();



app.use("/user/login", (req, res) => {
  res.send("Login successfully");
});


app.use("/admin", adminAuth);

app.use("/admin/getData",  (req, res, next) => {
  res.send("data sent to safe user");
});
app.use("/admin/delete", (req, res) => {
  res.send("deleted by safe user");
});


app.get("/user/data", userAuth, (req, res)=>{
  res.send("data is visible to user");
})


app.listen(3333, () => {
  console.log("server is successfully listenning  on port  ");
});
