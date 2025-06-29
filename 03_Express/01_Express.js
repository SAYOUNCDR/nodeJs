const express = require("express");

const app = express();

app.get("/", (req, res) => {
  return res.send("Hello from Home Page");
});
// [/about]: These are called routes
app.get("/about", (req, res) => {
  return res.send(`Hey! ${req.query.name} what's up `);
});

//Express way to create http server
app.listen(8000, () => console.log("Server Started by Express"));
