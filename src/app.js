const express = require("express");

const app = express();

app.use("/hello", (req, res) => {
  res.send("hello from server");
});

app.use("/about", (req, res) => {
  res.send("about of server");
});
app.use("/", (req, res) => {
  res.send("welcome...");
});

app.listen(3333, () => {
  console.log("server is successfully listenning  on port  ");
});
