var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log(JSON.stringify(req.headers));
  res.send('successfully retrieved the headers resource');
});

module.exports = router;
