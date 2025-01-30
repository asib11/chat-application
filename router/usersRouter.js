const express = require("express");
const { getUsers,addUser,removeUser } = require("../controller/usersController");
const decoratedHtml = require("../middleware/common/decorateHtml");
const avatarUpload = require("../middleware/users/avatarUpload");
const {
  addUserValidators,
  addUserValidationHandler,
} = require("../middleware/users/userValidators");

const router = express.Router();

router.get("/", decoratedHtml("Users"), getUsers);

router.post("/", avatarUpload, addUserValidators, addUserValidationHandler,addUser);

router.delete('/:id', removeUser);

module.exports = router;
