module.exports = {
	index: function(req, res) {
		User.find({ where: { status: 'pending' } }).exec(function(err, users) {
			// console.log('users');
			res.view({users: users});
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