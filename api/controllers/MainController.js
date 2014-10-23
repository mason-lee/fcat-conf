module.exports = {
	index: function(req, res) {
		User.find({ where: { status: 'approved' } }).exec(function(err, users) {
			res.view({users: users});
		});
	}
}