// Making 1st REST API
const express = require("express");
const app = express();
const users = require("./fake_data.json");
const PORT = 8000;
const fs = require("fs");

// Middleware to parse URL-encoded form data
app.use(express.urlencoded({ extended: false }));

//0. GET /users - HTML Render
app.get("/users", (req, res) => {
  const html = `
  <ul>
    ${users.map((user) => `<li>${user.first_name}</li>`).join(" ")}
  </ul>
  `;
  res.send(html);
});

//1. GET /api/users - List all users in JSON
app.get("/api/users", (req, res) => {
  return res.json(users);
});

// 2. GET /users/1 - Get user with ID:1
app
  .route("/api/users/:id")
  .get((req, res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    return res.json(user);
  })
  .patch((req, res) => {
    // 3. Edit user with ID: TODO
    return res.json({ status: "pending...patch" });
  })
  .delete((req, res) => {
    // 4. Delete user with ID: TODO
    return res.json({ status: "pending...delete" });
  });

// 5 . POST /users - Create new user
app.post("/api/users", (req, res) => {
  // Create new user :TODO
  const body = req.body;
  users.push({ id: users.length + 1, ...body });
  fs.writeFile("../fake_data.json", JSON.stringify(users), (err, data) => {
    return res.json({ status: "success", id: users.length });
  });
});

app.listen(PORT, () => console.log("Server started"));
