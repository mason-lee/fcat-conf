/**
 * SubmissionController
 * @description 
 * 	:: Server-side logic for managing the publishing of the submitted form
 * 	:: Admin can vet the submitted contents and decide to publish or remove the content
 * 
 */

module.exports = {
	index: function(req, res) {
		User.find({ where: { status: 'pending' } }).exec(function(err, users) {
			res.locals.layout = 'layoutadmin';
			res.view({users: users});
		});
	},

	edit: function(req, res) {
		User.find({ where: {id: req.param('id')} }).exec(function(err, users) {
			res.locals.layout = 'layoutadmin';
			res.view({users: users});
		});
	},

	update: function(req, res) {
		var categories = req.param('categories'),
			location = req.param('location'),
			responsibility = req.param('responsibility'),
			love = req.param('love'),
			failure = req.param('failure'),
			wish = req.param('wish'),
			wisdom = req.param('wisdom');

		User.update({id: req.param('id')}, {categories: categories, location: location, responsibility: responsibility, love: love, failure: failure, wish: wish, wisdom: wisdom}).exec(function(err, user) {
			res.redirect('/admin/submissions');
		});
	},

	approve: function(req, res) {
		User.update({id: req.param('id')}, { status: 'approved' }).exec(function(err, user) {
			res.redirect('/admin/submissions');
		});
	},

	reject: function(req, res) {
		User.update({id: req.param('id')}, {status: 'rejected'}).exec(function(err, user) {
			res.redirect('/admin/submissions');
		});
	}
};