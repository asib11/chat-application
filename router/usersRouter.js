const express = require("express");
const { getUsers } = require("../controller/usersController");
const decoratedHtml = require('../middleware/common/decorateHtml')

const router = express.Router();

router.get("/",decoratedHtml('Users'), getUsers);

module.exports = router;
