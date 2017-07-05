const Blog = require('./blogModel');

exports.params = (req, res, next, id) => {
		Blog
			.findById(id)
			.then(function (blogPost) {
					if (!blogPost) {
						next(new Error("No blog post with that ID"))
					} else {
						req.blogPost = blogPost;
						next();
					}
				}, function (err) {
						next(err);
				});
};

exports.get = (req, res, next) => {
		Blog
			.find()
			.then(function (blogPost) {
				res
					.status(200)
					.json(blogPost);
			})
			.catch(function (error) {
				next(error);
			});

}