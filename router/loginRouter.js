const express = require('express');
const {getLogin} = require('../controller/loginController')
const decoratedHtml = require('../middleware/common/decorateHtml')

const router = express.Router()

router.get('/',decoratedHtml('Login'), getLogin);

module.exports = router;