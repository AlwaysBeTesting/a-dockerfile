var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('successfully retrieved the user resource');
});

module.exports = router;
