// Making 1st REST API
const express = require("express");
const app = express();
const users = require("./fake_data.json");
const PORT = 8000;
const fs = require("fs");
const path = require("path");
const { log } = require("console");

// 1st - Middleware to parse URL-encoded form data
app.use(express.urlencoded({ extended: false }));

// 2nd Middleware [custom]
app.use((req, res, next) => {
  console.log("Hello From custom middleware 1");
  // Midlleware has acess to rew and res objects
  // -they can Execute any code.
  // -Make changes to the request and the response objects.
  // -End the request-response cycle.
  // -Call the next middleware function in the stack.
  req.myUsername = "Sayoun from middleware 1";
  next();
});

// 3rd MIdlleware [custom] it takes logs of the users

app.use((req, res, next) => {
  console.log("Hello From custom middleware 2", req.myUsername);
  const logFile = path.join(__dirname, "logFile.txt");
  fs.appendFile(
    logFile,
    `\n${Date.now()}: ${req.ip} ${req.method}: ${req.path}`,
    (err) => {
      // 'err' is the correct parameter name
      if (err) {
        console.error("Error writing to log file:", err);
      }
      next(); // Always call next to continue
    }
  );
});

// Sequence of execution
// 1st middleware -> 2nd middleware -> 3rd middleware -> route code

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
  res.setHeader("X-MyHeader", "SayounExpress");
  return res.json(users);
});

// 2. GET /users/1 - Get user with ID:1
app
  .route("/api/users/:id")
  .get((req, res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    if (!user) return res.status(404).json({ msg: "User Not found" });
    return res.json(user);
  })
  .patch((req, res) => {
    // 3. Edit user with ID: TODO
    return res.status(501).json({ msg: "Method not implemented" });
  })
  .delete((req, res) => {
    // 4. Delete user with ID: TODO
    return res.status(501).json({ msg: "Method not implemented" });
  });

// 5 . POST /users - Create new user
app.post("/api/users", (req, res) => {
  const body = req.body;
  if (
    !body ||
    !body.first_name ||
    !body.last_name ||
    !body.email ||
    !body.gender ||
    !body.job_title
  ) {
    return res.status(400).json({ msg: "All flelds required" });
  }
  users.push({ id: users.length + 1, ...body });

  const filePath = path.join(__dirname, "fake_data.json");
  fs.writeFile(filePath, JSON.stringify(users), (err, data) => {
    if (err) return res.status(500).json({ status: "error", error: err });
    return res.status(201).json({ status: "success", id: users.length });
  });
});

app.listen(PORT, () => console.log("Server started"));
