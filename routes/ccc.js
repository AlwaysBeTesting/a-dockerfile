var express = require('express');
var bodyParser = require('body-parser')
var router = express.Router();

// create application/json parser
var jsonParser = bodyParser.json()

/* POST rerouteCallStatus */
router.post('/voice/v1/interruptCallStatus', jsonParser, function(req, res, next) {
  console.log(req.body); 
  res.sendStatus(202);
});

/* POST rerouteCallStatus */
router.post('/voice/v1/rerouteCallStatus', jsonParser, function(req, res, next) {
  console.log(req.body);
  res.sendStatus(202);
});


module.exports = router;
