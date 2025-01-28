const express = require('express');
const {getInbox} = require('../controller/inboxController')
const decoratedHtml = require('../middleware/common/decorateHtml')

const router = express.Router()

router.get('/',decoratedHtml('inbox'), getInbox);

module.exports = router;