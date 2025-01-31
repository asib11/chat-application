const express = require('express');
const { getLogin, login, logout } = require("../controller/loginController");
const decoratedHtml = require('../middleware/common/decorateHtml')
// const { checkLogin } = require("../middleware/common/checkLogin");
const {
    doLoginValidators,
    doLoginValidationHandler,
  } = require("../middleware/login/loginValidators");
  const { redirectLoggedIn } = require("../middleware/common/checkLogin");
  
  const router = express.Router();
  
  // set page title
  const page_title = "Login";

router.get('/',decoratedHtml(page_title),redirectLoggedIn, getLogin);

// process login
router.post(
    "/",
    decoratedHtml(page_title),
    doLoginValidators,
    doLoginValidationHandler,
    login
  );
  
  // logout
  router.delete("/", logout);

module.exports = router;