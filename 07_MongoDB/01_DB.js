// show dbs
// use <db_name>
// show collections
// db.coll.find()
// db.coll.insert()

/*
Schema -Define the structure
    Schema - Model
    Using Model we do CRUD Operations
*/

const express = require("express");
const mongoose = require("mongoose");
const PORT = 8000;
const app = express();

app.use(express.urlencoded({ extended: false }));
// Connection
mongoose
  .connect("mongodb://127.0.0.1:27017/api-crud")
  .then(() => console.log("MongoDb Connected"))
  .catch((err) => console.log("Mongo Error", err));

// Schema
const userSchema = new mongoose.Schema(
  {
    first_name: {
      type: String,
      required: true,
    },
    last_name: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    gender: {
      type: String,
    },
    job_title: {
      type: String,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("user", userSchema);

// 1. Get user from DB [HTML]
app.get("/users", async (req, res) => {
  const allDbUsers = await User.find({}); //All users
  const html = `
    <ul>
        ${allDbUsers
          .map((user) => `<li>${user.first_name}- ${user.email}</li>`)
          .join(" ")}
    </ul>
    `;
  res.send(html);
});

// 2. Get all users from api endpoint [JSON]
app.get("/api/users", async (req, res) => {
  const allDbUsers = await User.find({});
  return res.json(allDbUsers);
});

// 3. Put data inside the DB
app.post("/api/users", async (req, res) => {
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
  const result = await User.create({
    first_name: body.first_name,
    last_name: body.last_name,
    email: body.email,
    gender: body.gender,
    job_title: body.job_title,
  });

  return res.status(201).json({ msg: "Inserted sucessfully" });
});

app.route("/api/users/:id").get(async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    return res.status(404).json({ msg: "User Not Found in DB" });
  }
  return res.json(user);
});

// 4. Get user by ID:

app.listen(PORT, () => console.log("Server started"));
