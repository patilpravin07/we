var express = require('express');
var router = express.Router();
var user = require('../controller/usecontroller');

router.post('/', user.insert);
router.get('/',user.get_data);

module.exports = router;
