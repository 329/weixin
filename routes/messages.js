var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
	var bodydata = req.param('body');
	var name = req.param('name');
  	res.send('hello '+name);
  // res.send('chendong shi sb');
});

module.exports = router;