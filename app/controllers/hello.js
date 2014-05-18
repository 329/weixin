var mongoose = require('mongoose'),
    Post = mongoose.model('Post');


exports.index = function(req, res) {
	var post = new Post({
		title: 'hello',
		content: 'everyone listen me!'
	});
	// post.save(function(err) {
	// 	if(err) {
	// 		return res.render('404');
	// 	}
	// 	res.render('hello/index', post);
	// });
	res.render('hello/index', post);
}
