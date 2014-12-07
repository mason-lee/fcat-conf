module.exports = {
	index: function(req, res) {

		// console.log(req);
		//and try printing this req.session.flash

		User.find({ where: { status: 'approved' } }).exec(function(err, users) {
			res.view({users: users});
		});
	},

	detail: function(req, res) {
		User.find({ where: {id: req.param('id')} }).exec(function(err, users) {
			res.view({users: users});
		});
	}
}