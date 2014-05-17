module.exports = function () {
	var exports = {};
	exports.index = function(req, res) {
		res.render('home', {
			title: 'Hello'
		});
	}
	return exports;
}