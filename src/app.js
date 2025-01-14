const express = require("express");

const app = express();

app.get("/user", (req, res) => {
  res.send({ firstName: "Anirudh", lastName: "Domakonda" });
});

app.post("/user", (req, res) => {
  res.send("saved to db sucessfully");
});

app.delete("/user", (req, res) => {
  res.send("Deleted successfully");
});

app.use("/hello", (req, res) => {
  res.send("hello from server");
});

app.listen(3333, () => {
  console.log("server is successfully listenning  on port  ");
});
