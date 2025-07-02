const express = require("express");

const router = express.Router();

const {
  handleGetAllUser,
  handleGetUserById,
  handleUpdateUserById,
  handleDeleteUserById,
  handleCreateNewUser,
} = require("../controllers/user");

// 1. Get all users from api endpoint [JSON]
// 2. Insert data into the DB
router.route("/").get(handleGetAllUser).post(handleCreateNewUser);

// 3. Get user by ID: Delete user by ID: Update User by ID
router
  .route("/:id")
  .get(handleGetUserById)
  .patch(handleUpdateUserById)
  .delete(handleDeleteUserById);

module.exports = router;
