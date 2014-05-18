exports.index = function(req, res) {
	res.render('hello/index', {
		title: 'Hello'
	});
}
