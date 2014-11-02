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
		// In case you only allow to update specific fields.
		// User.update({id: req.param('id')}, {wisdom: wisdom}).exec(function(err, updated) {

		// });

		// In case we want to update everything.
		// User.update({id: req.param('id')}, req.params.all()).exec(function(err, updated) {
			
		// });
	}

	approve: function(req, res) {
		User.update({id: req.param('id')}, { status: 'approved' }).exec(function(err, user) {
			res.redirect('/admin/submissions');
			// res.view("<h4 class='bg-success'>Successfully published.</h4>");
		});
	},

	reject: function(req, res) {
		User.update({id: req.param('id')}, {status: 'rejected'}).exec(function(err, user) {
			res.redirect('/admin/submissions');
			// res.view("<h4 class='bg-danger'>Successfully deleted the information.</h4>");
		});
	}
};