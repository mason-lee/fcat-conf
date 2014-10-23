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
			/**
			 * Use a different layout
			 * Tutorial is here - http://lift.pressmist.com/use-different-layout-sails-js
			 */
			res.locals.layout = 'layoutadmin';
			res.view({users: users});
		});
	},

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