const express = require('express');
const {getInbox} = require('../controller/inboxController')
const decoratedHtml = require('../middleware/common/decorateHtml');
const { checkLogin } = require("../middleware/common/checkLogin");

const router = express.Router()

router.get('/',decoratedHtml('inbox'),checkLogin, getInbox);

module.exports = router;