exports.index = function(req, res) {
	var signature = req.param('signature');

	var nonce = req.param('nonce');
	var timestamp = req.param('timestamp');
	var token = '';
	var tempstring = nonce+timestamp+token;
	var echostr;
	if(sha1(tempstring)==signature){
		echostr = req.param('echostr');
	}else{
		echostr = req.param('echostr');
	}
  	res.send(echostr);
};

function sha1(content){
	var crypto = require('crypto');
	var shasum = crypto.createHash('sha1');
	shasum.update(content);
	var d = shasum.digest('hex');
	return d;
}